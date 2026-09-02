"use client";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

const stats = [
  { label: "Total Sales", value: ",456", change: "+12%" },
  { label: "Orders", value: "156", change: "+8%" },
  { label: "Visitors", value: "3,456", change: "+15%" },
  { label: "Conversion", value: "4.5%", change: "+0.5%" },
];

const orders = [
  { id: "#1001", customer: "John Doe", total: 89.99, status: "fulfilled", date: "2024-01-15" },
  { id: "#1002", customer: "Jane Smith", total: 156.50, status: "pending", date: "2024-01-15" },
  { id: "#1003", customer: "Bob Wilson", total: 45.00, status: "shipped", date: "2024-01-14" },
  { id: "#1004", customer: "Alice Brown", total: 234.99, status: "fulfilled", date: "2024-01-14" },
];

const products = [
  { id: "1", name: "Wireless Headphones", price: 79.99, inventory: 45, status: "active" },
  { id: "2", name: "Phone Case", price: 24.99, inventory: 120, status: "active" },
  { id: "3", name: "USB-C Cable", price: 12.99, inventory: 0, status: "out of stock" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"home" | "orders" | "products">("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6">
          {(["home", "orders", "products"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={px-4 py-2 text-sm font-medium }>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
          ))}
        </div>
        {activeTab === "home" && (
          <>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-sm text-green-600">{s.change}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="font-bold mb-4">Recent Orders</h2>
              <table className="w-full">
                <thead><tr className="text-left text-sm text-gray-500 border-b"><th className="pb-2">Order</th><th className="pb-2">Customer</th><th className="pb-2">Total</th><th className="pb-2">Status</th></tr></thead>
                <tbody>{orders.map((o) => (<tr key={o.id} className="border-b"><td className="py-2">{o.id}</td><td>{o.customer}</td><td></td><td><span className={px-2 py-1 rounded text-xs }>{o.status}</span></td></tr>))}</tbody>
              </table>
            </div>
          </>
        )}
        {activeTab === "orders" && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="font-bold mb-4">All Orders ({orders.length})</h2>
            <table className="w-full"><thead><tr className="text-left text-sm text-gray-500 border-b"><th className="pb-2">Order</th><th className="pb-2">Customer</th><th className="pb-2">Total</th><th className="pb-2">Status</th><th className="pb-2">Date</th></tr></thead>
            <tbody>{orders.map((o) => (<tr key={o.id} className="border-b"><td className="py-2">{o.id}</td><td>{o.customer}</td><td></td><td><span className={px-2 py-1 rounded text-xs }>{o.status}</span></td><td>{o.date}</td></tr>))}</tbody></table>
          </div>
        )}
        {activeTab === "products" && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between mb-4"><h2 className="font-bold">Products ({products.length})</h2><button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-bold">Add Product</button></div>
            <table className="w-full"><thead><tr className="text-left text-sm text-gray-500 border-b"><th className="pb-2">Product</th><th className="pb-2">Price</th><th className="pb-2">Inventory</th><th className="pb-2">Status</th></tr></thead>
            <tbody>{products.map((p) => (<tr key={p.id} className="border-b"><td className="py-2 font-medium">{p.name}</td><td></td><td>{p.inventory}</td><td><span className={px-2 py-1 rounded text-xs }>{p.status}</span></td></tr>))}</tbody></table>
          </div>
        )}
      </div>
    </div>
  );
}
