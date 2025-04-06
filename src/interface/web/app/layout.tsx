import "./globals.css";

import { GTag } from "@/components/gtag";
// import { SessionContextProvider } from "@/context/session";
import type { Language } from "@/types/languages";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
// import { verifySession } from "./lib/dal";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const spaceGrotesk = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "Igme • %s",
        default: "Igme",
    },
};

export const viewport: Viewport = {
    colorScheme: "dark",
    themeColor: "#09090b",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default async function RootLayout(props: {
    children: React.ReactNode;
    params: Promise<{ lang: Language }>;
}) {
    const params = await props.params;
    const { children } = props;

    // const session = await verifySession();

    return (
        <html lang={params.lang} className={spaceGrotesk.className} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" type="image" />
                <link rel="apple-touch-icon" href="/apple-icon.png" type="image" sizes="any" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                if (localStorage.getItem('theme') === 'dark' ||
                                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                }
                            } catch (e) {}
                        `,
                    }}
                />
                <GTag />
            </head>

            <body className="bg-[#060606] antialiased">
                {/* <SessionContextProvider initialSession={session}> */}
                <NuqsAdapter>{children}</NuqsAdapter>
                {/* </SessionContextProvider> */}
            </body>
        </html>
    );
}
