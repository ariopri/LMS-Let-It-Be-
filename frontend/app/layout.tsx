"use client";
import { Inter } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";

const colors = {
  accentLight: {
    900: "#1A365D",
    800: "#2A4365",
    700: "#2C5282",
    600: "#2B6CB0",
    500: "#3182CE",
    400: "#4299E1",
    300: "#63B3ED",
    200: "#90CDF4",
    100: "#BEE3F8",
    50: "#EBF8FF",
  },
  accentDark: {
    900: "#5F370E",
    800: "#744210",
    700: "#975A16",
    600: "#B7791F",
    500: "#D69E2E",
    400: "#ECC94B",
    300: "#F6E05E",
    200: "#FAF089",
    100: "#FEFCBF",
    50: "#FFFFF0",
  },
};

const theme = extendTheme({ colors });

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <NavBar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
