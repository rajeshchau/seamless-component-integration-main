"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Pixeleted404NotFound() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden font-mono text-white selection:bg-primary selection:text-white">
            {/* Pixel Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center text-center px-4 max-w-2xl">
                <div className="flex items-center gap-2 mb-8 text-primary/80 animate-pulse">
                    <Terminal size={18} />
                    <span className="text-xs uppercase tracking-[0.3em]">System Error Detected</span>
                </div>

                <h1 className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter relative group cursor-default">
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">404</span>
                    <span className="absolute inset-0 text-primary/10 blur-xl group-hover:text-primary/20 transition-all">404</span>
                    <div className="absolute -top-4 -right-8 bg-primary text-[#030303] text-xs px-2 py-0.5 rounded rotate-12 font-bold shadow-lg">LOST</div>
                </h1>

                <div className="mt-8 space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary/50">
                        Resource highly fragmented{dots}
                    </h2>
                    <p className="text-neutral-500 text-sm md:text-base max-w-md leading-relaxed">
                        The logical path to your destination has been de-indexed or moved to a restricted sector. Return to the core directive.
                    </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/">
                        <Button className="w-full sm:w-auto rounded-none h-12 px-8 bg-white text-[#030303] hover:bg-primary hover:text-white transition-all duration-300 gap-2 font-bold group">
                            <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Return Mainframe
                        </Button>
                    </Link>
                    <Button variant="outline" className="w-full sm:w-auto rounded-none h-12 px-8 border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all">
                        Open Terminal
                    </Button>
                </div>

                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-30 text-[10px] uppercase tracking-[0.2em] font-medium">
                    <div className="flex flex-col gap-1">
                        <span className="text-neutral-500">Error Code</span>
                        <span>0xDEADBEEF</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-neutral-500">Subsystem</span>
                        <span>Kernel_Route</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-neutral-500">Security</span>
                        <span>Isolated</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-neutral-500">Status</span>
                        <span>Terminated</span>
                    </div>
                </div>
            </div>

            {/* Retro decorative elements */}
            <div className="absolute bottom-8 left-8 text-[10px] text-neutral-800 rotate-90 origin-left">CONVERGEDIGITALS_SYSTEMS_v4.2.0</div>
            <div className="absolute top-8 right-8 text-[10px] text-neutral-800">Uptime: 99.999%</div>
        </div>
    );
}
