import type { Metadata } from "next";
import { Poppins , Whisper } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"] , weight : ["400"]} );
const whisper = Whisper({ subsets: ["latin"] , weight : ["400"]} ); 

export const metadata: Metadata = {
  title: "Task ",
  description: "Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>{children}</body> 
    </html>
  );
}