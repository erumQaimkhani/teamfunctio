
"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CartTotal() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="main-container w-full max-w-[1440px] h-[525px] mx-auto relative bg-white">
      {/* Cart Section */}
      <div className="w-full max-w-[1240px] h-[390px] mx-auto mt-20 relative">
        {/* Product Details */}
        <div className="w-full max-w-[817px] h-[216px] relative">
          <div className="flex items-center justify-between bg-amber-100 px-6 py-4 rounded-lg">
            <Image
              src="/asgaard sofa.jpg"
              alt="Asgaard Sofa"
              width={106}
              height={106}
              className="rounded-lg"
              onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
            />
            <span className="text-gray-500 text-sm">Asgaard Sofa</span>
            <span className="text-gray-500 text-sm">Rs. 250,000.00</span>
            <div className="flex items-center space-x-2">
              <button
                aria-label="Decrease quantity"
                className="w-8 h-8 border rounded flex items-center justify-center"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                aria-label="Increase quantity"
                className="w-8 h-8 border rounded flex items-center justify-center"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <span className="text-black text-sm">Rs. {250000 * quantity}.00</span>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="w-full max-w-[393px] bg-amber-100 rounded-lg p-6 absolute top-0 right-0">
          <h2 className="text-2xl font-semibold text-center mb-6">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="text-gray-500">Rs. {250000 * quantity}.00</span>
          </div>
          <div className="flex justify-between mb-8">
            <span className="font-medium">Total</span>
            <span className="text-yellow-600 font-medium">Rs. {250000 * quantity}.00</span>
          </div>
          <button className="w-full bg-black text-white text-lg py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
