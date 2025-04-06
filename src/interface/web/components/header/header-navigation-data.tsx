import { Heart, Home, ShoppingCart, Users, DollarSign, type LucideIcon } from "lucide-react";

import type { Dictionary } from "@/utils/dictionaries";

type NavigationItem = {
    label: string;
    href: string;
    icon: LucideIcon;
    description?: string;
    items?: NavigationItem[];
};

type buildLanguageNavigation = (dictionary: Dictionary) => NavigationItem[];

export const buildLanguageNavigation: buildLanguageNavigation = (dictionary) => [
    {
        label: dictionary.navigation.agents,
        href: "/agents",
        icon: Users,
    },
    {
        label: dictionary.navigation.products,
        href: "/product",
        icon: ShoppingCart,
    },
    {
        label: dictionary.navigation.prices,
        href: "/pricing",
        icon: DollarSign,
    },
    {
        label: dictionary.navigation.supports,
        href: "/faq",
        icon: Home,
    },
];
