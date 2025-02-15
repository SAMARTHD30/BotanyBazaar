"use client"

import ProductGrid from "@/components/product-grid"

const products = [
    {
        id: 14,
        name: "Large Pachira Money Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 156,
        price: 1899,
        originalPrice: 2299,
        discount: "30% OFF",
        features: ["Air Purifying", "Large Size"],
        image: "/images/Pachira.png",
    },
    {
        id: 15,
        name: "Areca Palm With Self Watering Pot",
        rating: 4.7,
        reviews: 189,
        price: 2499,
        originalPrice: 2999,
        discount: "17% OFF",
        features: ["Air Purifying", "Humidity"],
        image: "/images/areca.png",
    },
    {
        id: 16,
        name: "Chamaedorea Palm With Self Watering Pot",
        rating: 4.6,
        reviews: 145,
        price: 1999,
        originalPrice: 2499,
        discount: "20% OFF",
        features: ["Low Light", "Air Purifying"],
        image: "/images/chamaedorea.png",
    },
    {
        id: 17,
        name: "ZZ Green Plant With Self Watering Pot",
        rating: 4.9,
        reviews: 234,
        price: 1699,
        originalPrice: 1999,
        discount: "15% OFF",
        features: ["Low Light", "Low Maintenance"],
        image: "/images/zzgreen.png",
    },
    {
        id: 18,
        name: "Monstera Deliciosa With Self Watering Pot",
        rating: 4.8,
        reviews: 278,
        price: 2299,
        originalPrice: 2799,
        discount: "18% OFF",
        features: ["Tropical", "Statement Plant"],
        image: "/images/monstera.png",
    },
    {
        id: 19,
        name: "China Doll Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 167,
        price: 1899,
        originalPrice: 2299,
        discount: "17% OFF",
        features: ["Indoor", "Decorative"],
        image: "/images/china-doll.jpg",
    },
    {
        id: 20,
        name: "Croton Petra With Self Watering Pot",
        rating: 4.7,
        reviews: 198,
        price: 1799,
        originalPrice: 2199,
        discount: "18% OFF",
        features: ["Colorful", "Bright Light"],
        image: "/images/croton.jpg",
    },
    {
        id: 21,
        name: "Ficus Lyrata With Self Watering Pot",
        rating: 4.8,
        reviews: 223,
        price: 2399,
        originalPrice: 2899,
        discount: "17% OFF",
        features: ["Large Leaves", "Statement Plant"],
        image: "/images/ficus.jpg",
    },
    {
        id: 22,
        name: "Aglaonema Ice With Self Watering Pot",
        rating: 4.7,
        reviews: 156,
        price: 1599,
        originalPrice: 1999,
        discount: "20% OFF",
        features: ["Low Light", "Variegated"],
        image: "/images/aglaonema.jpg",
    },
    {
        id: 23,
        name: "Thuja Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 145,
        price: 1999,
        originalPrice: 2499,
        discount: "20% OFF",
        features: ["Outdoor", "Evergreen"],
        image: "/images/thuja.jpeg",
    },
]

export default function LargeSizePlantsPage() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">Large Size Plants</h1>
                <ProductGrid products={products} />
            </div>
        </div>
    )
}