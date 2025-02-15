import Navigation from "@/components/navigation"
import SelfWateringSection from "@/components/self-watering-section"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main>
        <SelfWateringSection />
        <ProductSection />
      </main>
      <Footer />
    </div>
  )
}

