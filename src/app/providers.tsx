"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"   // 👈 default to dark
      enableSystem={false}  // 👈 ignore OS theme; use your own default + user choice
    >
      {children}
    </ThemeProvider>
  );
}