"use client"

import ProductGrid from "@/components/product-grid"

const products = [
    {
        id: 43,
        name: "Boston Fern With Self Watering Pot",
        rating: 4.6,
        reviews: 98,
        price: 1199,
        originalPrice: 1499,
        discount: "25% OFF",
        features: ["Pet Friendly", "Air Purifying"],
        image: "/images/boston.jpg",
    },
    {
        id: 44,
        name: "Chinese Money Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 167,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Easy Care", "Round Leaves"],
        image: "/images/chinesemoney.jpg",
    },
    {
        id: 45,
        name: "Golden Fern With Self Watering Pot",
        rating: 4.6,
        reviews: 145,
        price: 1199,
        originalPrice: 1499,
        discount: "20% OFF",
        features: ["Air Purifying", "Humidity Loving"],
        image: "/images/golden-fern.png",
    },
    {
        id: 46,
        name: "Haworthia Coarctata With Self Watering Pot",
        rating: 4.8,
        reviews: 156,
        price: 999,
        originalPrice: 1299,
        discount: "23% OFF",
        features: ["Succulent", "Low Maintenance"],
        image: "/images/haworthia-coarctata.png",
    },
    {
        id: 47,
        name: "Haworthia Turgida With Self Watering Pot",
        rating: 4.7,
        reviews: 134,
        price: 999,
        originalPrice: 1299,
        discount: "23% OFF",
        features: ["Succulent", "Compact Size"],
        image: "/images/haworthia-turgida.jpg",
    },
    {
        id: 48,
        name: "Christmas Cactus With Self Watering Pot",
        rating: 4.8,
        reviews: 189,
        price: 1399,
        originalPrice: 1699,
        discount: "18% OFF",
        features: ["Flowering", "Holiday Plant"],
        image: "/images/christmas-cactus.png",
    },
    {
        id: 49,
        name: "Earth Star Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 145,
        price: 1099,
        originalPrice: 1399,
        discount: "21% OFF",
        features: ["Colorful", "Low Light"],
        image: "/images/star.jpg",
    },
    {
        id: 50,
        name: "Peperomia Green With Self Watering Pot",
        rating: 4.7,
        reviews: 167,
        price: 1199,
        originalPrice: 1499,
        discount: "20% OFF",
        features: ["Pet Friendly", "Compact"],
        image: "/images/Peperomia.jpg",
    },
    {
        id: 51,
        name: "Golden Sedum With Self Watering Pot",
        rating: 4.8,
        reviews: 178,
        price: 999,
        originalPrice: 1299,
        discount: "23% OFF",
        features: ["Succulent", "Golden Color"],
        image: "/images/sedum.jpg",
    },
    {
        id: 52,
        name: "Calathea Rattlesnake With Self Watering Pot",
        rating: 4.9,
        reviews: 198,
        price: 1599,
        originalPrice: 1999,
        discount: "20% OFF",
        features: ["Patterned Leaves", "Prayer Plant"],
        image: "/images/calathea-rattlesnake.jpg",
    },
    {
        id: 53,
        name: "Fittonia Green With Self Watering Pot",
        rating: 4.7,
        reviews: 156,
        price: 999,
        originalPrice: 1299,
        discount: "23% OFF",
        features: ["Nerve Plant", "Terrarium"],
        image: "/images/fittonia.jpg",
    },
]

export default function PetFriendlyPlantsPage() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">Pet Friendly Plants</h1>
                <ProductGrid products={products} />
            </div>
        </div>
    )
}