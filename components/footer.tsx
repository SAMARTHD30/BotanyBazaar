import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2F4F4F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Botany Bazaar - One-Stop Solution For Plants And Pots Online In India</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Botany Bazaar</h3>
            <p className="text-gray-300">
              Inspired by the harmony of nature, Botany Bazaar brings you a curated collection of plants and pots.
              Cultivate your own sanctuary of serenity right at home. Whether you're a seasoned plant parent or just
              beginning your green journey, Botany Bazaar is here to nurture your passion for plants with expert
              guidance and premium products.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="#" className="hover:text-gray-300">
                Plant Paradise
              </Link>
              <Link href="#" className="hover:text-gray-300">
                8 Inch Pot
              </Link>
              <Link href="#" className="hover:text-gray-300">
                10 Inch Pot
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Build Your Own Bundle
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Deal Of The Day
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Track Your Order
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Contact Us
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <div className="space-y-2">
              <p>Address: Green Valley Plaza, 123 Botanical Gardens Road, Eco City, Maharashtra 400001</p>
              <p>Call us for Support: +91 1800-123-4567</p>
              <p>Timings: Mon-Sat from 9 am to 7 pm</p>
              <p>
                Email for Support: support@botanybazaar.co
                <br />
                For Bulk Orders: corporate@botanybazaar.co
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

