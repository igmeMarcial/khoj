import type { Language } from "@/types/languages";
import type { Dictionary } from "@/utils/dictionaries";
import Link from "next/link";
import { Logo } from "@/app/components/logo";

type FooterProps = { language: Language; dictionary: Dictionary };

export const Footer = ({ language, dictionary }: FooterProps) => {
  return (
    <div className="w-full border-t">
      <div className="max-w-6xl mx-auto py-4">
        <div className="flex justify-between px-4 gap-4 xl:px-0 md:flex-row flex-col">
          <div className="flex items-center gap-2">
            <Logo size={40} />

            <p className="text-xs text-muted-foreground">Copyright © 2025</p>

            <div className="h-3 border-r" />

            <span className="text-xs text-muted-foreground">
              {dictionary.data_provided_by}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href={`/${language}/privacy-policy`}
              className="hover:text-foreground"
            >
              {dictionary.documentation}
            </Link>

            <Link
              href="https://wa.me/964350071"
              className="hover:text-foreground"
            >
              WhastApp
            </Link>
            <Link
              href="mailto:igmemarcial@gmail.com"
              className="hover:text-foreground"
            >
              Correo
            </Link>

            <Link
              href="https://x.com/IgmeMarcial"
              className="hover:text-foreground"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
