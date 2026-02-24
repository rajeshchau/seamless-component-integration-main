import Link from "next/link";

const footerLinks = {
    services: [
        { name: "Website Development", href: "/services/website-development" },
        { name: "Ecommerce Development", href: "/services/ecommerce-development" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
        { name: "Video Editing", href: "/services/video-editing" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                    <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
                        Converge<span className="text-indigo-600">Digitals</span>
                    </Link>
                    <p className="text-black/60 text-sm leading-relaxed mb-6">
                        We build digital experiences that convert. Perfection with precision in every line of code.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
                    <ul className="space-y-4">
                        {footerLinks.services.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-sm text-black/60 hover:text-indigo-600 transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
                    <ul className="space-y-4">
                        {footerLinks.company.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-sm text-black/60 hover:text-indigo-600 transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
                    <p className="text-sm text-black/60 mb-6 font-medium">Get our latest digital growth tips.</p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm w-full outline-none focus:border-indigo-600 transition-colors"
                        />
                        <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-colors">
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="container-custom border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-black/40">
                    © {new Date().getFullYear()} ConvergeDigitals. All rights reserved.
                </p>
                <div className="flex gap-6">
                    {footerLinks.legal.map((link) => (
                        <Link key={link.name} href={link.href} className="text-sm text-black/40 hover:text-indigo-600 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
