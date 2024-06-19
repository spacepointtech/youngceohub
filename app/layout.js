// app/layout.js
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Herosection';
import ProblemSection from '@/components/ProblemSection';
import '@/app/globals.css'; // Import global styles

export default function Layout() {
  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="description" content="Young CEO Entertainment website" />
      </head>
      <body>
        <Navbar />
        <HeroSection />
        <ProblemSection />
      </body>
    </html>
  );
}
