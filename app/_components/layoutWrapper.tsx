"use client"; // Permet d'utiliser usePathname()

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotFoundPage = pathname === "/not-found"; // Vérifie si c'est la page 404

  return (
    <>
      {!isNotFoundPage && <Header />}
      <main>{children}</main>
      {!isNotFoundPage && <Footer />}
    </>
  );
}
