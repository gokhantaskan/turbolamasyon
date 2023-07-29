# Note about changing theme

Currently, dark mode can only be triggered in the page files.

Simply use the code below as a page scaffold:

```tsx
"use client";

import { useTheme } from "next-themes";
import { ThemeProvider } from "ui";

import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  return (
    <ThemeProvider colorMode={theme}>
      ...
    </ThemeProvider>
  );
}
```