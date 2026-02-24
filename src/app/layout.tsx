import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { DynamicNav } from "@/components/DynamicNav";
import { Footer1 } from "@/components/ui/footer-1";
import { CustomCursor } from "@/components/ui/custom-cursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins"
});

export const metadata: Metadata = {
    title: "ConvergeDigitals | We Deliver Perfection with Precision",
    description: "High-performance digital agency specializing in Web Development, Ecommerce, Social Media Marketing, and Video Editing.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-black`}>
                <CustomCursor />
                <DynamicNav />
                <main>{children}</main>
                <Footer1 />
            </body>
        </html>
    );
}
