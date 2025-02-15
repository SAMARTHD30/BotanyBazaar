"use client"

import { useState } from "react"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const allProducts = [
    {
        id: 1,
        name: "Lucky Jade Plant With Self Watering Pot",
        rating: 4.5,
        reviews: 222,
        price: 1299,
        originalPrice: 1496,
        discount: "36% OFF",
        features: ["Air Purifying", "Perfect Gift"],
        image: "/images/Jade.jpeg",
    },
    {
        id: 2,
        name: "Money Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 215,
        price: 1319,
        originalPrice: 1539,
        discount: "34% OFF",
        features: ["Vastu Approved", "Air Purifying"],
        image: "/images/money.jpeg",
    },
    {
        id: 3,
        name: "Snake Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 145,
        price: 1199,
        originalPrice: 1499,
        discount: "20% OFF",
        features: ["Low Light", "Air Purifying"],
        image: "/images/snake.png",
    },
    {
        id: 4,
        name: "Aglaonema Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 178,
        price: 1399,
        originalPrice: 1699,
        discount: "18% OFF",
        features: ["Low Maintenance", "Indoor Plant"],
        image: "/images/aglaonema.png",
    },
    {
        id: 5,
        name: "Peacock Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 156,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Decorative", "Humidity Loving"],
        image: "/images/peacock.png",
    },
    {
        id: 6,
        name: "Oyster Plant With Self Watering Pot",
        rating: 4.5,
        reviews: 134,
        price: 1199,
        originalPrice: 1399,
        discount: "14% OFF",
        features: ["Easy Care", "Colorful Foliage"],
        image: "/images/oyster.jpg",
    },
    {
        id: 7,
        name: "Lucky Bamboo With Self Watering Pot",
        rating: 4.9,
        reviews: 245,
        price: 999,
        originalPrice: 1299,
        discount: "23% OFF",
        features: ["Good Luck", "Low Maintenance"],
        image: "/images/bamboo.png",
    },
    {
        id: 8,
        name: "Spider Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 189,
        price: 1149,
        originalPrice: 1449,
        discount: "21% OFF",
        features: ["Air Purifying", "Pet Friendly"],
        image: "/images/spider.png",
    },
    {
        id: 9,
        name: "Calathea Triostar Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 198,
        price: 1499,
        originalPrice: 1799,
        discount: "17% OFF",
        features: ["Exotic", "Prayer Plant"],
        image: "/images/calathea.jpg",
    },
    {
        id: 10,
        name: "Golden Hahnii Snake Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 167,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Air Purifying", "Low Maintenance"],
        image: "/images/golden-hahnii.png",
    },
    {
        id: 11,
        name: "Lucky Bonsai With Self Watering Pot",
        rating: 4.9,
        reviews: 189,
        price: 2499,
        originalPrice: 2999,
        discount: "17% OFF",
        features: ["Indoor Bonsai", "Good Luck"],
        image: "/images/bonsai.jpg",
    },
    {
        id: 12,
        name: "Zamia Green With Self Watering Pot",
        rating: 4.7,
        reviews: 145,
        price: 1799,
        originalPrice: 2199,
        discount: "18% OFF",
        features: ["Air Purifying", "Low Light"],
        image: "/images/zamia.jpg",
    },
    {
        id: 13,
        name: "Philodendron Broken Heart With Self Watering Pot",
        rating: 4.8,
        reviews: 178,
        price: 1599,
        originalPrice: 1999,
        discount: "20% OFF",
        features: ["Trailing Plant", "Air Purifying"],
        image: "/images/philodendron.jpeg",
    },
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
    {
        id: 24,
        name: "Lucky Jade Plant With Self Watering Pot",
        rating: 4.5,
        reviews: 222,
        price: 1299,
        originalPrice: 1496,
        discount: "36% OFF",
        features: ["Air Purifying", "Perfect Gift"],
        image: "/images/Jade.jpeg",
    },
    {
        id: 25,
        name: "Money Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 215,
        price: 1319,
        originalPrice: 1539,
        discount: "34% OFF",
        features: ["Vastu Approved", "Air Purifying"],
        image: "/images/money.jpeg",
    },
    {
        id: 26,
        name: "Snake Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 145,
        price: 1199,
        originalPrice: 1499,
        discount: "20% OFF",
        features: ["Low Light", "Air Purifying"],
        image: "/images/snake.png",
    },
    {
        id: 27,
        name: "Aglaonema Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 178,
        price: 1399,
        originalPrice: 1699,
        discount: "18% OFF",
        features: ["Low Maintenance", "Indoor Plant"],
        image: "/images/aglaonema.png",
    },
    {
        id: 28,
        name: "Peacock Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 156,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Decorative", "Humidity Loving"],
        image: "/images/peacock.png",
    },
    {
        id: 29,
        name: "Oyster Plant With Self Watering Pot",
        rating: 4.5,
        reviews: 134,
        price: 1199,
        originalPrice: 1399,
        discount: "14% OFF",
        features: ["Easy Care", "Colorful Foliage"],
        image: "/images/oyster.jpg",
    },
    {
        id: 30,
        name: "Rhoeo Tricolor Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 167,
        price: 1099,
        originalPrice: 1399,
        discount: "21% OFF",
        features: ["Colorful", "Easy Care"],
        image: "/images/rhoeotricolor.jpg",
    },
    {
        id: 31,
        name: "Spider Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 189,
        price: 1149,
        originalPrice: 1449,
        discount: "21% OFF",
        features: ["Air Purifying", "Pet Friendly"],
        image: "/images/spider.png",
    },
    {
        id: 32,
        name: "Calathea Triostar Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 198,
        price: 1499,
        originalPrice: 1799,
        discount: "17% OFF",
        features: ["Exotic", "Prayer Plant"],
        image: "/images/calathea.jpg",
    },
    {
        id: 33,
        name: "Golden Hahnii Snake Plant With Self Watering Pot",
        rating: 4.8,
        reviews: 167,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Air Purifying", "Low Maintenance"],
        image: "/images/golden-hahnii.png",
    },
    {
        id: 34,
        name: "Lucky Bonsai With Self Watering Pot",
        rating: 4.9,
        reviews: 189,
        price: 2499,
        originalPrice: 2999,
        discount: "17% OFF",
        features: ["Indoor Bonsai", "Good Luck"],
        image: "/images/bonsai.jpg",
    },
    {
        id: 35,
        name: "Zamia Green With Self Watering Pot",
        rating: 4.7,
        reviews: 145,
        price: 1799,
        originalPrice: 2199,
        discount: "18% OFF",
        features: ["Air Purifying", "Low Light"],
        image: "/images/zamia.jpg",
    },
    {
        id: 36,
        name: "Philodendron Broken Heart With Self Watering Pot",
        rating: 4.8,
        reviews: 178,
        price: 1599,
        originalPrice: 1999,
        discount: "20% OFF",
        features: ["Trailing Plant", "Air Purifying"],
        image: "/images/philodendron.jpeg",
    },
    {
        id: 37,
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
        id: 38,
        name: "Rose Plant With Self Watering Pot",
        rating: 4.7,
        reviews: 156,
        price: 1299,
        originalPrice: 1599,
        discount: "19% OFF",
        features: ["Fragrant", "Colorful Blooms"],
        image: "/images/rose.jpg",
    },
    {
        id: 39,
        name: "Anthurium Plant With Self Watering Pot",
        rating: 4.9,
        reviews: 167,
        price: 1599,
        originalPrice: 1999,
        discount: "20% OFF",
        features: ["Indoor Flowering", "Long Lasting"],
        image: "/images/Anthurium.png",
    },
    {
        id: 40,
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
        id: 41,
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
        id: 42,
        name: "Hibiscus Plant With Self Watering Pot",
        rating: 4.6,
        reviews: 145,
        price: 1199,
        originalPrice: 1499,
        discount: "20% OFF",
        features: ["Tropical Flowers", "Bright Colors"],
        image: "/images/hibiscus.jpg",
    },
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

