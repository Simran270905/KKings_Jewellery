'use client'

import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Popover, Dialog } from '@headlessui/react'


import main2 from '../../../assets/images/bdchains.jpg'
import rings from '../../../assets/images/rings.jpeg'
import pendal from '../../../assets/images/pendal.jpeg'
import bali from '../../../assets/images/bali.jpeg'
import kada from '../../../assets/images/kada.jpeg'
import rudraksh from '../../../assets/images/rudraksh.jpeg'
import logo from '../../../assets/images/logo1.png'

const shopCategories = [
  { name: 'Bracelets', image: '/main.jpg' },
  { name: 'Chains', image: main2 },
  { name: 'Rings', image: rings },
  { name: 'Pendal', image: pendal },
  { name: 'Kada', image: kada },
  { name: 'Bali', image: bali },
  { name: 'Rudraksh', image: rudraksh },
]

const navLinks = ['Shop All', 'Our Story', 'Testimonials', 'Contact']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      {/* ================= TOP BAR ================= */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-[#ae0b0b]"
            onClick={() => setMobileOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          <img
            src={logo}
            alt="KKings Jewellery"
            className="h-11 object-contain"
          />
        </div>

        {/* Mobile Brand Text */}
        <h1 className="absolute left-1/2 -translate-x-1/2 lg:hidden
                       text-lg font-serif font-bold tracking-wide text-[#ae0b0b]">
          KKings Jewellery
        </h1>

        {/* Desktop Brand */}
        <h1 className="hidden lg:block text-3xl font-serif font-bold tracking-wide text-[#ae0b0b]">
          KKings Jewellery
        </h1>

        {/* Right */}
        <div className="flex items-center gap-5 text-[#ae0b0b]">
          <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer" />
          <UserCircleIcon className="h-5 w-5 cursor-pointer" />
          <ShoppingBagIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden lg:block border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-14">
          
          <Popover className="relative">
            <Popover.Button className="font-medium text-[#ae0b0b]">
              Shop All
            </Popover.Button>

            <Popover.Panel className="absolute left-1/2 z-20 mt-6 -translate-x-1/2
              w-[680px] rounded-xl bg-white shadow-xl border p-6">
              <div className="grid grid-cols-4 gap-6">
                {shopCategories.map((cat) => (
                  <div key={cat.name} className="text-center cursor-pointer group">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="rounded-lg aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                    <p className="mt-3 font-medium group-hover:text-[#ae0b0b]">
                      {cat.name}
                    </p>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Popover>

          {navLinks.slice(1).map((link) => (
            <a
              key={link}
              href="#"
              className="font-medium text-gray-900 hover:text-[#ae0b0b]"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Panel className="fixed inset-y-0 left-0 w-[85%] bg-white z-50 p-6 overflow-y-auto">
          
          <div className="flex items-center justify-between mb-6">
            <img src={logo} alt="KKings Jewellery" className="h-10" />
            <button onClick={() => setMobileOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-[#ae0b0b]" />
            </button>
          </div>

          <div className="space-y-6">
            <p className="font-semibold text-[#ae0b0b]">Shop Categories</p>

            <div className="grid grid-cols-2 gap-4">
              {shopCategories.map((cat) => (
                <div key={cat.name} className="text-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="rounded-lg aspect-square object-cover"
                  />
                  <p className="mt-2 text-sm font-medium">{cat.name}</p>
                </div>
              ))}
            </div>

            <hr />

            {navLinks.slice(1).map((link) => (
              <a
                key={link}
                href="#"
                className="block text-lg font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  )
}
