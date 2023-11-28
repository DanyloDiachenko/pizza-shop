import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "./globals.scss";
import { Header } from "@/components/Header";
import { ReduxProvider } from "@/store/ReduxProvider";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    preload: true,
});

export const metadata: Metadata = {
    title: "Pizza Shop",
    description: "Pizza Shop - the tastiest pizzas in the whole world",
    icons: "/logo.png",
};

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Header />
                    <hr className="headerHr" />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
};

export default RootLayout;
