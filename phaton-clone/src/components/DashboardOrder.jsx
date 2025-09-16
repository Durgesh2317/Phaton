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

const ordersData = [
  { id: "DH-2024-0025", customer: "Lisa Brown", product: "Video Editor Pro", payment: "PayPal", amount: "$19.99", status: "refunded" },
  { id: "DH-2024-0024", customer: "Alex Wilson", product: "SEO Analytics Dashboard", payment: "Credit Card", amount: "$9.99", status: "processing" },
  { id: "DH-2024-0023", customer: "Lawal Segun", product: "Ebooks", payment: "PayPal", amount: "$29.99", status: "pending" },
  { id: "DH-2024-0022", customer: "John Smith", product: "Logo Templates", payment: "Stripe", amount: "$79.99", status: "completed" },
  { id: "DH-2024-0021", customer: "Walex R", product: "React Dev.", payment: "Credit Card", amount: "$1.99", status: "completed" },
];

const statusClasses = {
  refunded: "bg-red-100 text-red-600 border-red-400",
  processing: "bg-blue-100 text-blue-600 border-blue-400",
  pending: "bg-yellow-100 text-yellow-600 border-yellow-400",
  completed: "bg-green-100 text-green-600 border-green-400",
};

export default function DashboardOrder() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const filteredOrders = ordersData.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase())
  );

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
          <a className="flex items-center gap-3 bg-white text-[#1F3446] font-semibold p-2 rounded-md cursor-pointer">
            <ShoppingCart size={20} /> Orders
          </a>
          <a href="./DashboardProduct" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
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
            <h1 className="text-xl font-semibold">Order Management</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search orders by ID or name"
                className="border rounded-full pl-10 pr-4 py-2 w-64 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {[
              { label: "Total Orders", value: 2847 },
              { label: "Completed", value: 2456 },
              { label: "Processing", value: 234 },
              { label: "Pending", value: 157 },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded shadow p-6 text-center">
                <p className="text-2xl font-semibold">{value.toLocaleString()}</p>
                <p className="mt-1 text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </section>


          <section className="mt-8 bg-white rounded shadow p-6 overflow-x-auto">
            <table className="min-w-[620px] w-full text-left text-sm border-collapse table-auto">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-3 font-semibold">Order id</th>
                  <th className="py-2 px-3 font-semibold">Customer</th>
                  <th className="py-2 px-3 font-semibold">Product</th>
                  <th className="py-2 px-3 font-semibold">Payment</th>
                  <th className="py-2 px-3 font-semibold">Amount</th>
                  <th className="py-2 px-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(({ id, customer, product, payment, amount, status }) => (
                  <tr key={id} className="border-b last:border-none">
                    <td className="py-2 px-3">{id}</td>
                    <td className="py-2 px-3">{customer}</td>
                    <td className="py-2 px-3">{product}</td>
                    <td className="py-2 px-3">{payment}</td>
                    <td className="py-2 px-3">{amount}</td>
                    <td className="py-2 px-3">
                      <span
                        className={`inline-block px-2 py-1 border rounded-full text-xs font-semibold ${statusClasses[status]}`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-4 gap-2 select-none">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`px-3 py-1 rounded ${
                    activePage === page
                      ? "bg-[#163048] text-white"
                      : "bg-gray-200 text-black hover:bg-[#163048] hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

