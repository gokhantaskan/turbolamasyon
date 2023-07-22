"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, ThemeProvider } from "ui";

import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  function handleClick() {
    setIsLoading(prev => !prev);
  }

  useEffect(() => {
    if (!isLoading) return;

    setTimeout(() => {
      setIsLoading(prev => !prev);
    }, 2_000);
  }, [isLoading]);

  return (
    <ThemeProvider colorMode={theme}>
      <div className="container">
        <h1 className="text-3xl font-bold dark:text-gray-300">Website</h1>
        <Button
          onClick={handleClick}
          loading={isLoading}
        >
          Button
        </Button>
        <ThemeSwitch className="ml-2" />
        <p className="text-tret">Lorem ipsum dolor sit amet.</p>
      </div>
    </ThemeProvider>
  );
}
