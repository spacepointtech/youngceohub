// // components/ThirdSection.js
// export default function ThirdSection() {
//     return (
//       <div className="min-h-screen bg-black text-white text-center py-20 px-4 md:px-0 font-hammersmith-one">
//         <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
//           <div className="text-left p-4">
//             <h2 className="text-4xl font-bold mb-4">WE’RE SOLELY FOR THE SMALL AND INDEPENDENT ARTISTS</h2>
//             <p className="text-xl">
//               YCE is your hub for discovering new artists. Hear under-the-radar artists here first.
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center space-x-4 p-4">
//             <img src="/images/third-image-1.jpg" alt="Artist 1" className="w-1/4 h-auto rounded-lg" />
//             <img src="/images/third-image-2.jpg" alt="Artist 2" className="w-1/4 h-auto rounded-lg" />
//             <img src="/images/third-image-3.jpg" alt="Artist 3" className="w-1/4 h-auto rounded-lg" />
//             <img src="/images/third-image-4.jpg" alt="Artist 4" className="w-1/4 h-auto rounded-lg" />
//           </div>
//         </div>
//       </div>
//     );
//   }


// components/ThirdSection.js Checking part 

// components/ThirdSection.js
// components/ThirdSection.js
// 'use client';

// export default function ThirdSection() {
//   return (
//     <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-hammersmith-one">
//       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         <div className="flex flex-col justify-center space-y-4">
//           <h2 className="text-5xl font-bold">WE’RE SOLELY FOR THE SMALL AND INDEPENDENT ARTISTS</h2>
//           <p className="text-2xl">
//             YCE is your hub for discovering new artists. Hear under-the-radar artists here first.
//           </p>
//         </div>
//         <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
//           <div className="bg-gray-700 p-4 rounded">
//             <img src="/images/artist1.jpg" alt="Artist 1" className="h-auto rounded" />
//           </div>
//           <div className="bg-gray-700 p-4 rounded">
//             <img src="/images/artist2.jpg" alt="Artist 2" className="h-auto rounded" />
//           </div>
//           <div className="bg-gray-700 p-4 rounded">
//             <img src="/images/artist3.jpg" alt="Artist 3" className="h-auto rounded" />
//           </div>
//           <div className="bg-gray-700 p-4 rounded">
//             <img src="/images/artist4.jpg" alt="Artist 4" className="h-auto rounded" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import Image from 'next/image';

export default function ThirdSection() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-hammersmith-one">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-5xl font-bold">WE’RE SOLELY FOR THE SMALL AND INDEPENDENT ARTISTS</h2>
          <p className="text-2xl">
            YCE is your hub for discovering new artists. Hear under-the-radar artists here first.
          </p>
        </div>
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <div className="bg-gray-700 p-4 rounded">
            <Image src="/images/artist1.jpeg" alt="Artist 1" width={100} height={100} className="h-auto rounded" />
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <Image src="/images/artist2.jpeg" alt="Artist 2" width={100} height={100} className="h-auto rounded" />
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <Image src="/images/artist3.jpeg" alt="Artist 3" width={100} height={100} className="h-auto rounded" />
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <Image src="/images/artist4.jpeg" alt="Artist 4" width={100} height={100} className="h-auto rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

  