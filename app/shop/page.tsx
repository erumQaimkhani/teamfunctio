
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Filter from "../components/filter";
import Pay from "../components/pay";
import Product from "../components/product";
export default function Shop() {
  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-gray-100 h-[316px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/shop.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Centered Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          {/* Shop Logo */}
          <Image
            src="/images/meubl.png"
            alt="Logo"
            width={77}
            height={77}
            className="object-contain"
          />

          {/* Shop Title */}
          <h1 className="text-4xl font-bold mt-4">Shop</h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 mt-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-10">
        {/* Filter Section */}
        <Filter />
     <Product />
<Pay />
      </main>
    </div>
  );
}
