"use client";

import { useTheme } from "next-themes";
import { ThemeProvider } from "ui";

import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Page() {
  const { theme } = useTheme();

  return (
    <ThemeProvider colorMode={theme}>
      <div className="container">
        <h1 className="text-3xl font-bold dark:text-gray-300">Website</h1>
        <ThemeSwitch className="ml-2" />
        <p className="text-tret">Lorem ipsum dolor sit amet.</p>
      </div>
    </ThemeProvider>
  );
}
