"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimationObjects = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
            {/* Floating Glass Blob 1 */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    x: [0, 20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            />

            {/* Floating Glass Blob 2 */}
            <motion.div
                animate={{
                    y: [0, 50, 0],
                    x: [0, -30, 0],
                    rotate: [0, -15, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            />

            {/* Geometric Accent Line */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute top-[15%] left-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                className="absolute top-0 right-[25%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"
            />

            {/* Orbiting Particle */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -ml-32 -mt-32 w-64 h-64 border border-white/5 rounded-full"
            >
                <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-primary rounded-full blur-[2px]" />
            </motion.div>
        </div>
    );
};
