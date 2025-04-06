"use client";

import { useLanguage } from "@/context/language";
// import { useSession } from "@/context/session";
import Image from "next/image";
import Link from "next/link";

type LogoProps = { size?: number };
export const Logo = ({ size = 64 }: LogoProps) => {
    const { language } = useLanguage();
    // const { user } = useSession();

    return (
        <Link
            // href={user ? `/${language}/home` : `/${language}/`}
            href={`/${language}/`}
            className="text-foreground"
        >
            <Image
                src="/assets/images/loguito-white.png"
                alt="Logo"
                width={size}
                height={size}
                className="dark:hidden"
                unoptimized
            />

            <Image
                src="/assets/images/loguito-black.svg"
                alt="Logo"
                width={size}
                height={size}
                className="hidden dark:block"
                unoptimized
            />
        </Link>
    );
};
