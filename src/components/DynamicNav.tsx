"use client";

import { usePathname } from "next/navigation";
import { SterlingGateKineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";

export function DynamicNav() {
    const pathname = usePathname();

    // Hide the global kinetic navigation on the homepage as requested, 
    // since the ResponsiveHeroBanner has its own integrated navigation.
    // Consolidating to a single global header for award-winning consistency
    return <SterlingGateKineticNavigation />;
}
