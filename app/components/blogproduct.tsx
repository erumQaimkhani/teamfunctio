
"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Product {
  src: string;
  alt: string;
  name: string;
  price: string;
}

const products: Product[] = [
  { src: "/images/Maskwhite.png", alt: "Image 1", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
  { src: "/whitechairs.jpg", alt: "Image 2", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
  { src: "/images/mask1.png", alt: "Image 3", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
  { src: "/images/plain console with teak mirror 1.png", alt: "Image 4", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
  { src: "/images/Grain coffee table 1.png", alt: "Image 5", name: "Grain coffee table", price: "Rs. 25,000.00" },
  { src: "/Mask 2.png", alt: "Image 6", name: "Decorative piece", price: "Rs. 25,000.00" },
  { src: "/images/Plain console_ 1.png", alt: "Image 7", name: "Plain console", price: "Rs. 25,000.00" },
  { src: "/images/Mask3.png", alt: "Image 8", name: "Modern shelf", price: "Rs. 25,000.00" },
];

const itemsPerPage = 4;

const ProductCard: React.FC<Product> = ({ src, alt, name, price }) => (
  <div className="relative group">
    <div className="w-full h-[200px] md:h-[287px] relative">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div className="mt-2 text-center">
      <p className="text-sm md:text-base font-medium">{name}</p>
      <p className="text-lg font-semibold text-gray-800">{price}</p>
    </div>
  </div>
);

export default function BlogProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500);
  };

  const currentItems = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full h-full">
      {loading && <div className="text-center">Loading...</div>}
      <div className={loading ? 'opacity-50' : ''}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentItems.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <div className="flex space-x-4">
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                aria-label={`Go to page ${index + 1}`}
                className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-yellow-200 text-black' : 'bg-gray-100 text-black'} rounded-lg hover:bg-yellow-200`}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-6 py-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-gray-100 text-black hover:bg-yellow-200'} rounded-lg`}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
