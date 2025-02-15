import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AuthPage() {
  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat bg-gray-100"
      style={{
        backgroundImage: 'url("/bg2.jpg")',
        border: '2px solid red'
      }}
    >
      <Navigation />
      <main className="flex-grow flex items-center justify-center">
        {/* Auth content will go here */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Authentication</h1>
          {/* Auth form components will be added here */}
        </div>
      </main>
      <Footer />
    </div>
  )
}