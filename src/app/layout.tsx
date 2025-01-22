import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/firebase/AuthContext"
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Smart Trens App",
  description: "Data system students Trensains High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Toaster position="top-center" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
