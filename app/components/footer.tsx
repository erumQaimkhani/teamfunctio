
// import React from 'react';
// import { Input } from '@/components/ui/input';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// const Footer = () => {
//   return (
//     <footer className="footer bg-neutral text-neutral-content p-10">
//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//         {/* Address Section */}
//         <div>
//           <p className="text-sm">
//             400 University Drive Suite 200 <br />
//             Coral Gables, FL 33134 USA
//           </p>
//         </div>

//         {/* Links Section */}
//         <div>
//           <h6 className="footer-title mb-2">Links</h6>
//           <ul>
//             <li>
//               <Link href="/Home" className="link link-hover">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/checkout" className="link link-hover">
//                 Shop
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="link link-hover">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="link link-hover">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Help Section */}
//         <div>
//           <h6 className="footer-title mb-2">Help</h6>
//           <ul>
//             <li>
//               <Link href="/Checkout" className="link link-hover">
//                 Cart
//               </Link>
//             </li>
//             <li>
//               <Link href="/return" className="link link-hover">
//                 Returns
//               </Link>
//             </li>
//             <li>
//               <Link href="/privacy" className="link link-hover">
//                 Privacy Policies
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div>
//           <h6 className="footer-title mb-2">Newsletter</h6>
//           <div className="flex items-center gap-2">
//             <Input placeholder="Enter your email" className="input input-bordered" />
//             <Button className="btn btn-primary">Subscribe</Button>  
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    if (!email.includes('@')) {
      setMessage('Please enter a valid email address.');
    } else {
      setMessage('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="footer bg-neutral text-neutral-content p-10" role="contentinfo">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Address Section */}
        <div>
          <p className="text-sm">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2">Links</h6>
          <ul>
            <li>
              <Link href="/Home" className="link link-hover hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="link link-hover hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="link link-hover hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link link-hover hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2">Help</h6>
          <ul>
            <li>
              <Link href="/Checkout" className="link link-hover hover:underline">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/return" className="link link-hover hover:underline">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="link link-hover hover:underline">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2">Newsletter</h6>
          <div className="flex items-center gap-2 mb-4">
            <Input
              placeholder="Enter your email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for newsletter subscription"
            />
            <Button
              className="btn btn-primary"
              onClick={handleSubscribe}
              aria-label="Subscribe to the newsletter"
            >
              Subscribe
            </Button>
          </div>
          {message && <p className="text-sm text-gray-200">{message}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
