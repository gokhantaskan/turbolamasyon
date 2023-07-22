import "@/assets/styles/tailwind.css";
import "@/assets/styles/index.scss";

import { NextThemesProvider } from "@/components/providers/NextThemesProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
