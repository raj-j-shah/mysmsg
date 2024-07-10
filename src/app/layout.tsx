import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionContext } from "next-auth/react";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster"
import NavBar from "@/components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Message sender",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className={inter.className}>
   
        {children}
      <Toaster />
      </body>
     </AuthProvider>
    </html>
  );
}
