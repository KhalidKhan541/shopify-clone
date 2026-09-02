"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold text-green-600">shopify</span>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="bg-green-600 text-white px-4 py-2 rounded font-bold">Go to Dashboard</Link>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-6xl font-bold mb-6">Build your own ecommerce website</h1>
        <p className="text-xl text-gray-600 mb-8">Shopify makes it easy to start, run, and grow your business</p>
        <Link href="/dashboard" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-700">Start Free Trial</Link>
      </div>
    </div>
  );
}
