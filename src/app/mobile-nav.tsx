"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center rounded-md p-2 text-foreground hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:outline-none"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="absolute right-2 z-50 mt-2 w-64 rounded-lg border-2 border-primary/20 bg-background shadow-lg">
            <nav className="flex flex-col space-y-1 p-4">
              <Link
                href="/#about"
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-left transition-colors hover:bg-primary/10"
              >
                About
              </Link>
              <Link
                href="/menu"
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-left transition-colors hover:bg-primary/10"
              >
                Menu
              </Link>
              <Link
                href="/#reviews"
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-left transition-colors hover:bg-primary/10"
              >
                Reviews
              </Link>
              <Link
                href="/#location"
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-left transition-colors hover:bg-primary/10"
              >
                Location
              </Link>
              <Link
                href="https://app.getyomojo.com/order?vendor=OTfBfKmkD7"
                target="_blank"
                onClick={closeMenu}
                className="rounded-md bg-primary px-3 py-2 text-left text-white transition-colors hover:bg-primary/90"
              >
                Order
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
