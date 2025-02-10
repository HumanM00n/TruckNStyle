// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Header from './_components/header';
import Footer from './_components/footer';
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/app/styles/globals.css';



export const metadata: Metadata = {
  title: "A définir",
  description: "A définir"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Composants */}
        <Header />
        
        {/* Pages */}
        {children}

        {/* Composants */}
        <Footer />
      </body>
    </html>
  );
}
