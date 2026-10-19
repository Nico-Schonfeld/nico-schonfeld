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

export const metadata: Metadata = {
  metadataBase: new URL("https://nicoschonfeld.com"),
  title: "Nicolás Schönfeld",
  description: "Portafolio de Nicolás Schönfeld, desarrollador full stack.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nicolás Schönfeld",
    description: "Portafolio de Nicolás Schönfeld, desarrollador full stack.",
    url: "https://nicoschonfeld.com",
    siteName: "Nicolás Schönfeld",
    locale: "es_AR",
    type: "website",
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
          defaultTheme="light"
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
