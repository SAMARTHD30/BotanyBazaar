import Image from "next/image"

export default function SelfWateringSection() {
  return (
    <section className="bg-gradient-to-r from-teal-900 to-teal-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-lg p-4">
          <Image src="/images/main.png" alt="Self Watering Planter" width={500} height={500} className="w-full" />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">About Self-Watering Planters</h2>
          <p className="text-lg">
            Self-watering planters provide consistent moisture, prevent over watering, and simplify care for healthy
            plant growth.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">How it works</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Image
                  src="/images/1.png"
                  alt="Fill the Water Reservoir"
                  width={150}
                  height={150}
                  className="rounded-lg mb-2"
                />
                <p>Fill the Water Reservoir</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/2.png"
                  alt="Water reaches the soil"
                  width={150}
                  height={150}
                  className="rounded-lg mb-2"
                />
                <p>Water reaches the soil as needed</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/3.png"
                  alt="Healthy and Happy Plant"
                  width={150}
                  height={150}
                  className="rounded-lg mb-2"
                />
                <p>Healthy and Happy Plant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

