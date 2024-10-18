import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import ReactQueryProvider from "@/component/global/global-config";

export const metadata: Metadata = {
  title: "T1-Team Victory",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"m-0 p-0"}>
        <NextTopLoader
          zIndex={2500}
          height={3}
          color="#2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
