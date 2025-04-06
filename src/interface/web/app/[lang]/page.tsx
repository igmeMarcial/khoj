import type { Metadata } from "next";
import type { PageProps } from "@/types/languages";
import { getDictionary } from "@/utils/dictionaries";
import { APP_URL } from "../../constants";
import { Pricing } from "@/components/pricing";
import { SUPPORTED_LANGUAGES } from "@/languages";
import { BentoGrid } from "@/app/components/landing_components/bento-grid";
import { Hero } from "@/app/components/landing_components/hero";
import { Pattern } from "@/components/pattern";
export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;

    const { lang } = params;
    const dictionary = await getDictionary(lang);

    const image = `${APP_URL}/images/lp/home.png`;
    const canonicalUrl = `${APP_URL}/${lang}`;

    const languageAlternates = SUPPORTED_LANGUAGES.reduce(
        (acc, lang) => {
            if (lang.enabled) {
                acc[lang.hreflang] = `${APP_URL}/${lang.value}`;
            }
            return acc;
        },
        {} as Record<string, string>,
    );

    const title = `${dictionary.organize} ${dictionary.movies_and_series} ${dictionary.never_been_easier}`;

    const description = `${dictionary.most_apps_functional}`;

    return {
        title,
        description,
        keywords: dictionary.home.keywords,
        openGraph: {
            title: `Igme • ${title}`,
            description,
            siteName: "igme",
            url: APP_URL,
            images: [
                {
                    url: image,
                    width: 1280,
                    height: 720,
                    alt: title,
                },
            ],
        },
        twitter: {
            title,
            description,
            card: "summary_large_image",
        },
        alternates: {
            canonical: canonicalUrl,
            languages: languageAlternates,
        },
    };
}

export default async function Home(props: PageProps) {
    const params = await props.params;
    const { lang } = params;
    return (
        <>
            <Pattern variant="checkered" />
            <div className="">
                <Hero />
                {/* <TopMovies language={lang} /> */}
                <BentoGrid language={lang} />
                <Pricing />
            </div>
        </>
    );
}
