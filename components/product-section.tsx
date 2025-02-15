"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"
import Link from "next/link"

const products = [
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
    name: "Golden Money Plant With Self Watering Pot",
    rating: 4.8,
    reviews: 215,
    price: 1319,
    originalPrice: 1539,
    discount: "34% OFF",
    features: ["Vastu Approved", "Perfect Gift"],
    image: "/images/money.jpeg",
  },
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
  },
]

export default function ProductSection() {
  const { addItem } = useCart()

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    toast.success("Added to cart!")
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2F4F4F] mb-12">Explore Our Plants</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-[#FFF5EA] rounded-lg p-4">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2">
                  <Image
                    src="/images/logo.png"
                    alt="Shark Tank"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                </div>
                <Badge className="absolute top-2 right-2 bg-[#2F4F4F]">{product.discount}</Badge>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                  <span className="text-sm">
                    {product.rating} | {product.reviews}
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

                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm" className="rounded-full w-8 h-8 bg-[#8B4513] text-white">
                    S
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full w-8 h-8">
                    M
                  </Button>
                </div>

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
        <div className="text-center mt-8">
          <Link href="/Shop/all-products">
            <Button variant="outline" size="lg">
              View all products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

