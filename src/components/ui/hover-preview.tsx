"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";
import { encode } from "qss";
import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

type HoverPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    renderInner?: React.ReactNode;
    isStatic?: boolean;
    imageSrc?: string;
};

export const HoverPreview = ({
    children,
    url,
    className,
    renderInner,
    isStatic = false,
    imageSrc,
}: HoverPreviewProps) => {
    let src = "";
    if (!isStatic) {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.width": 800,
            "viewport.height": 500,
            "viewport.deviceScaleFactor": 1,
        });
        src = `https://api.microlink.io/?${params}`;
    } else {
        src = imageSrc || "";
    }

    const [isOpen, setOpen] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const mouseX = useMotionValue(0);
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useSpring(mouseX, springConfig);

    const handleMouseMove = (event: any) => {
        const targetRect = event.currentTarget.getBoundingClientRect();
        const eventX = event.clientX;
        const offset = eventX - targetRect.left - targetRect.width / 2;
        mouseX.set(offset);
    };

    return (
        <>
            {isMounted ? (
                <HoverCardPrimitive.Root
                    openDelay={50}
                    closeDelay={100}
                    onOpenChange={(open) => {
                        setOpen(open);
                    }}
                >
                    <HoverCardPrimitive.Trigger
                        onMouseMove={handleMouseMove}
                        className={cn("text-inherit", className)}
                        href={url}
                    >
                        {children}
                    </HoverCardPrimitive.Trigger>

                    <HoverCardPrimitive.Content
                        className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
                        side="top"
                        align="center"
                        sideOffset={10}
                    >
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                    className="shadow-xl rounded-xl"
                                    style={{
                                        x: x,
                                    }}
                                >
                                    <a
                                        href={url}
                                        className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                                        style={{ fontSize: 0 }}
                                    >
                                        <Image
                                            src={isStatic ? imageSrc! : src}
                                            width={200}
                                            height={125}
                                            quality={100}
                                            priority={true}
                                            className="rounded-lg"
                                            alt="preview image"
                                        />
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </HoverCardPrimitive.Content>
                </HoverCardPrimitive.Root>
            ) : null}
        </>
    );
};
