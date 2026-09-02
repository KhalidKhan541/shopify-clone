"use client";
export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-green-600">Shopify</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-600">My Store</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <button className="hover:text-green-600">Orders</button>
          <button className="hover:text-green-600">Products</button>
          <button className="hover:text-green-600">Customers</button>
          <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">K</div>
        </div>
      </div>
    </nav>
  );
}
