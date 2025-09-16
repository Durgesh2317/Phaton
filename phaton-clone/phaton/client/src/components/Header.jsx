import React from "react";


export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center gap-4">
        <div className="text-2xl font-extrabold tracking-tight">Phaton</div>
        <div className="flex-1 hidden md:flex">
          <div className="flex items-center w-full max-w-2xl bg-gray-100 hover:bg-gray-300 rounded-full px-4 py-2 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              className="flex-1 bg-transparent outline-none placeholder-gray-400 text-sm"
              placeholder="Search on the go"
              aria-label="Search"
            />
            <div className="w-8 h-8 bg-white/70 hover:bg-gray-200 rounded-full grid place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 md:hidden" />
        <nav className="flex items-center gap-4">
          <button className="hidden sm:inline-flex items-center gap-1 text-sm text-gray-700 hover:text-blue-400">
            <span>Categories</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          <a className="text-sm text-gray-700 hover:text-blue-400" href="#">log in</a>

          <a
            href="#"
            className="text-sm rounded-full border border-gray-300 px-4 py-2 hover:border-gray-400 hover:text-blue-400 transition"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  )
}
