"use client";

import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import type { Language } from "@/types/languages";
import subItemsExample from "@/data/data";
type HeaderPopularTvSerieProps = {
    language: Language;
};

export const HeaderPopularTvSerie = ({ language }: HeaderPopularTvSerieProps) => {
    const data = subItemsExample;
    const isLoading = false;

    if (!data || isLoading)
        return <Skeleton className="aspect-[2/3] w-1/3 overflow-hidden rounded-md border shadow" />;

    const tvSerie = data[0];

    return (
        <Link
            className="relative aspect-[2/3] w-1/3 overflow-hidden rounded-md border shadow"
            href={`/${language}/tv-series/${tvSerie.id}`}
        >
            <Image src={tvSerie.poster_path} alt={tvSerie.title} fill />
        </Link>
    );
};
