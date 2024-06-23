// // HeroSection.js
// 'use client';  // for client side rendering

// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//       <div className="text-center">
//         <div className="flex items-center justify-center space-x-4">
//           <div className="w-52">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
//           </div>
//           <h1 className="text-white text-7xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
//         </div>
//         <p className="text-white text-3xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
//       </div>
//     </div>
//   );
// }


'use client'; // for client side rendering

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="text-center">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
          <div className="w-52 mb-4 sm:mb-0 sm:w-auto">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
          </div>
          <div>
            <h1 className="text-white text-7xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
            <p className="text-white text-3xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

