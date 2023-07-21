import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
import { Button } from "ui";

export function ThemeSwitch({ className }: { className?: string }) {
  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <Button
      className={className}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Switch Theme
    </Button>
  );
}
