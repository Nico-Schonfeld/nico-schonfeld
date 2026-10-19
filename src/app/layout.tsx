import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sileo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lastoria = localFont({
  src: "../../public/LastoriaBoldRegular.otf",
  variable: "--font-lastoria-bold",
  weight: "400",
  display: "swap",
});

const title = "Nicolás Schönfeld · Desarrollador Full Stack";
const description =
  "Portafolio de Nicolás Schönfeld, desarrollador Full Stack con foco en Front-End. Trabajo con Next.js, TypeScript y React. Córdoba, Argentina.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nicoschonfeld.com"),
  title: {
    default: title,
    template: "%s · Nicolás Schönfeld",
  },
  description,
  keywords: [
    "Nicolás Schönfeld",
    "desarrollador Full Stack",
    "desarrollador Front-End",
    "Next.js",
    "TypeScript",
    "React",
    "portafolio",
    "Córdoba",
  ],
  authors: [{ name: "Nicolás Schönfeld", url: "https://nicoschonfeld.com" }],
  creator: "Nicolás Schönfeld",
  applicationName: "Nicolás Schönfeld",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "https://nicoschonfeld.com",
    siteName: "Nicolás Schönfeld",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://github.com/nico-schonfeld.png",
        alt: "Nicolás Schönfeld",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["https://github.com/nico-schonfeld.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${lastoria.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
