"use client";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import type { Language } from "@/types/languages";
import subItemsExample from "@/data/data";
type HeaderPopularMovieProps = {
    language: Language;
};
export const HeaderPopularImage = ({ language }: HeaderPopularMovieProps) => {
    const data = subItemsExample;
    const isLoading = false;

    if (!data || isLoading)
        return <Skeleton className="aspect-[2/3] w-1/3 overflow-hidden rounded-md border shadow" />;
    const item = data[0];
    return (
        <Link
            className="relative aspect-[2/3] w-1/3 overflow-hidden rounded-md border shadow"
            href={`/${language}/movies/${item.id}`}
        >
            <Image src={item.poster_path} alt={item.title} fill />
        </Link>
    );
};
