"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, Menu } from "lucide-react"
import { AboutMegaMenu } from "@/components/about-mega-menu"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">DIEMEX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* ABOUT BUTTON */}
            <button
              onClick={() => setIsAboutOpen(true)}
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
            >
              About
              <ChevronDown className="w-4 h-4" />
            </button>

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
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <Image
                src="/images/rus.png"
                alt="Language"
                width={38}
                height={24}
              />
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Exhibit
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Register
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background p-4">
            <div className="flex flex-col gap-4">
              {/* MOBILE ABOUT */}
              <button
                onClick={() => {
                  setIsAboutOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="text-sm font-medium text-left hover:text-primary"
              >
                About
              </button>

              <Link href="#exhibit">Exhibit</Link>
              <Link href="#attend">Attend</Link>
              <Link href="#connect">Connect</Link>
              <Link href="#insights">Industry Insights</Link>
              <Link href="#contact">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* ABOUT MEGA MENU */}
      <AboutMegaMenu
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </>
  )
}
