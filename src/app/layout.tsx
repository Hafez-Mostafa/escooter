import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterPage from "@/Components/footer/Footer";
import Navbar from "@/Components/nav/Navbar";
import  { SidebarProvider } from "@/app/context/SidebarContext";
import Sidebar from "@/Components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meine Next.js App",
  description: "Eine moderne Next.js-App mit Tailwind und Geist-Schriftarten.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`min-h-screen bg-gray-50 text-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <SidebarProvider>
      <div> <Navbar />
      <Sidebar />
        {children ?? <p>Loading...</p>}
        <FooterPage /></div>
      </SidebarProvider>
      </body>
    </html>
  );
}