const filters = {
    priceRange: [
        { label: "Under ₹1000", value: "under-1000" },
        { label: "₹1000 - ₹1500", value: "1000-1500" },
        { label: "₹1500 - ₹2000", value: "1500-2000" },
        { label: "Above ₹2000", value: "above-2000" }
    ],
    plantTypes: [
        { label: "Small Indoor", value: "small-indoor", ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
        { label: "Large Size", value: "large-size", ids: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
        { label: "Air Purifying", value: "air-purifying", ids: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36] },
        { label: "Flowering", value: "flowering", ids: [37, 38, 39, 40, 41, 42] },
        { label: "Pet Friendly", value: "pet-friendly", ids: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53] }
    ]
}

export default function AllProductsPage() {
    const [selectedPriceRange, setSelectedPriceRange] = useState("")
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [sortBy, setSortBy] = useState("price-asc")

    // Filter and sort products
    let displayProducts = [...allProducts]

    // Apply plant type filter
    if (selectedTypes.length > 0) {
        const selectedTypeIds = selectedTypes.flatMap(type =>
            filters.plantTypes.find(t => t.value === type)?.ids || []
        )
        displayProducts = displayProducts.filter(product =>
            selectedTypeIds.includes(product.id)
        )
    }

    // Apply price range filter
    if (selectedPriceRange) {
        displayProducts = displayProducts.filter(product => {
            switch (selectedPriceRange) {
                case "under-1000": return product.price < 1000
                case "1000-1500": return product.price >= 1000 && product.price < 1500
                case "1500-2000": return product.price >= 1500 && product.price < 2000
                case "above-2000": return product.price >= 2000
                default: return true
            }
        })
    }

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">All Products</h1>

                {/* Filters Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    {/* Plant Type Filter */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Plant Types</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.plantTypes.map((type) => (
                                <Button
                                    key={type.value}
                                    variant={selectedTypes.includes(type.value) ? "default" : "outline"}
                                    onClick={() => {
                                        setSelectedTypes(prev =>
                                            prev.includes(type.value)
                                                ? prev.filter(t => t !== type.value)
                                                : [...prev, type.value]
                                        )
                                    }}
                                    size="sm"
                                    className={`transition-all duration-300 ${selectedTypes.length > 0 && !selectedTypes.includes(type.value)
                                            ? "opacity-50"
                                            : "opacity-100"
                                        }`}
                                >
                                    {type.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range Filter */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Price Range</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.priceRange.map((range) => (
                                <Button
                                    key={range.value}
                                    variant={selectedPriceRange === range.value ? "default" : "outline"}
                                    onClick={() => setSelectedPriceRange(range.value)}
                                    size="sm"
                                >
                                    {range.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Active Filters */}
                    <div className="flex flex-wrap gap-2">
                        {selectedTypes.map(type => (
                            <Badge key={type} variant="secondary">
                                {filters.plantTypes.find(t => t.value === type)?.label}
                                <button
                                    onClick={() => setSelectedTypes(prev => prev.filter(t => t !== type))}
                                    className="ml-2"
                                >×</button>
                            </Badge>
                        ))}
                        {selectedPriceRange && (
                            <Badge variant="secondary">
                                {filters.priceRange.find(r => r.value === selectedPriceRange)?.label}
                                <button onClick={() => setSelectedPriceRange("")} className="ml-2">×</button>
                            </Badge>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="mt-4">
                        <p className="text-sm text-gray-600">
                            Showing {displayProducts.length} products
                        </p>
                    </div>
                </div>

                {/* Product Grid */}
                <ProductGrid products={displayProducts} />
            </div>
        </div>
    )
}

