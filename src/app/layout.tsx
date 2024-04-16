import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import NavigationBar from "@/components/navigationBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Scene It",
  description: "You ultimte app for all thing's anime/movie/tv related",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-zinc-950`}>
        <NextTopLoader
          color="#ffffff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #ffff,0 0 5px #ffff"
        />
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavigationBar />
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
