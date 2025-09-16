import React, { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Home,
  ShoppingCart,
  Package,
  BarChart2,
  MessageSquare,
  Settings,
  X,
  List,
} from "lucide-react";

const products = Array(12).fill({
  title: "The Complete guide to Digital Marketing",
  category: "Business",
  price: "$12.99",
  rating: 4,
  sales: "12.4k",
  image:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80",
});

export default function DashboardProduct() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#1F3446] text-white transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
        transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 border-b border-gray-700 px-4">
          <span className="p-6 pt-8 select-none text-2xl font-bold">Phaton</span>
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="p-4 space-y-4 text-sm font-medium">
          <a href="./Dashboard" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <Home size={20} /> Dashboard
          </a>
          <a href="./order" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <ShoppingCart size={20} /> Orders
          </a>
          <a className="flex items-center gap-3 bg-white text-[#1F3446] font-semibold p-2 rounded-md cursor-pointer">
            <Package size={20} /> Products
          </a>
          <a className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <List size={20} /> Categories
          </a>
          <a href="./Analytics" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <BarChart2 size={20} /> Analytics
          </a>
          <a className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <MessageSquare size={20} /> Messages
          </a>
          <a href="./Settings" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <Settings size={20} /> Settings
          </a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col lg:ml-64 overflow-hidden">
        <header className="flex items-center justify-between bg-white h-16 px-4 shadow-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold">Product Management</h1>
          </div>

   
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search for digital products"
                className="border rounded-full pl-10 pr-4 py-2 w-64 text-sm"
              />
              <Search className="absolute top-2 left-3 text-gray-400" size={18} />
            </div>

        
            <div className="flex items-center gap-2">
              <Bell size={22} className="text-gray-600 cursor-pointer" />
              <div className="leading-tight">
                <span className="block font-semibold text-sm sm:text-base">
                  Divine I.
                </span>
              
                <span className="text-xs font-light text-gray-400 hidden sm:block">
                  divinei**@phaton.com
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg w-full h-44 object-cover"
                />
                <div className="mt-3">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="text-sm font-semibold mt-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    {"★".repeat(product.rating)}{" "}
                    {"☆".repeat(5 - product.rating)}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold">{product.price}</span>
                    <span className="text-xs text-gray-500">
                      {product.sales} sales
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

