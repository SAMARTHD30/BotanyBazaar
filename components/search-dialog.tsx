"use client"

import { useState, useEffect, useRef, ChangeEvent } from "react"
import { Search, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

// Simplified product list
const products = [
  { name: "Aloe Vera", price: "₹299" },
  { name: "Snake Plant", price: "₹399" },
  { name: "Spider Plant", price: "₹249" },
  { name: "Peace Lily", price: "₹349" },
  { name: "Fiddle Leaf Fig", price: "₹599" },
  { name: "ZZ Plant", price: "₹449" },
  { name: "Money Plant", price: "₹199" },
  { name: "Bamboo Palm", price: "₹499" },
  { name: "Lucky Bamboo", price: "₹299" },
  { name: "Jade Plant", price: "₹349" },
  { name: "Boston Fern", price: "₹399" },
  { name: "Rubber Plant", price: "₹549" },
  { name: "Philodendron", price: "₹449" },
  { name: "Monstera", price: "₹699" },
  { name: "Pothos", price: "₹299" },
  { name: "Chinese Evergreen", price: "₹399" },
  { name: "Dracaena", price: "₹449" },
  { name: "Calathea", price: "₹499" },
  { name: "English Ivy", price: "₹349" },
  { name: "Anthurium", price: "₹599" },
  { name: "Bird's Nest Fern", price: "₹449" },
  { name: "String of Pearls", price: "₹399" },
  { name: "African Violet", price: "₹349" },
  { name: "Orchid", price: "₹699" },
  { name: "Air Plant", price: "₹249" },
  { name: "Cactus", price: "₹199" },
  { name: "Succulent", price: "₹249" },
  { name: "Croton", price: "₹449" },
  { name: "Prayer Plant", price: "₹399" },
  { name: "Peperomia", price: "₹349" },
  { name: "Areca Palm", price: "₹599" },
  { name: "Aglaonema", price: "₹449" },
  { name: "Asparagus Fern", price: "₹399" },
  { name: "Begonia", price: "₹349" },
  { name: "Bonsai", price: "₹999" },
  { name: "Christmas Cactus", price: "₹399" },
  { name: "Dieffenbachia", price: "₹449" },
  { name: "Ficus Benjamina", price: "₹599" },
  { name: "Gardenia", price: "₹549" },
  { name: "Hoya", price: "₹399" },
  { name: "Kalanchoe", price: "₹299" },
  { name: "Lily of the Valley", price: "₹449" },
  { name: "Maranta", price: "₹399" },
  { name: "Norfolk Island Pine", price: "₹599" },
  { name: "Oxalis", price: "₹349" },
  { name: "Parlor Palm", price: "₹499" },
  { name: "Polka Dot Plant", price: "₹299" },
  { name: "Rattlesnake Plant", price: "₹449" },
  { name: "Sago Palm", price: "₹699" },
  { name: "Schefflera", price: "₹549" },
  { name: "String of Hearts", price: "₹399" },
  { name: "Swiss Cheese Plant", price: "₹599" },
  { name: "Tradescantia", price: "₹349" },
  { name: "Umbrella Plant", price: "₹449" },
  { name: "Wandering Jew", price: "₹299" },
  { name: "Yucca", price: "₹599" },
  { name: "Zebra Plant", price: "₹449" },
  { name: "Rose Plant", price: "₹399" },
  { name: "Jasmine Plant", price: "₹349" },
  { name: "Hibiscus", price: "₹399" },
  { name: "Chrysanthemum", price: "₹349" },
  { name: "Marigold", price: "₹249" },
  { name: "Lily Plant", price: "₹449" },
  { name: "Dahlia", price: "₹399" },
  { name: "Sunflower", price: "₹299" },
  { name: "Tulsi Plant", price: "₹199" },
  { name: "Mint Plant", price: "₹149" },
  { name: "Lemongrass", price: "₹249" },
  { name: "Curry Leaf Plant", price: "₹299" },
  { name: "Stevia Plant", price: "₹349" },
  { name: "Ajwain Plant", price: "₹249" },
  { name: "Lemon Plant", price: "₹399" },
  { name: "Pomegranate Plant", price: "₹449" },
  { name: "Guava Plant", price: "₹399" },
  { name: "Mango Plant", price: "₹499" },
  { name: "Papaya Plant", price: "₹349" },
  { name: "Good Luck Bamboo", price: "₹499" },
  { name: "Money Tree", price: "₹599" },
  { name: "Crystal Bonsai", price: "₹1299" },
  { name: "Feng Shui Plants", price: "₹699" },
  { name: "Terrarium", price: "₹899" }
]

export default function SearchDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    // Open dialog on keyboard shortcut (Ctrl+K / Cmd+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey)) {
                e.preventDefault()
                setIsOpen(true)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    // Auto-focus the input when the dialog opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    )

    const handleProductClick = () => {
        setIsOpen(false)
        setQuery("")
        router.push("/Shop/all-products") // Simply redirect to allproducts page
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                title="Search (Ctrl+K)"
                className="p-2 rounded-full hover:bg-gray-200 transition"
            >
                <Search className="h-5 w-5 text-[#2F4F4F]" />
            </button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Search className="h-5 w-5" />
                            Search Products
                        </DialogTitle>
                    </DialogHeader>

                    <div className="relative">
                        <Input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Start typing to search..."
                            className="w-full"
                        />
                        {query && (
                            <button
                                onClick={() => setQuery("")}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                            >
                                <X className="h-4 w-4 text-gray-500" />
                            </button>
                        )}
                    </div>

                    <div className="mt-4 max-h-[300px] overflow-y-auto">
                        {query.length > 0 && (
                            <ul className="space-y-2">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, index) => (
                                        <li
                                            key={index}
                                            onClick={handleProductClick}
                                            className="p-3 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium">{product.name}</p>
                                                    <p className="text-sm text-gray-500">{product.price}</p>
                                                </div>
                                                <span className="text-sm text-gray-500">→</span>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-2 text-gray-500 text-center">
                                        No products found
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}