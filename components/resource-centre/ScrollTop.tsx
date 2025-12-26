"use client"

export default function ScrollTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-red w-12 h-12 rounded-full text-white text-xl"
    >
      ↑
    </button>
  )
}
