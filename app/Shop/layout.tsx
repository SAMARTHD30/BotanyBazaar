import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export const metadata = {
    title: 'Shop | Botany Bazaar',
    description: 'Explore our collection of plants at Botany Bazaar',
}