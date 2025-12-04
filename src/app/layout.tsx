import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John O'Donovan",
  description: "Clinical pharmacist & data analyst.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/* Outer background stays full-width (from globals.css) */}
          <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            {/* Central panel – slightly different shade + rounded corners */}
            <div className="w-full max-w-5xl rounded-3xl bg-neutral-50/95 px-6 py-8 shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/90 dark:ring-white/5">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}