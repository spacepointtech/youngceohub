// layout.js 
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

