"use client"

import ProductGrid from "@/components/product-grid"

const products = [
    {
        id: 14,
        name: "Self Watering System",
        rating: 4.9,
        reviews: 245,
        price: 499,
        originalPrice: 699,
        discount: "29% OFF",
        features: ["Automatic", "Easy Setup"],
        image: "/images/self-watering-system.jpeg",
    },
    // Add more self watering products
]

export default function SelfWateringPage() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">Self Watering Solutions</h1>
                <ProductGrid products={products} />
            </div>
        </div>
    )
}