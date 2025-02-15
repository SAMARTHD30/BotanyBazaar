import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "sonner"
import { ChatlingScript } from "@/components/chatling-script"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Botany Bazaar',
  description: 'Your one-stop shop for all indoor and outdoor plants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
            <ChatlingScript />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

