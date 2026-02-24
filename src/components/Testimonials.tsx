"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "ConvergeDigitals transformed our online presence. Their attention to detail and precision in execution is unmatched. We saw a 40% increase in conversions within three months.",
        author: "James Wilson",
        role: "CEO, TechNova Solutions",
    },
    {
        quote: "The ecommerce platform they built for us is not only stunning but incredibly fast. Working with a senior team made all the difference in the project's success.",
        author: "Sarah Chen",
        role: "Founder, Luxe Fashion Hub",
    },
    {
        quote: "Their video editing precision and marketing insights helped us reach 1M+ views on our latest campaign. Truly a premium agency for high-growth brands.",
        author: "Michael Ross",
        role: "Head of Growth, EcoEngine SAS",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Trusted by Visionaries.</h2>
                    <p className="text-black/60 font-medium tracking-tight">Real feedback from clients we've helped scale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-10 bg-gray-50 rounded-[2rem]"
                        >
                            <Quote size={40} className="text-indigo-600/20 mb-6" />
                            <p className="text-lg font-medium leading-relaxed mb-8 italic text-black/80">"{t.quote}"</p>
                            <div>
                                <h4 className="font-black tracking-tight text-indigo-600 uppercase text-sm mb-1">{t.author}</h4>
                                <p className="text-black/40 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
