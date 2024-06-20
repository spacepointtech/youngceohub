// 'use client';

// export default function SupportSection() {
//   return (
//     <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-hammersmith-one">
//       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
//         <div className="flex justify-center md:justify-start">
//           <img 
//             src="/images/Lo-fi concept-amico.svg" 
//             alt="Support Illustration" 
//             className="w-120 h-auto transform hover:scale-125 transition-all duration-500 ease-in-out animate-fade-in" 
//           />
//         </div>
//         <div className="text-center md:text-left">
//           <h2 className="text-5xl font-bold">
//             WE'RE HERE TO<br />SUPPORT YOU
//           </h2>
//           <a 
//             href="/support" 
//             className="block text-sm mt-2 text-gray-400 hover:text-gray-200 transition duration-300"
//             style={{ opacity: 0.85 }}
//           >
//             read more what we support and care for you
//           </a>
//           <ul className="text-2xl list-disc list-inside mt-8 space-y-2">
//             <li>Fair pricing and royalties for artists</li>
//             <li>Artists spotlight to promote their music</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
export default function SupportSection() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-hammersmith-one">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-full h-auto max-w-lg transform hover:scale-125 transition-all duration-500 ease-in-out animate-fade-in">
            <Image 
              src="/images/Lo-fi concept-amico.svg" 
              alt="Support Illustration" 
              layout="intrinsic" 
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold">
            WE&apos;RE HERE TO SUPPORT YOU
          </h2>
          <a 
            href="/support" 
            className="block text-sm mt-2 text-gray-400 hover:text-gray-200 transition duration-300"
            style={{ opacity: 0.85 }}
          >
            read more about what we support and care for you
          </a>
          <ul className="text-2xl list-disc list-inside mt-8 space-y-2">
            <li>Fair pricing and royalties for artists</li>
            <li>Artist spotlight to promote their music</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


