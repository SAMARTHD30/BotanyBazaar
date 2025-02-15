"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useAuth } from "@/contexts/auth-context"
import Navigation from "@/components/navigation"

interface ShippingDetails {
  fullName: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  })

  // Mock cart items - replace with your actual cart data
  const cartItems = [
    { name: "Snake Plant", price: 399, quantity: 1 },
    { name: "Peace Lily", price: 349, quantity: 2 },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = 99
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Add your payment processing logic here

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success("Order placed successfully!")
      router.push("/order-confirmation")
    } catch (error) {
      toast.error("Failed to process payment. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    router.push("/login")
    return null
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shipping Details Form */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={shippingDetails.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={shippingDetails.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <Input
                      id="state"
                      name="state"
                      value={shippingDetails.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                      PIN Code
                    </label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={shippingDetails.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={shippingDetails.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                  </div>
                ))}

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p className="font-medium">₹{subtotal}</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p>Shipping</p>
                    <p className="font-medium">₹{shipping}</p>
                  </div>
                  <div className="flex justify-between mt-2 text-lg font-semibold">
                    <p>Total</p>
                    <p>₹{total}</p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#24695c] hover:bg-[#24695c]/90 mt-6"
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  {isLoading ? "Processing..." : `Pay ₹${total}`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}