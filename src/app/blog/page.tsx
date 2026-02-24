"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";

const blogPosts = [
    {
        slug: "modern-ecommerce-architecture",
        title: "Why Headless Commerce is the Future of Ecommerce",
        excerpt: "Discover how headless architecture can significantly improve your store's performance and conversion rates.",
        date: "Feb 24, 2026",
        author: "Alex Rivera",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    },
    {
        slug: "optimizing-nextjs-performance",
        title: "Mastering Performance in Next.js 15+",
        excerpt: "A deep dive into server components, edge runtime, and advanced caching strategies for lightning-fast apps.",
        date: "Feb 20, 2026",
        author: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
    {
        slug: "the-art-of-precision-code",
        title: "The Senior Developer's Guide to Clean Architecture",
        excerpt: "How to write maintainable, scalable, and testable code that stands the test of time.",
        date: "Feb 15, 2026",
        author: "James Wilson",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    },
];

export default function BlogPage() {
    return (
        <div className="pt-32 pb-20">
            <section className="container-custom mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-6 block">Our Insights</span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
                        Thoughts on <br />
                        <span className="text-indigo-600">Precision.</span>
                    </h1>
                    <p className="text-xl text-black/60 font-medium">
                        Expert insights on development, design, and digital growth from our senior team.
                    </p>
                </motion.div>
            </section>

            <section className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <Link href={`/blog/${post.slug}`}>
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-video mb-6">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-black/40">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-black/40">
                                    <User size={12} />
                                    {post.author}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black tracking-tight group-hover:text-indigo-600 transition-colors uppercase leading-[1.1] mb-4">
                                {post.title}
                            </h3>
                            <p className="text-black/50 text-sm font-medium leading-relaxed line-clamp-2">
                                {post.excerpt}
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-indigo-600 transition-colors">
                                Read More
                                <ArrowUpRight size={14} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
