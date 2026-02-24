"use client";

import React, { useState } from 'react';
import { AnimationObjects } from './animation-objects';

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Partner {
  logoUrl: string;
  href: string;
}

interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/febf2421-4a9a-42d6-871d-ff4f9518021c_1600w.png",
  backgroundImageUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg",
  navLinks = [
    { label: "Home", href: "#", isActive: true },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#our-work" },
    { label: "Agency", href: "#about" },
    { label: "Insight", href: "#" },
    { label: "Contact", href: "#contact" }
  ],
  ctaButtonText = "Hire Us",
  ctaButtonHref = "#contact",
  badgeLabel = "Elite",
  badgeText = "Leading Digital Agency of the Future 2025",
  title = "Precision Logic.",
  titleLine2 = "Premium Motion.",
  description = "We bridge the gap between abstract vision and technical reality. Every interaction is calculated, every pixel is purposeful. Delivering digital excellence that scales.",
  primaryButtonText = "View Our Work",
  primaryButtonHref = "#our-work",
  secondaryButtonText = "Our Story",
  secondaryButtonHref = "#about",
  partnersTitle = "Partnering with global industry leaders and innovators",
  partners = [
    { logoUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200&h=80", href: "#" },
    { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a9a71ec-268b-4689-a510-56f57e9d4f13_1600w.png", href: "#" },
    { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9ed4369-748a-49f8-9995-55d6c876bbff_1600w.png", href: "#" },
    { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d8966a4-8525-4e11-9d5d-2d7390b2c798_1600w.png", href: "#" },
    { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ed33c8b-b8b2-4176-967f-3d785fed07d8_1600w.png", href: "#" }
  ]
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative">
      <img
        src={backgroundImageUrl}
        alt=""
        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

      <div className="z-10 relative">
        <AnimationObjects />
        <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
              <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full py-0.5 px-2 font-sans">
                {badgeLabel}
              </span>
              <span className="text-sm font-medium text-white/90 font-sans">
                {badgeText}
              </span>
            </div>

            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight font-serif font-normal animate-fade-slide-in-2">
              {title}
              <br className="hidden sm:block" />
              {titleLine2}
            </h1>

            <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
              <a
                href={primaryButtonHref}
                className="inline-flex items-center gap-2 hover:bg-white/15 text-sm font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-full py-3 px-5 font-sans transition-colors"
              >
                {primaryButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/90 hover:text-white font-sans transition-colors"
              >
                {secondaryButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <p className="animate-fade-slide-in-1 text-sm text-white/70 text-center">
              {partnersTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 animate-fade-slide-in-2 text-white/70 mt-6 items-center justify-items-center gap-4">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.href}
                  className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-cover rounded-full opacity-80 hover:opacity-100 transition-opacity"
                  style={{ backgroundImage: `url(${partner.logoUrl})` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
