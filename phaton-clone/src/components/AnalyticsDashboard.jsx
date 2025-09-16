import React, { useState } from "react";
import {
  Menu,
  X,
  Bell,
  Search,
  Home,
  ShoppingCart,
  Package,
  BarChart2,
  MessageSquare,
  Settings,
  List,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

export default function AnalyticsDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const revenueData = [
    { month: "Jan", revenue: 20000 },
    { month: "Feb", revenue: 25000 },
    { month: "Mar", revenue: 30000 },
    { month: "Apr", revenue: 50000 },
    { month: "May", revenue: 70000 },
    { month: "Jun", revenue: 60000 },
    { month: "Jul", revenue: 80000 },
    { month: "Aug", revenue: 120000 },
    { month: "Sep", revenue: 100000 },
    { month: "Oct", revenue: 110000 },
    { month: "Nov", revenue: 90000 },
    { month: "Dec", revenue: 95000 },
  ];

  const categoryData = [
    { name: "Ebooks", value: 85 },
    { name: "Courses", value: 66 },
    { name: "Software", value: 90 },
    { name: "Other", value: 30 },
  ];

  const barData = [
    { name: "eBooks", value: 40000 },
    { name: "Courses", value: 120000 },
    { name: "Software", value: 20000 },
    { name: "Templates", value: 90000 },
    { name: "Music", value: 70000 },
  ];

  const COLORS = ["#6D28D9", "#F59E0B", "#10B981", "#EF4444"];

  return (
    <div className="flex bg-gray-100">
   
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
          <span className="select-none text-2xl font-bold">Phaton</span>
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="p-4 space-y-4 text-sm font-medium">
          <a className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <Home size={20} /> Dashboard
          </a>
          <a
            href="./Order"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer"
          >
            <ShoppingCart size={20} /> Orders
          </a>
          <a
            href="./DashboardProduct"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer"
          >
            <Package size={20} /> Products
          </a>
          <a className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <List size={20} /> Categories
          </a>
          <a className="flex items-center gap-3 bg-white text-[#1F3446] font-semibold p-2 rounded-md cursor-pointer">
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

 
      <div className="flex-1 flex flex-col lg:ml-64 min-h-screen overflow-y-auto">
        <header className="flex items-center justify-between bg-white h-16 px-4 shadow-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg md:text-xl font-semibold">
              Analytics
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search for digital products"
                className="border rounded-full pl-10 pr-4 py-2 w-64 text-sm"
              />
              <Search
                className="absolute top-2 left-3 text-gray-400"
                size={18}
              />
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

 
        <main className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-gray-700 mb-4">
            Comprehensive business insights and performance metrics
          </h2>

        
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { title: "Total Sales", value: "$127,435", change: "+12%" },
              { title: "Active Product", value: "1,245", change: "+22%" },
              { title: "Total Orders", value: "2,487", change: "-40%" },
              { title: "Customers", value: "18,392", change: "+15%" },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-white p-4 rounded-xl shadow text-center"
              >
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p
                  className={`text-sm ${
                    stat.change.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {stat.change} This Month
                </p>
              </div>
            ))}
          </section>

          
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow lg:col-span-2">
              <h3 className="font-semibold mb-2">Revenue & Customer Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip cursor={false} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4F46E5"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

          
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Categories Performance</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    label
                  >
                    {categoryData.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip cursor={false} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

       
          <section className="bg-white p-4 rounded-xl shadow mb-8">
            <h3 className="font-semibold mb-2">
              Category Performance Analysis
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={false} />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </section>
        </main>
      </div>
    </div>
  );
}

