"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen bg-background">
            {/* Hero Header */}
            <section className="container mx-auto px-6 py-32 border-b border-muted">
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4 uppercase"
                    >
                        Connect<span className="text-primary">.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground text-xl md:text-3xl max-w-2xl leading-tight"
                    >
                        Ready to transform your vision into a precision-engineered digital reality? Let's start the conversation.
                    </motion.p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Info Side */}
                    <div className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">Business Inquiries</h3>
                                <p className="text-2xl font-semibold">hello@convergedigitals.com</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">Voice Support</h3>
                                <p className="text-2xl font-semibold">+1 (555) 001-2026</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-12 rounded-3xl bg-neutral-950 text-white relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Innovation Lab</h3>
                                <p className="text-neutral-400 text-lg leading-relaxed">
                                    128 Digital Plaza, Suite 404<br />
                                    Silicon Valley, CA 94025<br />
                                    United States
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-700" />
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white border border-muted p-12 rounded-[2.5rem] shadow-2xl shadow-black/5"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-neutral-50 border border-muted rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-neutral-900" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <input type="email" placeholder="john@company.com" className="w-full bg-neutral-50 border border-muted rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-neutral-900" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Inquiry Type</label>
                                <select className="w-full bg-neutral-50 border border-muted rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-neutral-900 appearance-none">
                                    <option>Web Development</option>
                                    <option>Ecommerce Solution</option>
                                    <option>Social Marketing</option>
                                    <option>Brand Identity</option>
                                    <option>Other Enquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Details</label>
                                <textarea rows={6} placeholder="Tell us about your vision..." className="w-full bg-neutral-50 border border-muted rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-neutral-900 resize-none"></textarea>
                            </div>

                            <button className="w-full bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl px-8 py-5 transition-all duration-300 flex items-center justify-center gap-4 group">
                                Release Transmission
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
