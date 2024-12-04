import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Lora } from "next/font/google";
import AOSProvider from "@/components/AosProvider";
import Footer from "@/components/Footer";
import ReduxProvider from "./providers/storeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "PsycheMaster - Mental Health Wellbeing",
  description:
    "We are a Team of Certified Counselors Working around Epilepsy. Our team consists of certified and experienced counselors who are passionate about making a difference in the lives of those navigating the unique challenges associated with this condition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}
      >
        <>
          <ReduxProvider>
            <AOSProvider>
              <Header />
              {children}
              <Footer />
            </AOSProvider>
          </ReduxProvider>
        </>
      </body>
    </html>
  );
}
