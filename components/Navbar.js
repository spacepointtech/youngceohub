// // components/Navbar.js checking part 

// 'use client'; // for client side rendering

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-black bg-opacity-50 text-white p-4 fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg">
//           <Link href="/" className="hover:text-gray-400">Home</Link>
//           <Link href="/music" className="ml-4 hover:text-gray-400">Music Distribution</Link>
//           <Link href="/team" className="ml-4 hover:text-gray-400">Our Team</Link>
//           <Link href="/support" className="ml-4 hover:text-gray-400">Support</Link>
//           <Link href="/contact" className="ml-4 hover:text-gray-400">Contact us</Link>
//         </div>
//         <div>
//           <button className="bg-gray-700 px-4 py-2 rounded ml-2">Log In</button>
//           <button className="bg-gray-700 px-4 py-2 rounded ml-2">Sign In</button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// components/Navbar.js

'use client'; // for client side rendering

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon from react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-50 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          {/* Toggle Menu for Small Screens */}
          <div className="block sm:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none">
              <FaBars />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-4">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/music" className="hover:text-gray-400">Music Distribution</Link>
            <Link href="/team" className="hover:text-gray-400">Our Team</Link>
            <Link href="/support" className="hover:text-gray-400">Support</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact us</Link>
          </div>
        </div>

        {/* Conditional Rendering for Toggle Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <Link href="/" className="text-white hover:text-gray-400">Home</Link>
            <Link href="/music" className="text-white hover:text-gray-400">Music Distribution</Link>
            <Link href="/team" className="text-white hover:text-gray-400">Our Team</Link>
            <Link href="/support" className="text-white hover:text-gray-400">Support</Link>
            <Link href="/contact" className="text-white hover:text-gray-400">Contact us</Link>
          </div>
        )}

        <div className="hidden sm:flex">
          <button className="bg-gray-700 px-4 py-2 rounded ml-2">Log In</button>
          <button className="bg-gray-700 px-4 py-2 rounded ml-2">Sign In</button>
        </div>
      </div>
    </nav>
  );
}
