"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-2xl font-bold text-white tracking-tight">
          Canada Pro Cleaners
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#services" className="hover:text-pink-300 transition">Services</a>
          <a href="#how" className="hover:text-pink-300 transition">How It Works</a>
          <a href="#locations" className="hover:text-pink-300 transition">Locations</a>
          <a href="#contact" className="hover:text-pink-300 transition">Contact</a>
        </div>

        {/* Login Button */}
        <button className="px-5 py-2 rounded-full bg-white text-blue-600 font-semibold shadow-md hover:scale-105 transition">
          Login
        </button>

      </div>
    </nav>
  );
}
