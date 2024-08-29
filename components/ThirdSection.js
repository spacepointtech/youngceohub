'use client'; // for client side rendering

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ThirdSection() {

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-hammersmith-one">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Illustration Section */}
        <div className="flex justify-center md:justify-start mt-4 md:mt-0">
          <div
            className="illustration-container"
          >
            <Image
              src="/images/2.svg"
              alt="Illustration"
              width={1000}
              height={1000}
              className="illustration-style"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-5xl font-bold">WE’RE SOLELY FOR THE SMALL AND INDEPENDENT ARTISTS</h2>
          <p className="text-2xl">
            YCE is your hub for discovering new artists. Hear under-the-radar artists here first.
          </p>
        </div>
        
      </div>
    </div>
  );
}


// 'use client'; // for client side rendering

// import Image from 'next/image';

// export default function ThirdSection() {
//   return (
//     <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-hammersmith-one">
//     <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
//      <div className="flex justify-center md:justify-start">
//       <div className="w-full h-auto max-w-lg transform hover:scale-125 transition-all duration-500 ease-in-out animate-fade-in">
//             <Image 
//               src="/images/2.svg" 
//               alt="Support Illustration" 
//               width={1000}
//               height={1000}
//             />
//           </div>
//       </div>
//         {/* Text Section */}
//         <div className="flex flex-col justify-center space-y-4">
//           <h2 className="text-5xl font-bold">
//             WE’RE SOLELY FOR THE SMALL AND INDEPENDENT ARTISTS
//           </h2>
//           <p className="text-2xl">
//             YCE is your hub for discovering new artists. Hear under-the-radar artists here first.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
