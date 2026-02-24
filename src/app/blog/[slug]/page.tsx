"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";

const blogContent: Record<string, any> = {
    "modern-ecommerce-architecture": {
        title: "Why Headless Commerce is the Future of Ecommerce",
        date: "Feb 24, 2026",
        author: "Alex Rivera",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
        content: `
      Ecommerce is undergoing a massive shift. The traditional all-in-one platforms that dominated the last decade are being replaced by modular, headless architectures that prioritize speed and flexibility.
      
      At ConvergeDigitals, we've seen firsthand how separating the frontend experience from the backend commerce engine can transform a business. Not only does it allow for near-instant page loads, but it also gives brands total control over their user experience.
      
      In this article, we explore the core benefits of headless commerce and why your brand should consider making the switch today.
    `,
    },
};

export default function BlogPostPage() {
    const { slug } = useParams();
    const post = blogContent[slug as string] || blogContent["modern-ecommerce-architecture"]; // Fallback for demo

    return (
        <div className="pt-32 pb-10">
            <section className="container-custom mb-12">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black/40 hover:text-indigo-600 transition-colors mb-12">
                    <ArrowLeft size={16} />
                    Back to Blog
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex gap-6 mb-8 flex-wrap">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
                            <Calendar size={14} />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40">
                            <User size={14} />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40">
                            <Clock size={14} />
                            {post.readTime}
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1] mb-12 uppercase">{post.title}</h1>
                </motion.div>
            </section>

            <section className="container-custom mb-20">
                <div className="aspect-[21/9] rounded-[3rem] overflow-hidden bg-gray-100 mb-20 shadow-xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-xl prose-indigo">
                        <p className="text-2xl font-medium leading-relaxed text-black/80 mb-8">
                            {post.content.split('\n\n')[0]}
                        </p>
                        <p className="text-lg leading-relaxed text-black/60 mb-8">
                            {post.content.split('\n\n')[1]}
                        </p>
                        <p className="text-lg leading-relaxed text-black/60 mb-8">
                            {post.content.split('\n\n')[2]}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-custom">
                <hr className="border-gray-100 mb-20" />
            </div>

            <FinalCTA />
        </div>
    );
}
