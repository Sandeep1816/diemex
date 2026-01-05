import Link from "next/link"

export function MainFooter() {
  return (
    <footer className="bg-[#0f2742] text-white overflow-hidden">
      {/* ================= TOP FOOTER ================= */}
      <div className="site-wrapper pt-20 pb-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-16">
          {/* EMAIL / HELPLINE */}
          <div className="space-y-10">
            <div>
              <h3 className="text-base font-semibold mb-4">Email</h3>
              <a
                href="mailto:pad@maxxmedia.in"
                className="text-[#bfc7d1] underline underline-offset-4 hover:text-white transition"
              >
                pad@maxxmedia.in
              </a>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4">Helpline</h3>
              <a
                href="tel:+91 91483 19993"
                className="text-[#bfc7d1] underline underline-offset-4 hover:text-white transition"
              >
              +91 -91483 19993
              </a>
            </div>
          </div>

          {/* VENUE / TIMES */}
          <div className="space-y-10">
            <div>
              <h3 className="text-base font-semibold mb-4">Venue</h3>
              <p className="text-[#bfc7d1]">
                Auto Cluster Exhibition Centre, Pune, India
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4">
                Opening Times
              </h3>
             <div className="space-y-1 text-[#bfc7d1]">
  <p>Thurstday – 8 October 2026 10:00–18:00</p>
  <p>Friday    – 9 October 2026 10:00–18:00</p>
  <p>Saturday  – 10 October 2026 10:00–18:00</p>
</div>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base font-semibold mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                "Enquire to Exhibit",
                "Newsletter Sign up",
                "Download Event Brochure",
                "Download Post Show Report",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-[#bfc7d1] underline underline-offset-4 hover:text-white transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="h-px bg-white/15" />

      {/* ================= LOWER BAR ================= */}
      <div className="site-wrapper py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
{/* LEFT */}
<div className="flex items-center gap-4">
  <span className="text-[#bfc7d1]">Organised By</span>

  <div className=" px-3 py-2 flex items-center">
    <img
      src="/images/maxx.png"
      alt="Maxx Business Media Pvt. Ltd."
      className="h-6 md:h-7 w-auto bg-white"
    />
  </div>
</div>


        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-4 text-[#bfc7d1]">
          <span>© DIEMEX 2026. All Rights Reserved.</span>
          <Link href="#" className="hover:text-white">
            Terms of Use
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Cookie Policy
          </Link>
        </div>
      </div>

{/* ================= MARQUEE ================= */}
<div className="overflow-hidden bg-[#0f2742]">
  <div className="marquee-wrapper">
    <div className="marquee-content">
      <span className="title-208">DIEMEX&nbsp;2026&nbsp;&nbsp;</span>
      <span className="title-208">DIEMEX&nbsp;2026&nbsp;&nbsp;</span>
      <span className="title-208">DIEMEX&nbsp;2026&nbsp;&nbsp;</span>
      <span className="title-208">DIEMEX&nbsp;2026&nbsp;&nbsp;</span>
    </div>
  </div>
</div>


    </footer>
  )
}
