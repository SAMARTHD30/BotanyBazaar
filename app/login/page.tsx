"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "sonner"
import Navigation from "@/components/navigation"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { login } = useAuth()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await login(email, password)
            toast.success("Logged in successfully!")
            router.push("/")
        } catch (error) {
            toast.error("Failed to login. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Navigation />
            <div
                className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100"
                style={{
                    backgroundImage: 'url("/bg2.jpg")',
                    border: '2px solid red'
                }}
            >
                <div className="backdrop-blur-md bg-white/80 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Botany Bazaar</h1>
                    <div className="flex flex-col items-center">
                        <Link href="/" className="mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="Botany Bazaar Logo"
                                width={250}
                                height={100}
                                className="h-24 w-auto"
                                priority
                            />
                        </Link>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#24695c] hover:bg-[#24695c]/90"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>

                        <div className="text-center">
                            <Link
                                href="/signup"
                                className="text-[#24695c] hover:text-[#24695c]/90"
                            >
                                Don't have an account? Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}