"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function CorporatePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />
            <main>
                {/* Hero Section with Form */}
                <section className="relative bg-[#f5f5f5] py-16">
                    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
                        {/* Left Side - Content */}
                        <div>
                            <h1 className="text-5xl font-bold mb-4">
                                <span className="text-orange-400">Green gifts for</span>
                                <br />
                                <span className="text-[#2F4F4F]">Everlasting Bonds</span>
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Fill out the form and our representative will get back to you as soon as possible
                            </p>
                            <Image
                                src="/images/bg.jpg"
                                alt="Corporate Plants"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-[#2F4F4F] mb-6">Need Help?</h2>
                            <p className="text-gray-600 mb-4">Our Gifting Expert is just a call away!</p>
                            <p className="text-gray-600 mb-8">Call us on : <span className="font-semibold">+91 9201962751</span></p>

                            <form className="space-y-6">
                                <div>
                                    <Input placeholder="Full Name" className="w-full" />
                                </div>
                                <div>
                                    <Input
                                        placeholder="Whatsapp Number"
                                        className="w-full"
                                        type="tel"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Please enter exactly 10 digits</p>
                                </div>
                                <div>
                                    <Input placeholder="Email Address" type="email" className="w-full" />
                                </div>
                                <div>
                                    <Input placeholder="Company Name" className="w-full" />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Customisation request if any"
                                        className="w-full min-h-[100px]"
                                    />
                                </div>
                                <Button
                                    className="w-full bg-[#8B4513] hover:bg-[#8B4513]/90 text-white"
                                >
                                    Submit & Get Your Quote!
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mt-8">
                            <Link
                                href="/Shop/all-products"
                                className="inline-block bg-[#2F4F4F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2F4F4F]/90 transition-colors"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}