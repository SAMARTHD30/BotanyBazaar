"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"

interface Product {
  id: number
  name: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  discount: string
  features: string[]
  image: string
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart()

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    toast.success("Added to cart!")
  }

  return (
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
  )
}

