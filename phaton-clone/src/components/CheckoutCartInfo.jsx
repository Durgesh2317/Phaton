import React, { useState } from 'react';
import Footer from './Footer';

const CheckoutCartInfo = ({ onBack, onNext, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recommendations = [
    { id: 1, name: "Basics 6000-BTU Small Window Air Conditioner, Up to 150 Sqft Intuitive Mechanical Control, White", price: "$125", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" },
    { id: 2, name: "Evaporative Air Cooler Portable, Fans That Blow Cool Air for Room and Bedroom Indoor", price: "$159", image: "https://s3-assets.sylvane.com/media/images/articles/5-things-to-consider-when-buying-a-portable-ac-size-opt.jpg" },
    { id: 3, name: "Hamilton Beach Power Elite Wave Action Blender for Smoothies", price: "$125", image: "https://m.media-amazon.com/images/I/81fkSJatitL._UF350,350_QL80_.jpg" },
    { id: 4, name: "Portable Washer, 8.6LBS Capacity Small Portable Washing Machine with 10 Programs 5 Water Levels", price: "$125", image: "https://m.media-amazon.com/images/I/61pqWVvizrL._UF1000,1000_QL80_.jpg" },
    { id: 5, name: "Smart WiFi Router AC1200 Dual Band Wireless Internet Router", price: "$89", image: "https://m.media-amazon.com/images/I/61ZvgTSNVYL._UF1000,1000_QL80_.jpg" },
    { id: 6, name: "Bluetooth Wireless Earbuds with Charging Case", price: "$45", image: "https://honeywellconnection.com/in/wp-content/uploads/2024/08/01-8.jpg" },
    { id: 7, name: "LED Desk Lamp with USB Charging Port and Touch Control", price: "$35", image: "https://m.media-amazon.com/images/I/61MmaaXn8JL._UF1000,1000_QL80_.jpg" },
    { id: 8, name: "Stainless Steel Electric Kettle 1.7L with Auto Shut-off", price: "$55", image: "https://www.jiomart.com/images/product/original/rvq6vo5cta/wipro-vesta-2000w-1-7l-electric-kettle-stainless-steel-auto-shut-off-silver-product-images-orvq6vo5cta-p597752548-4-202301211349.jpg?im=Resize=(420,420)" },
    { id: 9, name: "Memory Foam Pillow Set of 2 with Cooling Gel", price: "$75", image: "https://www.jiomart.com/images/product/original/rv9w1osnu8/sleepsia-memory-foam-gel-pillow-standard-cervical-orthopedic-pillow-pack-of-2-product-images-orv9w1osnu8-p595523861-0-202406071446.png?im=Resize=(420,420)" }
  ];

  const itemsPerSlide = 9;
  const totalSlides = Math.ceil(recommendations.length / itemsPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return recommendations.slice(start, end);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Phaton</h1>
            <button onClick={onClose} className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white rounded-full hover:bg-red-600 transition-colors">✕</button>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="flex items-center justify-between flex-wrap">
          {["Cart", "Information", "Payment", "Confirmation"].map((step, i) => (
            <div key={i} className="flex items-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm ${i <= 1 ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-600"}`}>{i === 0 ? "🛒" : i === 1 ? "📧" : i === 2 ? "💳" : "✓"}</div>
              <span className={`${i <= 1 ? "text-gray-900 font-medium" : "text-gray-600"}`}>{step}</span>
              {i < 3 && <div className="hidden sm:block flex-1 h-px bg-gray-300 mx-2"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left: Contact & Billing Form */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <p className="text-xs text-gray-500 mb-2">We'll send your download link here</p>
              <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
            </div>

            <hr className="my-6" />

            <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
              <input type="text" placeholder="Postal Code" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
            </div>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none mb-6">
              <option>United States</option>
              <option>India</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>

            <div className="flex justify-between">
              <button onClick={onBack} className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">← Back to Cart</button>
            </div>
          </div>

          {/* Mobile Order Summary above Recommendations */}
          <div className="lg:hidden mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://images.squarespace-cdn.com/content/v1/5fc1a391405d5340f32eca90/1619274390603-UTFF58P8DFVU0W579NHC/unsplash-image-JbhvqDMEYmg.jpg" alt="The Genio Esiste" className="w-12 h-12 object-cover rounded"/>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">The Genio Esiste</p>
                  <p className="text-xs text-gray-600">Format: PDF + EPUB</p>
                  <p className="text-xs text-gray-600">File Size: 15.2 MB</p>
                </div>
                <p className="font-semibold text-gray-900">$19.6</p>
              </div>
              <hr className="my-4"/>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">$19.6</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">$1.96</span>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>$21</span>
              </div>
              <button onClick={onNext} className="w-full bg-gray-800 text-white py-3 mt-4 rounded-md hover:bg-gray-700 transition">Continue to Information</button>
              <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
                <span className="mr-2">⬇️</span>
                Instant download after payment
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Desktop */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-400 top-24">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://images.squarespace-cdn.com/content/v1/5fc1a391405d5340f32eca90/1619274390603-UTFF58P8DFVU0W579NHC/unsplash-image-JbhvqDMEYmg.jpg" alt="The Genio Esiste" className="w-12 h-12 object-cover rounded"/>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">The Genio Esiste</p>
                <p className="text-xs text-gray-600">Format: PDF + EPUB</p>
                <p className="text-xs text-gray-600">File Size: 15.2 MB</p>
              </div>
              <p className="font-semibold text-gray-900">$19.6</p>
            </div>
            <hr className="my-4"/>
            <div className="space-y-2">
              <div className="flex justify-between text-sm"><span>Subtotal</span><span>$19.6</span></div>
              <div className="flex justify-between text-sm"><span>Tax</span><span>$1.96</span></div>
              <hr className="my-2"/>
              <div className="flex justify-between text-base font-semibold"><span>Total</span><span>$21</span></div>
            </div>
            <button onClick={onNext} className="w-full bg-gray-800 text-white py-3 mt-4 rounded-md hover:bg-gray-700 transition">Continue to Payment</button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
  <h2 className="text-xl font-semibold text-gray-900 mb-6">Recommendation</h2>
  <div className="relative">
    {/* Slider wrapper */}
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {getCurrentItems().map((item) => (
        <div
          key={item.id}
          className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[300px] bg-white rounded-lg shadow-sm overflow-hidden group"
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm">
              {item.price}
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-3 h-24">{item.name}</h4>
            <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default CheckoutCartInfo;
