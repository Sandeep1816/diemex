import Link from "next/link"

export function MainFooter() {
  return (
    <footer className="bg-[#1a2c42] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Email Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Email</h3>
            <a href="mailto:Diemex@itcgroup" className="text-gray-300 hover:text-white underline transition-colors">
              Diemex@itcgroup
            </a>

            <h3 className="text-lg font-bold mt-8 mb-4">Helpline</h3>
            <a href="tel:+74957995585" className="text-gray-300 hover:text-white underline transition-colors">
              +7 (495) 799-55-85
            </a>
          </div>

          {/* Venue Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Venue</h3>
            <p className="text-gray-300 mb-6">Crocus Expo, Pavilion 1, Moscow</p>

            <h3 className="text-lg font-bold mb-4">Opening Times</h3>
            <div className="space-y-2 text-gray-300">
              <p>Wednesday - 11 March 10:00-18:00</p>
              <p>Thursday - 12 March 10:00-18:00</p>
              <p>Friday - 13 March 10:00-16:00</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-300 hover:text-white underline transition-colors">
                Enquire to Exhibit
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white underline transition-colors">
                Newsletter Sign up
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white underline transition-colors">
                Download Event Brochure
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white underline transition-colors">
                Download Post Show Report
              </Link>
            </div>
          </div>
        </div>

        {/* Organized By Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-gray-600">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Organised By</span>
            <div className="bg-[#ef4444] px-4 py-2 rounded">
              <span className="text-white font-bold text-xl">ITE</span>
            </div>
          </div>

          <div className="text-sm text-gray-300">
            Powered By <span className="font-semibold text-white">PRISMETIC</span>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-gray-600 text-sm">
          <p className="text-gray-300">©Diemex 2026 All Rights Reserved</p>

          <div className="flex gap-6">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Diemex 2026 Pattern */}
      <div className="bg-[#0f1a2a] overflow-hidden py-8">
        <div className="whitespace-nowrap animate-marquee">
          <span className="inline-block text-[8rem] md:text-[12rem] font-black text-white/5 px-8">
            Diemex 2026 Diemex 2026 Diemex 2026 Diemex 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
