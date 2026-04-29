import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WM Resistências Elétricas | Resistências Industriais Sob Medida",
  description: "Líder em resistências industriais em Prado Ferreira - PR. Fabricamos resistências cartucho, tubulares, coleiras e mais. Qualidade e durabilidade garantidas.",
  keywords: "resistências elétricas, resistências industriais, WM Resistências, Prado Ferreira PR, aquecimento industrial, resistência cartucho, resistência tubular",
  authors: [{ name: "WM Resistências Elétricas LTDA" }],
  openGraph: {
    title: "WM Resistências Elétricas | Qualidade Industrial",
    description: "Especialistas em soluções de aquecimento industrial. Resistências sob medida com entrega em todo o estado.",
    type: "website",
    url: "https://wmresistencias.com.br",
    images: ["/logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#E31E24" />
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "WM Resistências Elétricas LTDA",
              image: "https://wmresistencias.com.br/logo.jpeg",
              url: "https://wmresistencias.com.br",
              telephone: "+5543996600605",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rod. João Lunardelli, 1360-1448",
                addressLocality: "Prado Ferreira",
                addressRegion: "PR",
                postalCode: "86618-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.4457576,
                longitude: -51.8037257,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: ["https://instagram.com/wmresistencias"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
