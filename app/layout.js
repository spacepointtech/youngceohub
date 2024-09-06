'use client'; // Needed for client-side hooks
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Hide Navbar on the login/signup/reset page
  const hideNavbar = pathname === '/login' || pathname === '/signup' || pathname === '/reset' || pathname === '/login/dashboard' || pathname === '/login/dashboard/question1'
  || pathname === '/login/dashboard/question2' || pathname === '/login/dashboard/question3' || pathname === '/login/dashboard/question4' || pathname === '/login/dashboard/question5' || pathname === '/login/dashboard/question6' || pathname === '/login/dashboard/question4';

  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
      </head>
      <body>
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}

