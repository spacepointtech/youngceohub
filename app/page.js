// app/page.js
// import Layout from './layout';
// import HeroSection from '@/components/HeroSection';


// export default function Home() {
//   return (
//     <Layout>
//       <HeroSection />
//     </Layout>
//   );
// }



// app/page.js checking part
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ThirdSection from '@/components/ThirdSection';
import SupportSection from '@/components/SupportSection';
import PricingSection from '@/components/PricingSection';
import FooterSection from '@/components/FooterSection';
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ThirdSection />
      <SupportSection />
      <PricingSection />
      <FooterSection />
    </>
  );
}
