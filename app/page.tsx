import Link from "next/link";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-blue-600 to-pink-500 flex items-center justify-center px-6 pt-20 pb-20">
        <div className="max-w-5xl w-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Book Trusted Cleaners in the GTA — Instantly.
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8">
            Tech-powered home, condo & business cleaning. Real-time availability.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Enter Postal Code"
              className="px-5 py-3 rounded-full text-black w-full sm:w-64"
            />

           import Link from "next/link";

...

<Link
  href="/book"
  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:scale-105 transition"
>
  Check Availability
</Link>

          </div>
        </div>
      </main>
      <section id="services" className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
      Our Cleaning Services
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Choose from a range of top-rated cleaning services across the GTA.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* House Cleaning */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
        <div className="text-4xl mb-4">🏠</div>
        <h3 className="text-xl font-bold mb-2">House Cleaning</h3>
        <p className="text-gray-600 text-sm">
          Perfect for recurring weekly, bi-weekly or one-time home cleaning.
        </p>
      </div>

      {/* Condo Cleaning */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
        <div className="text-4xl mb-4">🏙️</div>
        <h3 className="text-xl font-bold mb-2">Condo Cleaning</h3>
        <p className="text-gray-600 text-sm">
          Ideal for small condos, apartments & downtown GTA units.
        </p>
      </div>

      {/* Move In/Out */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
        <div className="text-4xl mb-4">🚚</div>
        <h3 className="text-xl font-bold mb-2">Move In / Move Out</h3>
        <p className="text-gray-600 text-sm">
          Deep cleaning designed for landlords, tenants & Realtors.
        </p>
      </div>

      {/* Airbnb Cleaning */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
        <div className="text-4xl mb-4">🛏️</div>
        <h3 className="text-xl font-bold mb-2">Airbnb / Short-Term Rental</h3>
        <p className="text-gray-600 text-sm">
          Fast turnaround cleaning for hosts & short-stay rentals.
        </p>
      </div>

    </div>
  </div>
</section>
<section id="how" className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
      How It Works
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      A simple, fast and transparent process — powered by modern technology.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Step 1 */}
      <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition border border-gray-200">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="text-xl font-bold mb-2">1. Choose Your Service</h3>
        <p className="text-gray-600">
          Select the service type, home size, and any add-ons in our quick booking form.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition border border-gray-200">
        <div className="text-5xl mb-4">🧹</div>
        <h3 className="text-xl font-bold mb-2">2. We Assign a Trusted Cleaner</h3>
        <p className="text-gray-600">
          Our platform instantly matches you with a vetted, insured and reliable cleaner.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition border border-gray-200">
        <div className="text-5xl mb-4">✨</div>
        <h3 className="text-xl font-bold mb-2">3. Relax & Enjoy</h3>
        <p className="text-gray-600">
          Track progress, get photo updates and enjoy a spotless home. All from your dashboard.
        </p>
      </div>

    </div>
  </div>
</section>
<section id="locations" className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
      Locations We Serve
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Canada Pro Cleaners proudly serves homes & businesses across the GTA.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

      {/* Toronto */}
      <div className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <p className="font-semibold text-gray-800">Toronto</p>
      </div>

      {/* Mississauga */}
      <div className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <p className="font-semibold text-gray-800">Mississauga</p>
      </div>

      {/* Brampton */}
      <div className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <p className="font-semibold text-gray-800">Brampton</p>
      </div>

      {/* Vaughan */}
      <div className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <p className="font-semibold text-gray-800">Vaughan</p>
      </div>

      {/* Oakville */}
      <div className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <p className="font-semibold text-gray-800">Oakville</p>
      </div>

      {/* Richmond Hill */}
      <div className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <p className="font-semibold text-gray-800">Richmond Hill</p>
      </div>

    </div>
  </div>
</section>
<footer className="bg-gray-900 text-gray-300 py-16 px-6 mt-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* LOGO + ABOUT */}
    <div>
      <h3 className="text-xl font-bold text-white mb-4">Canada Pro Cleaners</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Tech-powered home & commercial cleaning across the Greater Toronto Area.  
        Reliable, vetted cleaners. Simple online booking.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#services" className="hover:text-white transition">Services</a></li>
        <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
        <li><a href="#locations" className="hover:text-white transition">Locations</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Cleaning Services</h4>
      <ul className="space-y-2 text-sm">
        <li>House Cleaning</li>
        <li>Condo Cleaning</li>
        <li>Move In/Out</li>
        <li>Airbnb Cleaning</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li>Email: canadaprocleaners001@gmail.com
</li>
        <li>Phone: (289)-coming-soon</li>
        <li>GTA, Ontario</li>
      </ul>
    </div>

  </div>

  <div className="text-center text-gray-500 text-xs mt-10">
    © {new Date().getFullYear()} Canada Pro Cleaners. All rights reserved.
  </div>
</footer>


    </>
  );
}
