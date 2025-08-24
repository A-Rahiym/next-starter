import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About MANBEE_Cars
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Founded by{" "}
                <strong className="text-gray-900">Usman Gambo Lawal</strong>,
                MANBEE_Cars has been providing quality vehicles to customers in
                Zaria, Kaduna, Abuja and beyond since{" "}
                <strong className="text-orange-600">2015</strong>. We specialize
                in buying, selling, and trading both domestic and international
                vehicles.
              </p>

              <p>
                Located in the heart of Zaria's automotive district, we're proud
                to be part of Northern Nigeria's thriving vehicle market
                alongside established dealers like Yamu Motors and Gangara
                Motors Nig Enterprise. Our commitment to quality and customer
                satisfaction has made us a trusted name in the region.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-600">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Why Choose MANBEE_Cars?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Certified pre-owned vehicles with comprehensive
                    inspections
                  </li>
                  <li>• Competitive pricing and flexible financing options</li>
                  <li>• Trade-in services for seamless vehicle upgrades</li>
                  <li>• International shipping and export services</li>
                  <li>• Same-day delivery available for ready vehicles</li>
                  <li>• Comprehensive warranties and after-sales support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/Ceo.jpeg"
                alt="MANBEE_Cars Showroom"
                width={1000} // You must add these
                height={600} // for Next.js Image component
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Usman Gambo Lawal</h3>
                <p className="text-white/90">Founder & Owner</p>
                <p className="text-sm text-white/80 mt-1">Established 2015</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">9+</div>
                <div className="text-sm">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
