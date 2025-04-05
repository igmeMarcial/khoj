import { LanguageContextProvider } from "@/context/language";
import type { Language } from "@/types/languages";
import { getDictionary } from "@/utils/dictionaries";
import { Toaster } from "@/components/ui/sonner";
import { AppWrapper } from "@/context/app";
// import { ListsContextProvider } from "@/context/lists";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { SUPPORTED_LANGUAGES } from "@/languages";

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang: lang.value }));
}

export const dynamic = "force-dynamic";

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: Language }>;
};

export default async function RootLayout({
  params,
  children,
}: RootLayoutProps) {
  const { lang } = await params;
  console.log((await params).lang)
  const dictionary = await getDictionary(lang);
  console.log(dictionary)
  console.log('====')
  console.log(lang)
  return (
    <AppWrapper>
      <LanguageContextProvider language={lang} dictionary={dictionary}>
        {/* <ListsContextProvider> */}
          <div className="flex flex-col ">
            <div className="mx-auto w-full max-w-[1280px]  bg-transparent px-4 py-2 lg:py-0 relative">
              <Header />
              <hr
                className="absolute bottom-0 w-full h-px -translate-x-1/2 border-0 opacity-10 left-1/2"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.07%, rgba(255, 255, 255, 0.00) 100%)",
                }}
              />
            </div>

            <main className="w-full">{children}</main>
            <Footer dictionary={dictionary} language={lang} />
          </div>
        {/* </ListsContextProvider> */}
        <Toaster />
      </LanguageContextProvider>
    </AppWrapper>
  );
}
