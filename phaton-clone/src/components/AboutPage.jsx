import React, { useState } from "react";
import Footer from "./Footer";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              Phaton
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="/about" className="text-blue-600 font-medium">
                About
              </a>
              <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy
              </a>
            </div>

            <div className="flex items-center">
              <div className="md:hidden mr-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>

           
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-gray-900">User</div>
                  <div className="text-xs text-gray-500">user@example.com</div>
                </div>
              </div>
            </div>
          </div>

      
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <a
                  href="/"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block px-3 py-2 text-blue-600 font-medium bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/privacy"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </a>
                
              
                <div className="flex items-center space-x-3 px-3 py-3 mt-3 border-t border-gray-200">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">U</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">User</div>
                    <div className="text-xs text-gray-500">user@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

   
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base">
            Welcome to Phaton – a digital product store designed to simplify
            how you create, share, and grow online. From ebooks to web tools, we
            provide the essentials for professionals and growing creators. Fast,
            secure, and reliable, Phaton empowers your process and creativity
            with tools to inspire innovation while enhancing productivity.
          </p>
        </div>

  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {[
    {
      title: "1. Who We Are",
      text: "We are a passionate team of designers and developers committed to building modern digital experiences that truly connect with people."
    },
    {
      title: "2. Our Mission",
      text: "Our mission is to empower businesses with innovative solutions that simplify processes, enhance engagement, and drive growth."
    },
    {
      title: "3. What We Do",
      text: "From web applications to mobile apps, we craft products that are user-friendly, scalable, and tailored to meet your unique needs."
    },
    {
      title: "4. Our Values",
      text: "We believe in transparency, creativity, and collaboration—delivering quality work while building lasting partnerships."
    }
  ].map((item, id) => (
    <div
      key={id}
      className="bg-gray-50 border border-gray-400 rounded-lg p-6 shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        {item.title}
      </h2>
      <p className="text-sm text-gray-600">{item.text}</p>
    </div>
  ))}
</div>


          
          <div className="grid grid-cols-2 gap-4">
  {[
    "https://images.pexels.com/photos/28948225/pexels-photo-28948225/free-photo-of-hand-holding-e-reader-displaying-text-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2024/03/adobestock_555498374.jpeg",
    "https://static.wixstatic.com/media/b31d161c2d5b4abf8c9d06c62e5fe2ff.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b31d161c2d5b4abf8c9d06c62e5fe2ff.jpg",
    "https://www.devicemagic.com/wp-content/uploads/2021/06/mobile-apps-1-scaled.jpg",
  ].map((src, i) => (
    <div
      key={i}
      className="rounded-lg overflow-hidden w-full h-40 sm:h-48 md:h-56"
    >
      <img
        src={src}
        alt={`Image ${i}`}
        className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-56 
             transition duration-300 ease-in-out transform hover:scale-110 will-change-transform"
      />
    </div>
  ))}
</div>

        </div>
      </main>

      <Footer />
    </div>
  );

}
