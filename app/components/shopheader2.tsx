// import { Breadcrumb } from '@/components/ui/breadcrumb'
// import React from 'react'
// import Link from 'next/link'
// export default function shopheader2() {
//   return (
//     <div><nav className="flex items-center space-x-2 mt-2 text-sm">
//     <Link href="/" className="hover:underline">
//         Home
//     </Link>
//     <span>&gt;</span>
//     <Link href="/components" className="hover:underline">
//         Shop
//     </Link>

// <h4 className=" font-bold mt-4 gap-8">Asgaard sofa</h4>

// </nav>
// </div>
//   )
// }
// import { Breadcrumb } from '@/components/ui/breadcrumb';
// import React from 'react';
// import Link from 'next/link';

// export default function ShopHeader2() {
//   return (
//     <div className="p-4 mr-14 flex  flex-col ">
//       <nav className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
//         <Link href="/" className="hover:underline text-gray-800">
//           Home
//         </Link>
//         <span className="text-gray-400">&gt;</span>
//         <Link href="/components" className="hover:underline text-gray-800">
//           Shop
//         </Link>
//       <h4 className="font-bold mt-4 text-sm text-gray-900 ml-10 text-center justify-center">Asgaard Sofa</h4>
//       </nav>
//     </div>
//   );
// }
import React from 'react';
import Link from 'next/link';

export default function ShopHeader2() {
  return (
    <div className="p-4 mr-14 flex flex-col">
      <nav className="flex items-center space-x-7 mt-2 text-sm text-gray-600">
        <Link href="/" className="hover:underline text-gray-800">
          Home
        </Link>
        <span className="text-gray-400">&gt;</span>
        <Link href="/our_products" className="hover:underline text-gray-800">
          Shop
        </Link>
      </nav>
      <h4 className="font-bold mt-4 text-sm text-gray-900 ml-10 text-center">Asgaard Sofa</h4>
    </div>
  );
}
