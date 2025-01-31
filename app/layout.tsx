// -------------My CSS-------------------
import '@/app/styles/globals.css' 

// ------------------------------FONTAWESOME----------------------------------
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import du CSS       
config.autoAddCss = false; // Désactive l'ajout automatique des styles //    

// -----------------HEADER---------------------
import Header from './_components/header'; 

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A définir",
  description: "A définir"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
