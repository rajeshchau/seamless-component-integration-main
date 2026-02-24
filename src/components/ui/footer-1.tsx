import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer1() {
    return (
        <footer className="w-full border-t bg-background py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-1 md:col-span-2">
                        <a href="/" className="text-2xl font-bold tracking-tighter uppercase">
                            ConvergeDigitals
                        </a>
                        <p className="mt-4 max-w-xs text-muted-foreground leading-relaxed">
                            Precision in Logic. Perfection in Design. We build world-class digital experiences for growth-focused brands.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/services/development" className="hover:text-primary transition-colors">Web Development</a></li>
                            <li><a href="/services/ecommerce" className="hover:text-primary transition-colors">E-commerce</a></li>
                            <li><a href="/services/marketing" className="hover:text-primary transition-colors">Growth Marketing</a></li>
                            <li><a href="/services/video" className="hover:text-primary transition-colors">Creative Video</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li>
                                <a href="/careers" className="hover:text-primary transition-colors flex items-center gap-2 group/career">
                                    Careers
                                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-500 opacity-0 group-hover/career:opacity-100 transition-opacity whitespace-nowrap">We're Hiring</span>
                                </a>
                            </li>
                            <li><a href="/portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                            <li><a href="/blog" className="hover:text-primary transition-colors">Insights</a></li>
                            <li>
                                <a href="/contact" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Contact
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <div className="flex flex-col gap-2">
                            <Input placeholder="Enter your email" className="bg-muted/50 border-none" />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© 2026 ConvergeDigitals Agency. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
