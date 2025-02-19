import { Metadata } from "next";


export const metadata: Metadata = {
  title: "404 | Not found",
  description: "A définir"
};

export default function ErrorLayout({ children }: { children: React.ReactNode }) {
    return <main className="flex items-center justify-center min-h-screen bg-gray-100 text-black">{children}</main>;
  }
  