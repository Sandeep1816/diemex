"use client"

import { motion, AnimatePresence, type Variants } from "framer-motion"
import { X, ArrowDownRight } from "lucide-react"
import Link from "next/link"

interface MenuItem {
  number: string
  label: string
  href: string
}

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  sectionNumber: string
  sectionTitle: string
  items: MenuItem[]
}

const variants: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
}

export function MegaMenu({
  isOpen,
  onClose,
  sectionNumber,
  sectionTitle,
  items,
}: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MENU */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#f4f2ee]"
          >
            <div className="relative h-full max-w-7xl mx-auto px-10 flex items-center">
              <div className="flex w-full gap-24">

                {/* LEFT */}
                <div className="min-w-[220px]">
                  <span className="text-4xl font-light text-gray-500">
                    {sectionNumber}/
                  </span>
                  <h2 className="mt-4 text-6xl font-light text-[#0b1f33]">
                    {sectionTitle}
                  </h2>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-center gap-7">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.15 + i * 0.08 },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-6 hover:translate-x-2 transition-all"
                      >
                        <span className="text-2xl font-light text-gray-500">
                          {item.number}
                        </span>
                        <span className="text-2xl text-[#0b1f33] group-hover:text-red-500">
                          {item.label}
                        </span>
                        <ArrowDownRight className="w-6 h-6 group-hover:text-red-500" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 p-2 rounded-full bg-black/10 hover:bg-black/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
