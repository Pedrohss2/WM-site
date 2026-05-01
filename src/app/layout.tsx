import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wmresistencias.com.br"),

  title: {
    default: "WM Resistência Elétrica | Resistência Elétrica Industrial",
    template: "%s | WM Resistência Elétrica",
  },

  description:
    "Fabricante de resistência elétrica industrial sob medida. Alta performance e soluções térmicas de qualidade em Prado Ferreira e para todo o Brasil.",

  keywords: [
    "resistência elétrica industrial",
    "resistência elétrica prado ferreira",
    "fabricante de resistência elétrica",
    "resistência sob medida",
    "aquecimento industrial",
    "resistência tubular",
    "resistência tipo cartucho",
    "resistência coleira",
    "soluções térmicas industriais",
    "WM Resistência Elétrica",
  ],

  authors: [{ name: "WM Resistência Elétrica Ltda", url: "https://wmresistencias.com.br" }],
  creator: "WM Resistência Elétrica Ltda",
  publisher: "WM Resistência Elétrica Ltda",

  alternates: {
    canonical: "https://wmresistencias.com.br",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "WM Resistência Elétrica | Resistência Elétrica Industrial",
    description:
      "Fabricante de resistência elétrica industrial sob medida. Alta performance e soluções térmicas de qualidade em Prado Ferreira e para todo o Brasil.",
    url: "https://wmresistencias.com.br",
    siteName: "WM Resistência Elétrica Ltda",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "WM Resistência Elétrica - Resistência Elétrica Industrial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WM Resistência Elétrica | Resistência Elétrica Industrial",
    description:
      "Fabricante de resistência elétrica industrial sob medida. Alta performance em Prado Ferreira e todo o Brasil.",
    images: ["/logo.jpeg"],
  },

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  verification: {
    google: "P3rHrLsTvTNqvfSxBQPnd6_YRCYiSBcWAzhi5p9D84E",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "WM Resistência Elétrica Ltda",
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
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "18:00",
              },

              areaServed: "Brasil",

              sameAs: [
                "https://instagram.com/wmresistencias",
              ],

              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Fabricação de Resistências Elétricas Industriais",
                },
              },
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}