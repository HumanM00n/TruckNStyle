"use client";

import Header from "../_components/header";
import Footer from "../_components/footer";
import { usePathname } from "next/navigation";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  const router = usePathname();

  // Récupération de l'URL && On split l'url en 2 && On récupère le deuxième élément de la chaine de caractère 
  const myUrl = router;
  const pathnameUrl = myUrl.split("/");
  const titlePage = pathnameUrl[1] || "Accueil";

  console.log(titlePage);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>{titlePage}</title>
      </head>
      <main>
        <Header />
        <section>{children}</section>
        <Footer />
      </main>
    </>
  );
}

