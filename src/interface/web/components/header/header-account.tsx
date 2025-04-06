"use client";

import { LogIn, LogOut, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/language";
import { HeaderNavigationDrawerConfigs } from "./header-navigation-drawer-configs";

import { useAuthenticatedData, UserConfig, UserProfile } from "@/app/common/auth";

type AvatarContentProps = {
    user: UserProfile | null;
};

const AvatarContent = ({ user }: AvatarContentProps) => {
    if (!user) {
        return (
            <AvatarFallback>
                <UserIcon className="size-4 text-muted-foreground" />
            </AvatarFallback>
        );
    }
    if (user.photo) {
        return <AvatarImage src={user.photo} alt={user.username} className="object-cover" />;
    }
    return <AvatarFallback>{user.username?.at(0)}</AvatarFallback>;
};

export const HeaderAccount = () => {
    const { language, dictionary } = useLanguage();
    const {
        data: user,
        error: authenticationError,
        isLoading: authenticationLoading,
    } = useAuthenticatedData();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="size-8 cursor-pointer border">
                    <AvatarContent user={user ?? null} />
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-72">
                {user && (
                    <>
                        <Link
                            href={`/${language}/${user.username}`}
                            className="flex items-center gap-2 p-1 text-sm"
                        >
                            <Avatar className="size-8 cursor-pointer">
                                <AvatarContent user={user} />
                            </Avatar>
                            {user.username}
                        </Link>

                        <DropdownMenuSeparator />
                    </>
                )}

                <HeaderNavigationDrawerConfigs />
                <DropdownMenuSeparator />

                {user ? (
                    <DropdownMenuItem onClick={() => {}} asChild>
                        <Link href="/auth/logout" className="no-underline w-full">
                            <div className="flex flex-rows">
                                <LogOut className="mr-1 size-3" />
                                <p className="ml-3 font-semibold"> {dictionary.logout}</p>
                            </div>
                        </Link>
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem asChild>
                        <Link href={`/${language}/sign-in`}>
                            <LogIn className="mr-1 size-3" />
                            {dictionary.login}
                        </Link>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
