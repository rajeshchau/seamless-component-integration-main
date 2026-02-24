"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const INTERACTIVE_LINKS = [
  {
    heading: "Services",
    subheading: "Discover what we offer",
    imgSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    href: "/services",
  },
  {
    heading: "Team",
    subheading: "Meet the amazing people behind it",
    imgSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    href: "/about",
  },
  {
    heading: "Projects",
    subheading: "Explore our recent work",
    imgSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    href: "/portfolio",
  },
  {
    heading: "Careers",
    subheading: "Join our growing team",
    imgSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    href: "#",
  },
  {
    heading: "Playground",
    subheading: "Fun experiments and side projects",
    imgSrc:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    href: "/playground",
  },
];

interface InteractiveHoverLinksProps {
  links?: typeof INTERACTIVE_LINKS;
}

export function InteractiveHoverLinks({ links = INTERACTIVE_LINKS }: InteractiveHoverLinksProps) {
  return (
    <section className="bg-background py-32 px-4 md:px-0 w-full overflow-hidden">
      <div className="w-full">
        {links.map((link) => (
          <LinkItem key={link.heading} {...link} />
        ))}
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

function LinkItem({ heading, imgSrc, subheading, href }: LinkProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "40%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-muted py-12 px-8 md:px-20 transition-all duration-700 hover:bg-neutral-50/50"
    >
      <div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:gap-12">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: 20 },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
          className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter text-black/5 group-hover:text-black transition-colors duration-700 uppercase"
        >
          {heading}
        </motion.span>
        <span className="text-xl md:text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-500 font-medium">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-10%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg", opacity: 0 },
          whileHover: { scale: 1, rotate: "12.5deg", opacity: 1 },
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5
        }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover shadow-2xl md:h-64 md:w-96 grayscale group-hover:grayscale-0 transition-all duration-300 pointer-events-none"
        alt={`Image representing ${heading}`}
      />

      <div className="overflow-hidden">
        <motion.div
          variants={{
            initial: { x: "100%", opacity: 0 },
            whileHover: { x: "0%", opacity: 1 },
          }}
          transition={{ type: "spring" }}
          className="relative z-10"
        >
          <ArrowRight className="size-12 text-primary md:size-20" />
        </motion.div>
      </div>
    </motion.a>
  );
}
