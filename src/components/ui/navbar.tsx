import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link href="/dashboard" className="hover:text-blue-300">
          Dashboard
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/products" className="hover:text-blue-300">
          Products
        </Link>
        <Link href="/orders" className="hover:text-blue-300">
          Orders
        </Link>
        <Link href="/users" className="hover:text-blue-300">
          Users
        </Link>
        <Link href="/profile" className="hover:text-blue-300">
          Profile
        </Link>
        <Link href="/logout" className="hover:text-blue-300">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
