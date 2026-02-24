"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Laptop, ShoppingBag, Share2, Video, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";

const serviceData: Record<string, any> = {
    "website-development": {
        title: "Website Development",
        longDesc: "We specialize in building ultra-high-performance websites that serve as the digital backbone of your business. Our approach focuses on clean architecture, lightning-fast load times, and superior SEO characteristics.",
        icon: Laptop,
        process: [
            { name: "Architecture Planning", desc: "Defining the right tech stack and data structures for long-term scalability." },
            { name: "Component-Driven Design", desc: "Building a modular UI system that is consistent and reusable." },
            { name: "Rigorous Implementation", desc: "Coding with precision and attention to every single pixel." },
            { name: "Production Optimization", desc: "Deploying with edge functions for global performance and security." },
        ],
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma/MongoDB"],
        faqs: [
            { q: "How long does a typical build take?", a: "Depending on complexity, between 4 to 12 weeks." },
            { q: "Do you provide post-launch support?", a: "Yes, we offer monthly maintenance and optimization packages." },
        ],
    },
    "ecommerce-development": {
        title: "Ecommerce Development",
        longDesc: "Our ecommerce solutions are built for conversion. We create seamless shopping experiences that drive revenue and build customer loyalty through intuitive design and robust technology.",
        icon: ShoppingBag,
        process: [
            { name: "Commerce Strategy", desc: "Analyzing your market and defining the optimal sales funnel." },
            { name: "Storefront Engineering", desc: "Developing a highly responsive and high-converting storefront." },
            { name: "Third-Party Integration", desc: "Seamlessly connecting payments, shipping, and ERP systems." },
            { name: "Conversion Optimization", desc: "A/B testing and refining the path to purchase." },
        ],
        tools: ["Shopify Plus", "Next.js Commerce", "Stripe", "Sanity CMS", "Vercel"],
        faqs: [
            { q: "Can you migrate my existing store?", a: "Absolutely. We specialize in complex data migrations." },
            { q: "Is the site mobile-optimized?", a: "Mobile-first is our standard approach for all ecommerce builds." },
        ],
    },
    "social-media-marketing": {
        title: "Social Media Marketing",
        longDesc: "Transform your social media from a chore into a growth machine. We use data-driven insights and cinematic content to grow your audience and drive meaningful engagement.",
        icon: Share2,
        process: [
            { name: "Brand Audit", desc: "Evaluating your current presence and identifying growth opportunities." },
            { name: "Content Strategy", desc: "Planning high-impact content calendars that resonate with your audience." },
            { name: "Campaign Management", desc: "Executing targeted ads and organic growth strategies." },
            { name: "Analytics & Reporting", desc: "Deep diving into the data to optimize performance monthly." },
        ],
        tools: ["Meta Ads Manager", "Later", "Ahrefs", "Google Analytics", "Canva Pro"],
        faqs: [
            { q: "Which platforms do you support?", a: "Instagram, TikTok, LinkedIn, and X (Twitter)." },
            { q: "Do you handle content creation?", a: "Yes, including high-end photography and video production." },
        ],
    },
    "video-editing": {
        title: "Video Editing",
        longDesc: "Video is the most powerful medium for storytelling. Our post-production team delivers cinematic quality that captures attention and delivers your message with precision.",
        icon: Video,
        process: [
            { name: "Conceptualization", desc: "Defining the narrative flow and emotional arc of the video." },
            { name: "Post-Production", desc: "Meticulous cutting, color grading, and visual effects." },
            { name: "Sound Engineering", desc: "Professional sound design and audio mastering for impact." },
            { name: "Export & Optimization", desc: "High-quality renders optimized for every platform." },
        ],
        tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
        faqs: [
            { q: "What is your turnaround time?", a: "Standard edits take 3-5 business days; complex projects take longer." },
            { q: "Can you edit raw 4K footage?", a: "Yes, we handle high-bitrate raw footage from cinema cameras." },
        ],
    },
};

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = serviceData[slug as string];

    if (!service) return <div className="pt-40 text-center font-bold">Service Not Found</div>;

    const Icon = service.icon;

    return (
        <div className="pt-32 pb-10">
            {/* Hero */}
            <section className="container-custom mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                        <Icon size={32} />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10 uppercase">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-3xl">
                        {service.longDesc}
                    </p>
                </motion.div>
            </section>

            {/* Process */}
            <section className="bg-black py-32 text-white mb-24">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-20 uppercase text-center">Our Specialized Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                        {service.process.map((p: any, index: number) => (
                            <div key={p.name} className="p-10 bg-black hover:bg-white/5 transition-colors">
                                <span className="block text-indigo-400 font-bold mb-6">Step {index + 1}</span>
                                <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase">{p.name}</h4>
                                <p className="text-white/50 font-medium leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section className="container-custom mb-32">
                <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20">
                    <h3 className="text-3xl font-black tracking-tighter mb-10 uppercase">Expertise & Tools</h3>
                    <div className="flex flex-wrap gap-4">
                        {service.tools.map((tool: string) => (
                            <span key={tool} className="bg-white border border-gray-100 px-8 py-3 rounded-full font-bold text-sm tracking-widest text-black/60 shadow-sm">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container-custom mb-32">
                <h2 className="text-4xl font-black tracking-tighter mb-16 uppercase">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {service.faqs.map((faq: any) => (
                        <div key={faq.q} className="border-l-4 border-indigo-600 pl-8">
                            <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">{faq.q}</h4>
                            <p className="text-black/50 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}
