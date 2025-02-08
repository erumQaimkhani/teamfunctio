
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Blogproduct from '../components/blogproduct';
import Pay from '../components/pay';
export default function Shopheader() {
    return (
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
                    className="h-[77px] w-[77px] object-contain"
                />

                {/* Shop Title */}
                <h1 className="text-4xl font-bold mt-4 text-black">Blog</h1>


                <nav className="flex items-center space-x-2 mt-2 text-sm text-gray-900">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>&gt;</span>
                    <Link href="/components" className="hover:underline">
                        Blog
                    </Link>


                </nav>
            </div>
            <div>
                <Blogproduct />
                <Pay />
            </div>
        </header>

    );
}
