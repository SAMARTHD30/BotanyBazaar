"use client"

import { useState } from "react"
import { Button } from "./button"
import { MessageCircle, X, Image as ImageIcon, Loader2 } from "lucide-react"
import Image from "next/image"

interface Message {
    type: 'user' | 'assistant'
    content: string
    image?: string
}

export function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            type: 'assistant',
            content: `👋 Hi! I'm Sage, your plant care expert.

I can help with:
🌿 Plant identification
🪴 Care tips & watering
🔍 Problem diagnosis
🌱 Growing advice

Ask me anything or share a photo!`
        }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImageFile(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() && !imageFile) return

        setIsLoading(true)

        try {
            // Add user message with image if present
            const userMessage: Message = {
                type: 'user',
                content: input,
                image: imagePreview || undefined
            }
            setMessages(prev => [...prev, userMessage])

            // Prepare form data for API
            const formData = new FormData()
            formData.append('message', input)
            if (imageFile) {
                formData.append('image', imageFile)
            }

            // Call API
            const response = await fetch('/api/chat', {
                method: 'POST',
                body: formData
            })

            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            // Add AI response
            setMessages(prev => [...prev, {
                type: 'assistant',
                content: data.response
            }])
        } catch (error) {
            console.error('Error:', error)
            setMessages(prev => [...prev, {
                type: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            }])
        } finally {
            setIsLoading(false)
            setInput('')
            setImageFile(null)
            setImagePreview(null)
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chat Button - Make it slightly larger */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full w-14 h-14 bg-[#24695c] hover:bg-[#24695c]/90"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </Button>

            {/* Chat Window - Increase width and height */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[450px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col">
                    {/* Header - Make it more prominent */}
                    <div className="p-5 border-b bg-[#24695c] text-white rounded-t-lg">
                        <h3 className="font-semibold text-lg">Chat with Sage</h3>
                    </div>

                    {/* Messages - Adjust spacing */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-5">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-4 rounded-lg ${message.type === 'user'
                                        ? 'bg-[#24695c] text-white'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {message.image && (
                                        <div className="mb-3">
                                            <Image
                                                src={message.image}
                                                alt="Uploaded plant"
                                                width={300}
                                                height={300}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    )}
                                    <div className="text-[15px] leading-relaxed">
                                        {message.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Section - Make it more spacious */}
                    <form onSubmit={handleSubmit} className="p-5 border-t">
                        {imagePreview && (
                            <div className="mb-3 relative">
                                <Image
                                    src={imagePreview}
                                    alt="Preview"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                />
                                <button
                                    onClick={() => {
                                        setImageFile(null)
                                        setImagePreview(null)
                                    }}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        )}
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 p-3 text-[15px] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#24695c]"
                                disabled={isLoading}
                            />
                            <label className="cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    disabled={isLoading}
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="w-12 h-12 bg-[#24695c] hover:bg-[#24695c]/90"
                                >
                                    <ImageIcon className="h-5 w-5 text-white" />
                                </Button>
                            </label>
                            <Button
                                type="submit"
                                className="w-12 h-12 bg-[#24695c] hover:bg-[#24695c]/90"
                                disabled={isLoading}
                            >
                                {isLoading ?
                                    <Loader2 className="h-5 w-5 animate-spin" /> :
                                    <MessageCircle className="h-5 w-5" />
                                }
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}