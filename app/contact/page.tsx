import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Pay from '../components/pay';
import Footer from '../components/footer';
import Billing from '../components/billing'; // Assuming Billing component is correctly imported
import Gettouch from '../components/gettouch';

export default function Checkout() {
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
                <h1 className="text-4xl font-bold mt-4">Contact</h1>

                {/* Breadcrumb Navigation */}
                <nav className="flex items-center space-x-2 mt-2 text-sm">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>&gt;</span>
                    <Link href="/components" className="hover:underline">
                        Contact
                    </Link>
                </nav>
            </div>
<Gettouch />
        <Pay />
        <Billing />
        <Footer /> 
        </header>
    );
}