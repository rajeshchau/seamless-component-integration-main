"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Deep diving into your brand, goals, and target audience to define a clear roadmap.",
    },
    {
        number: "02",
        title: "Planning",
        description: "Strategizing the architecture and user flow for maximum conversion and performance.",
    },
    {
        number: "03",
        title: "Design",
        description: "Crafting a premium visual identity that resonates with your brand essence.",
    },
    {
        number: "04",
        title: "Development",
        description: "Coding with precision using the latest technologies for a flawless experience.",
    },
    {
        number: "05",
        title: "Launch & Scale",
        description: "Deploying your digital asset and optimizing it for continuous growth.",
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-6 block">Our Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Precision Orchestrated.</h2>
                    <p className="text-white/50 max-w-2xl mx-auto font-medium">
                        Our systematic approach ensures that every project is delivered with the highest standards of quality and efficiency.
                    </p>
                </div>

                <div className="flex flex-col gap-px bg-white/10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group grid grid-cols-1 md:grid-cols-3 gap-8 py-12 md:py-20 px-8 hover:bg-white/5 transition-colors"
                        >
                            <div className="text-7xl md:text-8xl font-black tracking-tighter text-white/10 group-hover:text-indigo-500/30 transition-colors">
                                {step.number}
                            </div>
                            <div className="flex items-center">
                                <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase">{step.title}</h3>
                            </div>
                            <div className="flex items-center">
                                <p className="text-white/60 font-medium leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
