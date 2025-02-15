"use client"

import Link from "next/link"
import { Search, User, ShoppingBasket } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartDrawer from "./cart-drawer"
import Image from "next/image"
import { useState } from "react"
import SearchDialog from "./search-dialog"
import { useAuth } from "@/contexts/auth-context"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { toast } from "sonner"

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { user, logout } = useAuth()

  const menuItems = {
    botanyBazaar: [
      { name: "Small Indoor Plants", href: "/Shop/small-indoor" },
      { name: "Large Size Plant", href: "/Shop/large-size" },
      { name: "Air Purifying Plants", href: "/Shop/air-purifying" },
      { name: "Flowering Plants", href: "/Shop/flowering" },
      { name: "Pet-Friendly Plants", href: "/Shop/pet-friendly" },
    ],
  }

  const handleLogout = () => {
    logout()
    toast.success("Logged out successfully")
  }

  return (
    <>
      <header className="border-b bg-[#FFFDD0]">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-32">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Botany Bazaar Logo"
              width={250}
              height={100}
              className="h-24 w-auto"
            />
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-12">
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-[#2F4F4F] transition-transform duration-300 hover:scale-95"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                • SHOP
                <span className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Mega Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg w-[600px] z-50
                  transform transition-all duration-300 ease-in-out
                  ${isDropdownOpen
                    ? "opacity-100 translate-y-0 rotate-0"
                    : "opacity-0 -translate-y-3 -rotate-2 pointer-events-none"
                  }`}
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    <div className="w-full space-y-2">
                      <h3 className="text-[#2F4F4F] font-semibold text-xl mb-4">Botany Bazaar</h3>
                      {menuItems.botanyBazaar.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center bg-[#24695c] text-white py-3 px-4 rounded
                            hover:bg-[#24695c]/90 transform transition-all duration-300
                            hover:translate-x-2 hover:scale-105
                            ${isDropdownOpen
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                            }`}
                          style={{
                            transitionDelay: `${index * 50}ms`,
                            animationDelay: `${index * 50}ms`
                          }}
                        >
                          <span className="flex-grow">{item.name}</span>
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">›</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/bestseller" className="text-[#2F4F4F]">
              BESTSELLER
            </Link>
            <Link href="/corporate" className="text-[#2F4F4F]">
              CORPORATE/BULK GIFTING
            </Link>
            <Link href="/deals" className="text-[#2F4F4F]">
              DEAL OF THE DAY
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <SearchDialog />
            <CartDrawer />

            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                            <User className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem className="font-medium">
                            {user.name}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Link href="/login">
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                    </Button>
                </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

