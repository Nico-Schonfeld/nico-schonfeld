"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import NavbarComp from "@/components/Navbar";

export function Providers({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <NextUIProvider>
      <NextThemesProvider /* attribute="class" */ defaultTheme={theme}>
        <NavbarComp />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
