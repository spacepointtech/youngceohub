// // components/HeroSection.js
// export default function HeroSection() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//       <div className="text-center">
//         <div className="flex items-center justify-center space-x-4">
//           <img src="/images/logo.png" alt="Young CEO Entertainment" className="w-52" />
//           <h1 className="text-white text-7xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
//         </div>
//         <p className="text-white text-3xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
//       </div>
//     </div>
//   );
// }


// components/HeroSection.js checking part 

// 'use client';

// export default function HeroSection() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//       <div className="text-center">
//         <div className="flex items-center justify-center space-x-4">
//           <img src="/images/logo.png" alt="Young CEO Entertainment" className="w-52" />
//           <h1 className="text-white text-7xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
//         </div>
//         <p className="text-white text-3xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
//       </div>
//     </div>
//   );
// }


'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="text-center">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-52">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
          </div>
          <h1 className="text-white text-7xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
        </div>
        <p className="text-white text-3xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
      </div>
    </div>
  );
}
