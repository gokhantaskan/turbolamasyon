import { useTheme } from "next-themes";
import { Button } from "ui";

export function ThemeSwitch({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Switch Theme
    </Button>
  );
}
