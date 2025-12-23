"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-2xl font-bold">
            <span className="text-primary">DIEMEX</span>
            {/* <span className="text-foreground">ITT</span> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#exhibit" className="text-sm font-medium hover:text-primary transition-colors">
            Exhibit
          </Link>
          <Link href="#attend" className="text-sm font-medium hover:text-primary transition-colors">
            Attend
          </Link>
          <Link href="#connect" className="text-sm font-medium hover:text-primary transition-colors">
            Connect
          </Link>
          <Link href="#insights" className="text-sm font-medium hover:text-primary transition-colors">
            Industry Insights
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact Us
          </Link>
          <button className="text-sm font-medium hover:text-primary transition-colors">More</button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <Image src="img/flags/ru.png" alt="Language" width={24} height={24} className="rounded-full" />
            <Button variant="default" className="bg-[#ef4444] hover:bg-[#dc2626] text-white">
              Exhibit
            </Button>
            <Button variant="default" className="bg-[#ef4444] hover:bg-[#dc2626] text-white">
              Register
            </Button>
          </div>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background p-4">
          <div className="flex flex-col gap-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#exhibit" className="text-sm font-medium hover:text-primary">
              Exhibit
            </Link>
            <Link href="#attend" className="text-sm font-medium hover:text-primary">
              Attend
            </Link>
            <Link href="#connect" className="text-sm font-medium hover:text-primary">
              Connect
            </Link>
            <Link href="#insights" className="text-sm font-medium hover:text-primary">
              Industry Insights
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="default" className="bg-[#ef4444] hover:bg-[#dc2626] text-white flex-1">
                Exhibit
              </Button>
              <Button variant="default" className="bg-[#ef4444] hover:bg-[#dc2626] text-white flex-1">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
