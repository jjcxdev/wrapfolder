import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "WrapFolder",
  description: "Solutions for Production Professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
