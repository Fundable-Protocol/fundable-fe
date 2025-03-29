"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { useEntity } from "simpler-state";
import { themeStore } from "@/store/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useEntity(themeStore);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <NextThemesProvider attribute="class" defaultTheme={theme} enableSystem>
      {children}
    </NextThemesProvider>
  );
}
