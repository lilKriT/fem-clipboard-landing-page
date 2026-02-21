import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "FEM - Clipboard Landing Page | lilKriT",
  description: "created by lilKriT in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
