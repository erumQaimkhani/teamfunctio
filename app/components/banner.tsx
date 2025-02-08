

"use client";
import { Client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the product type
interface Product {
  _id: string;
  title: string;
  productImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  price: number;
  discountPercentage?: number;
  tag?: string;
  isNew?: boolean;
  slug: {
    current: string;
  };
}

// Sanity Image URL Builder
const builder = imageUrlBuilder(Client);

function urlFor(source: Product['productImage']) {
  if (source?.asset?._ref) {
    return builder.image(source).url();
  }
  return "";
}

const Banner = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await Client.fetch(`*[_type == "product"]{
          _id,
          title,
          productImage,
          price,
          discountPercentage,
          tag,
          isNew,
          slug
        }`);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link href="/products">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        Our Products
      </h1>
      </Link >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
          >
            {product.slug?.current ? (
              <Link href={`/product/${product.slug.current}`}>
                <div>
                  <div className="relative">
                    {product.productImage && (
                      <Image
                        src={urlFor(product.productImage)}
                        alt={product.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    )}
                    {product.isNew && (
                      <Button className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                        New Arrival
                      </Button>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                    {product.discountPercentage && (
                      <p className="text-sm text-red-500 mt-1">
                        Discount: {product.discountPercentage}%
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-4">
                      <Button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300">
                        Add to Cart
                      </Button>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500 text-xl">★★★☆☆</span>
                        <span className="text-sm text-gray-400">4.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                <p className="text-red-500 mt-2">Slug not available</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
