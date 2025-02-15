"use client"

import ProductGrid from "@/components/product-grid"

const products = [
    {
        id: 36,
        name: "Peace Lily Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 198,
        price: 1399,
        originalPrice: 1699,
        discount: "18% OFF",
        features: ["Air Purifying", "White Flowers"],
        image: "/images/lily.jpeg",
    },
    {
        id: 37,
        name: "Rose Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 156,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Fragrant", "Colorful Blooms"],
        image: "/images/rose.png",
    },
    {
        id: 38,
        name: "Anthurium Plant With Self Watering Pot",
        rating: 4.9,
        reviews: 167,
        price: 1599,
        originalPrice: 1999,
        discount: "20% OFF",
        features: ["Indoor Flowering", "Long Lasting"],
        image: "/images/anthurium.jpg",
    },
    {
        id: 39,
        name: "Jasmine Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 189,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Fragrant", "White Flowers"],
        image: "/images/jasmine.jpg",
    },
    {
        id: 40,
        name: "Orchid Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 178,
        price: 1899,
        originalPrice: 2299,
        discount: "17% OFF",
        features: ["Exotic Flowers", "Indoor Plant"],
        image: "/images/orchid.jpg",
    },
    {
        id: 41,
        name: "Hibiscus Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 145,
        price: 1199,
        originalPrice: 1499,
        discount: "20% OFF",
        features: ["Tropical Flowers", "Bright Colors"],
        image: "/images/hibiscus.jpg",
    }
]

export default function FloweringPlantsPage() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">Flowering Plants</h1>
                <ProductGrid products={products} />
            </div>
        </div>
    )
}