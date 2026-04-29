import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wmresistencias.com.br"),

  title: {
    default:
      "Fabricante de Resistência Elétrica Industrial | WM Resistências",
    template: "%s | WM Resistências",
  },

  description:
    "Fabricante de resistência elétrica industrial e resistência elétrica sob medida. Especialistas em aquecimento industrial, manutenção e soluções térmicas de alta performance para empresas de todo o Brasil. Solicite seu orçamento.",

  keywords: [
    "resistência elétrica industrial",
    "fabricante de resistência elétrica",
    "resistência elétrica sob medida",
    "aquecimento industrial",
    "resistência tubular",
    "resistência cartucho",
    "resistência coleira",
    "resistência infravermelha",
    "resistência mica",
    "resistência flangeada",
    "manutenção de resistência elétrica",
    "resistências elétricas em Prado Ferreira",
    "WM Resistências",
    "wm resistencia eletrica",
    "wm resistencia",
    "wm resistências",
    "wmresistencias",
    "WMResistencias",
    "wmresistencias.com.br",
    "wmresistencias.com.br",
  ],

  authors: [
    {
      name: "WM Resistências Elétricas LTDA",
      url: "https://wmresistencias.com.br",
    },
  ],

  creator: "WM Resistências Elétricas LTDA",
  publisher: "WM Resistências Elétricas LTDA",

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
    title:
      "Fabricante de Resistência Elétrica Industrial | WM Resistências",

    description:
      "Especialistas em resistências elétricas industriais e soluções térmicas sob medida para sua empresa. Alta performance, durabilidade e atendimento em todo o Brasil.",

    url: "https://wmresistencias.com.br",
    siteName: "WM Resistências",
    locale: "pt_BR",
    type: "website",

    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "WM Resistências Elétricas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Fabricante de Resistência Elétrica Industrial | WM Resistências",
    description:
      "Especialistas em resistência elétrica industrial e sob medida para empresas de todo o Brasil.",
    images: ["/logo.jpeg"],
  },

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  verification: {
    google: "",
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