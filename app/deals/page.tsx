"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"

const dealProducts = [
    {
        id: 3,
        name: "Peace Lily Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 133,
        price: 1339,
        originalPrice: 1499,
        discount: "36% OFF",
        features: ["Air Purifying", "Perfect Gift"],
        image: "/images/lily.jpeg",
        dealEnds: "2024-04-30",
    },
    // Add more deal products
]

export default function DealsPage() {
    const { addItem } = useCart()

    const handleAddToCart = (product: typeof dealProducts[0]) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        })
        toast.success("Added to cart!")
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />
            <main>
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl font-bold text-center text-[#2F4F4F] mb-12">Deal of the Day</h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dealProducts.map((product) => (
                                <div key={product.id} className="bg-[#FFF5EA] rounded-lg p-4">
                                    <div className="relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={300}
                                            height={300}
                                            className="w-full h-[300px] object-cover rounded-lg"
                                        />
                                        <Badge className="absolute top-2 right-2 bg-red-600">{product.discount}</Badge>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                                            <span className="text-sm">
                                                {product.rating} | {product.reviews} reviews
                                            </span>
                                        </div>

                                        <h3 className="font-medium">{product.name}</h3>

                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold">₹{product.price}</span>
                                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                                        </div>

                                        <div className="flex gap-2">
                                            {product.features.map((feature) => (
                                                <Badge key={feature} variant="secondary">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>

                                        <p className="text-sm text-red-600">Deal ends: {new Date(product.dealEnds).toLocaleDateString()}</p>

                                        <Button
                                            className="w-full bg-[#2F4F4F] hover:bg-[#2F4F4F]/90"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Basket
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}