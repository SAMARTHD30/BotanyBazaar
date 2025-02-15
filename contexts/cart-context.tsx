"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}

interface CartContextType {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])

    const addItem = (newItem: CartItem) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === newItem.id)
            if (existingItem) {
                return currentItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...currentItems, { ...newItem, quantity: 1 }]
        })
    }

    const removeItem = (id: number) => {
        setItems(currentItems => currentItems.filter(item => item.id !== id))
    }

    const updateQuantity = (id: number, quantity: number) => {
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        )
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}