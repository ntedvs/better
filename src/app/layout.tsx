import "@/styles/base.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ReactNode } from "react"
import { MobileNav } from "./mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "Better.", template: "%s - Better." },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`mx-auto flex min-h-screen max-w-6xl flex-col bg-background p-4 text-foreground ${inter.className}`}
      >
        <header className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Better<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 md:flex">
            <Link href="/#about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/#location">Location</Link>
            <Link
              href="https://app.getyomojo.com/order?vendor=OTfBfKmkD7"
              target="_blank"
            >
              Order
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </header>

        <main className="grow">{children}</main>

        <footer className="mt-12 flex flex-col justify-between text-center text-foreground/60 md:flex-row">
          <div className="flex justify-center gap-6">
            <p>(757) 894-8153</p>
            <p>foodtruck.better@gmail.com</p>
          </div>

          <p>© 2025 Better. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
