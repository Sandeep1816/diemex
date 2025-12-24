"use client"

import { motion, AnimatePresence, type Variants } from "framer-motion"
import { X, ArrowDownRight } from "lucide-react"
import Link from "next/link"

interface AboutMegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutMegaMenu({ isOpen, onClose }: AboutMegaMenuProps) {
  const menuItems = [
    { number: "01", label: "About DIEMEX", href: "/about-diemex" },
    { number: "02", label: "About ITE Group", href: "#about-ite" },
    { number: "03", label: "Partners and Sponsors", href: "#partners" },
  ]

  // ✅ STRICTLY TYPED VARIANTS
  const menuVariant: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Mega Menu */}
          <motion.div
            variants={menuVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-20 left-0 right-0 z-50 bg-[oklch(0.94_0.01_60)] shadow-lg"
          >
            <div className="container mx-auto px-4 py-12 md:py-16">
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-16">

                {/* Left Heading */}
                <div className="shrink-0">
                  <span className="text-4xl md:text-6xl font-light text-muted-foreground">
                    01/
                  </span>
                  <h2 className="mt-2 text-5xl md:text-7xl font-light text-foreground">
                    About
                  </h2>
                </div>

                {/* Menu Items */}
                <div className="flex flex-1 flex-col justify-center gap-6 md:gap-8">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.2 + index * 0.1,
                          duration: 0.4,
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-2"
                      >
                        <span className="text-2xl md:text-3xl font-light text-muted-foreground">
                          {item.number}
                        </span>
                        <span className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        <ArrowDownRight className="h-5 w-5 md:h-6 md:w-6 text-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="absolute top-4 right-4 md:top-8 md:right-8 rounded-full p-2 bg-foreground/10 hover:bg-foreground/20 transition-colors"
                >
                  <X className="h-6 w-6 text-foreground" />
                </button>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
