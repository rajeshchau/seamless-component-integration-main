"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block text-indigo-600 font-bold uppercase tracking-widest text-xs mb-6 px-3 py-1 bg-indigo-50 rounded-full"
                    >
                        Precision & Perfection
                    </motion.span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                        We Build Digital <br />
                        <span className="text-indigo-600">Experiences</span> <br />
                        That Convert.
                    </h1>
                    <p className="text-lg md:text-xl text-black/60 max-w-2xl mb-10 leading-relaxed font-medium">
                        ConvergeDigitals is a high-end agency dedicated to delivering flawless digital solutions.
                        We blend technical precision with creative perfection to scale your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all duration-300 group shadow-lg hover:shadow-indigo-200"
                        >
                            Get Started
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="px-8 py-4 border border-black/10 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        >
                            View Our Work
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50/30 to-transparent blur-3xl rounded-full translate-x-1/4" />
        </section>
    );
}
