"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
    return (
        <div className="bg-white">
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                subheading="Technical Excellence"
                heading="High-Performance Systems."
            >
                <ExampleContent
                    title="Logic-Driven Development"
                    description="We build robust architectures that scale. Every line of code is optimized for speed, security, and long-term maintainability."
                />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2564&auto=format&fit=crop"
                subheading="Creative Logic"
                heading="Motion with Meaning."
            >
                <ExampleContent
                    title="Immersive Storytelling"
                    description="We combine advanced GSAP animations with WebGL to create digital experiences that don't just work—they feel alive."
                />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2416&auto=format&fit=crop"
                subheading="Strategic Growth"
                heading="Data-Back Engagement."
            >
                <ExampleContent
                    title="Scale Without Compromise"
                    description="Our solutions are designed to convert. We use precision analytics and conversion-focused design to drive measurable business results."
                />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
    imgUrl: string;
    subheading: string;
    heading: string;
    children: React.ReactNode;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = ({ title, description }: { title: string; description: string }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            {title}
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                {description}
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                We bridge the gap between abstract vision and technical reality. Every interaction is calculated, every pixel is purposeful.
            </p>
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit flex items-center justify-center gap-2">
                View Case Study <FiArrowUpRight />
            </button>
        </div>
    </div>
);
