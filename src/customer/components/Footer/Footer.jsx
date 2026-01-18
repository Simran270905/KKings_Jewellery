'use client'

import { Instagram, WhatsApp } from '@mui/icons-material'

export default function Footer() {
  return (
    <footer className="bg-[#7a1c1c] text-white py-10 mt-12">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Tagline */}
        <div>
          <h2 className="text-2xl font-bold">✨ KKings Jewellery</h2>
          <p className="text-sm mt-2 text-red-100">
            Premium Jewellery crafted with elegance and love.
          </p>
          <p className="text-sm text-red-200 mt-1">
            Trusted by 2 Lakh+ Customers
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-red-100">
            <li><a href="/shop" className="hover:text-yellow-200">Shop</a></li>
            <li><a href="/about" className="hover:text-yellow-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-200">Contact</a></li>
            <li><a href="/faq" className="hover:text-yellow-200">FAQs</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <p className="text-sm text-red-100 mb-3">
            📍 Mumbai, Maharashtra, India <br />
            📞 +91 8329972432 <br />
            ✉️ support@kkingsjewellery.com
          </p>
          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/kkings_jewellery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 hover:scale-110 transition-transform duration-300"
            >
              <Instagram sx={{ color: 'white' }} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+918329972432"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:scale-110 transition-transform duration-300"
            >
              <WhatsApp sx={{ color: 'white' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-sm text-red-200 border-t border-red-600 pt-4">
        © {new Date().getFullYear()} KKingsJewellery. All rights reserved. | Designed with ❤️
      </div>
    </footer>
  )
}
