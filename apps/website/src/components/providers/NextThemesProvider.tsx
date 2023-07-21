"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function NextThemesProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
