"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-24">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200"
                >
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                            Let’s Build Something Exceptional Together.
                        </h2>
                        <p className="text-indigo-100 text-lg mb-12 font-medium">
                            Ready to take your digital presence to the next level? Contact us today for a free consultation and let's start scaling.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-white text-indigo-600 px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl"
                            >
                                Get Started Now
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="bg-indigo-700/50 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>

                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
}
