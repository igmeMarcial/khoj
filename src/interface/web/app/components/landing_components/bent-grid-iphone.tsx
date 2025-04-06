"use client";

import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { useTheme } from "next-themes";

export function BentoGridIphone() {
    const { resolvedTheme } = useTheme();

    return (
        <Iphone15Pro
            className="w-full h-auto "
            src={
                resolvedTheme === "light"
                    ? "/assets/images/lp/watched-light.png"
                    : "/assets/images/lp/chat.png"
            }
        />
    );
}
