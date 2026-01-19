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

const shopCategories = [
  {
    name: 'Bracelets',
    image: 'https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768828246/main2_xk6xst.jpg',
  },
  {
    name: 'Chains',
    image: 'https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768828246/broadchain2_wyc1do.jpg',
  },
  {
    name: 'Rings',
    image: 'https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768828250/rings_zjtuwl.jpg'
  },
  {
    name: 'Pendal',
    image: 'https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768830804/pendal_vufulo.jpg',
  },
  {
    name: 'Kada',
    image: 'https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768828246/kada_ajfqqz.jpg',
  },
  {
    name: 'Bali',
    image: 'https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768828243/bali_cq49be.jpg',
  },
  {
    name: 'Rudraksh',
    image: 'https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768828248/rudraksh_jik5vi.jpg',
  },
]

const navLinks = ['Shop All', 'Our Story', 'Testimonials', 'Contact']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ================= TOP ANNOUNCEMENT BAR ================= */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-[#ae0b0b] px-4 text-sm font-medium text-white">
          Get 10% off on First Purchase
        </p>
      </header>

      {/* ================= NAVBAR ================= */}
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

            {/* LOGO */}
            <img
              src="https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768829821/logo1_xqrmjy.png"
              alt="KKings Jewellery"
              className="h-11 object-contain"
            />
          </div>

          {/* Mobile Brand Text */}
          <h1 className="absolute left-1/2 -translate-x-1/2 lg:hidden text-lg font-serif font-bold text-[#ae0b0b]">
            KKings_Jewellery
          </h1>

          {/* Desktop Brand */}
          <h1 className="hidden lg:block text-3xl font-serif font-bold text-[#ae0b0b]">
            KKings_Jewellery
          </h1>

          {/* Right Icons */}
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

              <Popover.Panel className="absolute left-1/2 z-20 mt-6 -translate-x-1/2 w-[680px] rounded-xl bg-white shadow-xl border p-6">
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
              <img
                src="https://res.cloudinary.com/dkbxrhe1v/image/upload/v1768829821/logo1_xqrmjy.png"
                alt="KKings Jewellery"
                className="h-10"
              />
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
                <a key={link} href="#" className="block text-lg font-medium">
                  {link}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </>
  )
}
