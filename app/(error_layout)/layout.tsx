import { Metadata } from "next";

export const metadata: Metadata = {
  title: '404',
  description: 'Cette pag est introuvable'
}

export default function ErrorLayout() {
  return (
    <html lang="fr">
      <head>
        <title>Erreur | Mon Site</title>
      </head>
      <body>
        <main></main> {/* Ce layout ne dépend pas du parent */}
      </body>
    </html>
  );
}
