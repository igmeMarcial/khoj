"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Logo } from "@/app/components/logo";
// import { HeaderAccount } from "./header-account";
import { HeaderNavigationDrawer } from "./header-navigation-drawer";
import { HeaderNavigationMenu } from "./header-navigation-menu";
import HeaderLogin from "./header-login";
import HeaderLanguage from "./header-language";
import { HeaderAccount } from "./header-account";

export const Header = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    return (
        <>
            <header className="hidden justify-between lg:flex lg:h-[72px] relative">
                <div className="flex items-center gap-2 z-50">
                    <Logo />
                    {/* <HeaderNavigationMenu /> */}
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <div className="z-auto hidden -translate-y-1/2 top-1/2 lg:absolute lg:left-0 lg:right-0 lg:justify-center lg:items-center lg:flex">
                            <HeaderNavigationMenu />
                        </div>
                    </div>
                    <HeaderLanguage />
                    <div className="z-50">
                        {/* <HeaderLogin /> */}
                        <HeaderAccount />
                    </div>
                </div>
            </header>

            <header className="flex w-full items-center justify-between lg:hidden">
                <Logo />
                <div className="flex space-x-2">
                    <HeaderNavigationDrawer />
                </div>
            </header>
        </>
    );
};
