// // app/layout.js
// import Navbar from '@/components/Navbar';
// import HeroSection from '@/components/HeroSection';
// import ProblemSection from '@/components/ProblemSection';
// // import ThirdSection from '@/components/ThirdSection';
// import '@/app/globals.css'; // Import global styles


// export default function Layout() {
//   return (
//     <html lang="en">
//       <head>
//         <title>Young CEO Entertainment</title>
//         <meta name="description" content="Young CEO Entertainment website" />
//       </head>
//       <body>
//         <Navbar />
//         <HeroSection />
//         <ProblemSection />
//         {/* <ThirdSection /> */}
//       </body>
//     </html>
//   );
// }

// app/layout.js Checking part
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="Designed & Developed by YCE Tech Team" content="YCE HUB FOR SMALL AND INDEPENDENT ARTIST" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

