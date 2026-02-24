"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Global Expansion: Established innovation hubs in London and Singapore, serving over 50+ enterprise clients.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80"
                            alt="Office Expansion"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80"
                            alt="Team Collaboration"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Pivoted to High-End Motion: Integrated GSAP and WebGL as core competencies, winning "Agency of the Year" for Creative Logic.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
                            alt="Award Winning Design"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80"
                            alt="Tech Innovation"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        The Genesis: ConvergeDigitals was born from a desire to combine pixel-perfect design with robust system logic.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ First Major Enterprise Client
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Launched Core Design Framework
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Built Proprietary Animation Engine
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80"
                            alt="Early Studio"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
