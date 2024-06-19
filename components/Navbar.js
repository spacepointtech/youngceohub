// // components/Navbar.js
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


// components/Navbar.js checking part 

'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-50 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/music" className="ml-4 hover:text-gray-400">Music Distribution</Link>
          <Link href="/team" className="ml-4 hover:text-gray-400">Our Team</Link>
          <Link href="/support" className="ml-4 hover:text-gray-400">Support</Link>
          <Link href="/contact" className="ml-4 hover:text-gray-400">Contact us</Link>
        </div>
        <div>
          <button className="bg-gray-700 px-4 py-2 rounded ml-2">Log In</button>
          <button className="bg-gray-700 px-4 py-2 rounded ml-2">Sign In</button>
        </div>
      </div>
    </nav>
  );
}
