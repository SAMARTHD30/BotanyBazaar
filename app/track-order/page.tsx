"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TrackOrderPage() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">Track Your Order</h1>
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Order Number</label>
                            <Input placeholder="Enter your order number" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email Address</label>
                            <Input type="email" placeholder="Enter your email address" />
                        </div>
                        <Button className="w-full bg-[#2F4F4F] hover:bg-[#2F4F4F]/90">
                            Track Order
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}