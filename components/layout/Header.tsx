"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        ALX Listing
      </Link>
      <nav className="space-x-4">
        <Link href="/listings" className="text-gray-600 hover:text-black">
          Listings
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-black">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
