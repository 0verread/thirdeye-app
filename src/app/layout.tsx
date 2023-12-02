import "src/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "src/trpc/react";
import { cn } from "src/lib/utils";
import Header from "./_components/header";

export const metadata = {
  title: "Third Eye",
  description: "API Key logging and monitoring",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} ${cn(
          "bg-background container my-4 flex flex-col gap-4 antialiased",
        )}`}
      >
        {" "}
        <TRPCReactProvider cookies={cookies().toString()}>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
