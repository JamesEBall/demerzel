import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";

// Import the Jura font
const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify the font weights you want to use
});

export const metadata: Metadata = {
  title: "Demerzel",
  description: "The Future of Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Jura font class */}
      <body className={jura.className}>{children}</body>
    </html>
  );
}
