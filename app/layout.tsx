import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import React from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="text-redDev-300">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            iusto nam, aperiam veniam optio, consequatur repellendus praesentium
            consequuntur ea reiciendis tempore neq
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
