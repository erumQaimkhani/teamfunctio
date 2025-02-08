
// import React from 'react';
// import { Button } from '@/components/ui/button';

// export default function Filter() {
//   return (
//     <div className="p-4 bg-gray-100 border-b border-gray-300">
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         {/* Filter Button */}
//         <div className="flex items-center gap-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="15"
//             height="15"
//             viewBox="0 0 15 15"
//             className="shrink-0"
//           >
//             <path
//               fill="#000"
//               fillRule="evenodd"
//               d="M5.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M3 5l.05-.002a2.5 2.5 0 0 0 4.9 0L8 5h5.5a.5.5 0 0 0 0-1H8l-.05.002a2.5 2.5 0 0 0-4.9 0L3 4H1.5a.5.5 0 0 0 0 1zm8.95 5.998a2.5 2.5 0 0 1-4.9 0L7 11H1.5a.5.5 0 0 1 0-1H7l.05.002a2.5 2.5 0 0 1 4.9 0L12 10h1.5a.5.5 0 0 1 0 1H12zM8 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
//               clipRule="evenodd"
//             />
//           </svg>
//           <Button className="btn btn-outline border-gray-400 text-gray-700 px-4 py-2">
//             Filter
//           </Button>
//         </div>

//         {/* Pagination Info */}
//         <div className="text-gray-600 text-sm text-center md:text-left">
//           Showing <span className="font-semibold">1–16</span> of{' '}
//           <span className="font-semibold">32</span> results
//         </div>

//         {/* Controls: Show Items and Sort */}
//         <div className="flex flex-wrap items-center gap-4 sm:gap-6">
//           {/* Items Per Page */}
//           <div className="flex items-center gap-2">
//             <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
//               Show
//             </label>
//             <select
//               id="itemsPerPage"
//               className="border border-gray-400 rounded px-3 py-1 text-sm"
//             >
//               <option value="16">16</option>
//               <option value="32">32</option>
//               <option value="48">48</option>
//             </select>
//           </div>

//           {/* Sort By */}
//           <div className="flex items-center gap-2">
//             <label htmlFor="sortBy" className="text-sm text-gray-600">
//               Sort by
//             </label>
//             <select
//               id="sortBy"
//               className="border border-gray-400 rounded px-3 py-1 text-sm"
//             >
//               <option value="default">Default</option>
//               <option value="popularity">Popularity</option>
//               <option value="rating">Rating</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Filter() {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState('default');

  return (
    <div className="p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Filter Button */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            className="shrink-0"
            aria-hidden="true"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M5.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M3 5l.05-.002a2.5 2.5 0 0 0 4.9 0L8 5h5.5a.5.5 0 0 0 0-1H8l-.05.002a2.5 2.5 0 0 0-4.9 0L3 4H1.5a.5.5 0 0 0 0 1zm8.95 5.998a2.5 2.5 0 0 1-4.9 0L7 11H1.5a.5.5 0 0 1 0-1H7l.05.002a2.5 2.5 0 0 1 4.9 0L12 10h1.5a.5.5 0 0 1 0 1H12zM8 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
              clipRule="evenodd"
            />
          </svg>
          <Button
            className="btn btn-outline border-gray-400 text-gray-700 px-4 py-2 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-400"
            aria-label="Open filter options"
          >
            Filter
          </Button>
        </div>

        {/* Pagination Info */}
        <div className="text-gray-600 text-sm text-center md:text-left">
          Showing <span className="font-semibold">1–{itemsPerPage}</span> of{' '}
          <span className="font-semibold">32</span> results
        </div>

        {/* Controls: Show Items and Sort */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {/* Items Per Page */}
          <div className="flex items-center gap-2">
            <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
              Show
            </label>
            <select
              id="itemsPerPage"
              className="border border-gray-400 rounded px-3 py-1 text-sm"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-sm text-gray-600">
              Sort by
            </label>
            <select
              id="sortBy"
              className="border border-gray-400 rounded px-3 py-1 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
