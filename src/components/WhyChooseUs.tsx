"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, BarChart3 } from "lucide-react";

const features = [
    {
        title: "10+ Years Experience",
        description: "A decade of mastering the digital landscape with proven success stories.",
        icon: Award,
    },
    {
        title: "Clean Code Architecture",
        description: "Maintainable, scalable, and optimized code that stands the test of time.",
        icon: Zap,
    },
    {
        title: "Performance Focused",
        description: "Lightning-fast experiences that improve user retention and SEO rankings.",
        icon: CheckCircle2,
    },
    {
        title: "Conversion Driven",
        description: "Every pixel and line of code is engineered to turn visitors into customers.",
        icon: BarChart3,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-6 block">Our Difference</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Why Industry Leaders Trust ConvergeDigitals.
                        </h2>
                        <p className="text-black/60 text-lg mb-10 font-medium">
                            We don't just build websites; we build growth engines. Our approach combines senior-level expertise with cutting-edge technology.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={feature.title} className="flex flex-col gap-4">
                                    <div className="text-indigo-600">
                                        <feature.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 tracking-tight">{feature.title}</h4>
                                        <p className="text-black/50 text-sm font-medium leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent" />
                            <div className="flex items-center justify-center h-full text-9xl font-black text-black/5 select-none tracking-tighter">
                                PRECISION
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-10 -left-10 bg-black text-white p-10 rounded-3xl shadow-2xl hidden md:block"
                        >
                            <div className="text-4xl font-black mb-2 tracking-tighter text-indigo-400">99.9%</div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/60">Client Satisfaction</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
