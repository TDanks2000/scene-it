import "@/styles/globals.css";

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
      <body className={`font-sans ${inter.variable} bg-black`}>
        <TRPCReactProvider>
          <NavigationBar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
