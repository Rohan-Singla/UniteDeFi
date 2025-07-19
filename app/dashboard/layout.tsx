'use client'

import Navbar from "@/components/layout/Navbar";
import '@suiet/wallet-kit/style.css';
import "../globals.css"
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <Navbar />
                {children}
            </div>
        </>

    );
}
