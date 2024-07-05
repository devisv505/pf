import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {SessionProvider} from "@/components/providers/session-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "ProfitRoles",
    description: "ProfitRoles",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/logo.svg",
                href: "/logo.svg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/logo-dark.svg",
                href: "/logo-dark.svg",
            }
        ]
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <SessionProvider>
            {/*<ConvexClientProvider>*/}
            {/*  <EdgeStoreProvider>*/}
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="jotion-theme"
            >
                {/*      <Toaster position="bottom-right" />*/}
                {/*      <ModalProvider />*/}
                {children}
            </ThemeProvider>
            {/*</EdgeStoreProvider>*/}
            {/*</ConvexClientProvider>*/}
        </SessionProvider>
        </body>
        </html>
    );
}