"use client";

import { ThemeProvider } from "next-themes";

export function NextThemesProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
