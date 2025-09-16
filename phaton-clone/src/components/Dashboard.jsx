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
} from "recharts";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  const revenueData = [
    { month: "Jul", revenue: 120 },
    { month: "Aug", revenue: 200 },
    { month: "Sep", revenue: 150 },
    { month: "Oct", revenue: 180 },
    { month: "Nov", revenue: 250 },
    { month: "Dec", revenue: 400 },
  ];

  const categoryData = [
    { name: "Ebooks", value: 85 },
    { name: "Courses", value: 66 },
    { name: "Software", value: 90 },
    { name: "Other", value: 30 },
  ];

  const COLORS = ["#4F46E5", "#F59E0B", "#10B981", "#EF4444"];

  const recentOrders = [
    { id: "#1234", customer: "Alice Johnson", product: "Ebook", amount: "$45", status: "Delivered" },
    { id: "#1235", customer: "Michael Lee", product: "Course", amount: "$120", status: "Pending" },
    { id: "#1236", customer: "Sophia Brown", product: "Template", amount: "$35", status: "Shipped" },
    { id: "#1237", customer: "Daniel White", product: "Software", amount: "$299", status: "Cancelled" },
  ];

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
          <span className="select-none text-2xl font-bold">Phaton</span>
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="p-4 space-y-4 text-sm font-medium">
          <a className="flex items-center gap-3 bg-white text-[#1F3446] font-semibold p-2 rounded-md cursor-pointer">
            <Home size={20} /> Dashboard
          </a>
          <a href="./Order" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
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
            <h1 className="text-lg md:text-xl font-semibold">Dashboard Overview</h1>
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

        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Total Sales", value: "$127,435", change: "+12%" },
              { title: "Active Products", value: "1,245", change: "+22%" },
              { title: "Total Orders", value: "2,487", change: "-40%" },
              { title: "Customers", value: "18,392", change: "+15%" },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <span className="text-gray-500 text-sm">{stat.title}</span>
                <span className="block text-xl md:text-2xl font-bold">{stat.value}</span>
                <span
                  className={`text-sm ${
                    stat.change.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {stat.change} this month
                </span>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="font-semibold mb-2">Revenue</h2>
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
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="font-semibold mb-2">Categories Performance</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                    fill="#4F46E5"
                    label
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip cursor={false} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section>
            <div className="bg-white rounded-xl shadow p-4">
              <h2 className="font-semibold mb-3">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="p-2">Order ID</th>
                      <th className="p-2">Customer</th>
                      <th className="p-2">Product</th>
                      <th className="p-2">Amount</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="p-2">{order.id}</td>
                        <td className="p-2">{order.customer}</td>
                        <td className="p-2">{order.product}</td>
                        <td className="p-2">{order.amount}</td>
                        <td
                          className={`p-2 font-medium ${
                            order.status === "Delivered"
                              ? "text-green-600"
                              : order.status === "Pending"
                              ? "text-yellow-600"
                              : order.status === "Shipped"
                              ? "text-blue-600"
                              : "text-red-600"
                          }`}
                        >
                          {order.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-white rounded-xl shadow p-4">
              <h2 className="flex items-center font-semibold mb-3">
                AI Recommendations
                <img
                  src="https://simplifyai.in/wp-content/uploads/2024/07/Gemini-logo-1.png"
                  alt="Gemini AI"
                  className="h-6 w-auto ml-4 opacity-80"
                />
              </h2>
              <div className="space-y-3">
                {[
                  {
                    text: 'Promote "JavaScript Mastery"',
                    detail: "High conversion potential detected",
                    sales: "+24%",
                  },
                  {
                    text: "Create bundle: Marketing + Templates",
                    detail: "Frequently bought together",
                    sales: "+24%",
                  },
                  {
                    text: "Offer discount on Design Course",
                    detail: "Low recent sales, high interest",
                    sales: "+15%",
                  },
                ].map((rec, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between border rounded-lg p-3 gap-3"
                  >
                    <div>
                      <p className="font-medium">{rec.text}</p>
                      <p className="text-sm text-gray-500">{rec.detail}</p>
                      <p className="text-green-500 text-sm">
                        {rec.sales} expected sales
                      </p>
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 w-full sm:w-auto">
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

