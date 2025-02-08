// import React from "react";
// import Link from "next/link";
// export default function Header() {
//   return (
//     <div className="w-full max-w-[1440px] h-[100px] relative mx-auto flex items-center justify-between px-6">
//       {/* Navigation Menu */}
//       <ul className="flex space-x-6 h-8 items-center ">
//         <Link href="/shop"   className="h-4 w-12 flex text-black font-medium hover:text-gray-800">
//           Home
//         </Link  >
//         <Link href="/checkout"   className="h-4 w-12 flex text-black font-medium hover:text-gray-800">
//           Shop
//         </Link  >
//         < Link href="/cart" className="h-4 w-12 flex text-black font-medium hover:text-gray-800">
//           About
//         </Link>
       
//         <Link href="/contact" className="h-4 w-12 flex text-black font-medium hover:text-gray-800">
//           Contact
//         </Link>
//       </ul>

//       {/* Icons */}
//       <div className="flex space-x-4 h-8 items-center justify-center mt-4">
//         <li className="flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fill="none"
//               stroke="#77d4a8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
//             />
//           </svg>
//         </li>
//         <li className="flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fill="none"
//               stroke="#77d4a8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m16-3v-3m0 0v-3m0 3h-3m3 0h3M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
//             />
//           </svg>
//         </li>
//         <li className="flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fill="none"
//               stroke="#77d4a8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.99.99 0 0 0 1.024 0C21.126 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3"
//             />
//           </svg>
//         </li>
//         <li className="flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <g
//               fill="none"
//               stroke="#77d4a8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="1.5"
//             >
//               <path
//                 fill="#77d4a8"
//                 d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
//               />
//               <path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5" />
//             </g>
//           </svg>
//         </li>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full max-w-[1440px] h-[100px] relative mx-auto flex items-center justify-between px-6">
      {/* Navigation Menu */}
      <ul className="flex space-x-6 items-center h-full">
        <li>
          <Link href="/shop" aria-label="Go to Home page">
            <span className="text-lg text-black font-medium hover:text-gray-800 focus:text-gray-800">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/checkout" aria-label="Go to Shop page">
            <span className="text-lg text-black font-medium hover:text-gray-800 focus:text-gray-800">
              Shop
            </span>
          </Link>
        </li>
        <li>
          <Link href="/cart" aria-label="Go to About page">
            <span className="text-lg text-black font-medium hover:text-gray-800 focus:text-gray-800">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Go to Contact page">
            <span className="text-lg text-black font-medium hover:text-gray-800 focus:text-gray-800">
              Contact
            </span>
          </Link>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex space-x-4 items-center justify-center mt-4">
        {/* Icon for search */}
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-label="Search Icon"
          >
            <path
              fill="none"
              stroke="#77d4a8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
            />
          </svg>
        </li>
        
        {/* Icon for profile */}
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-label="Profile Icon"
          >
            <path
              fill="none"
              stroke="#77d4a8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m16-3v-3m0 0v-3m0 3h-3m3 0h3M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
            />
          </svg>
        </li>
        
        {/* Icon for heart/favorites */}
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-label="Favorites Icon"
          >
            <path
              fill="none"
              stroke="#77d4a8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.99.99 0 0 0 1.024 0C21.126 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3"
            />
          </svg>
        </li>
        
        {/* Cart Icon */}
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-label="Shopping Cart Icon"
          >
            <g
              fill="none"
              stroke="#77d4a8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path
                fill="#77d4a8"
                d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
              />
              <path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5" />
            </g>
          </svg>
        </li>
      </div>
    </div>
  );
}
