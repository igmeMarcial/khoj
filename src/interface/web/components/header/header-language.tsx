import { useLanguage } from "@/context/language";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import type { Language } from "@/services/tmdb";
import { SUPPORTED_LANGUAGES } from "@/languages";

function HeaderLanguage() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const { language, dictionary } = useLanguage();

  const handleRedirectLanguageChange = (language: Language) => {
    const paramsArray = pathname.split("/");
    const newParamsArray = paramsArray.map((param, index) =>
      index === 1 ? language : param
    );

    const newPathname = newParamsArray.join("/");
    replace(newPathname);
  };
  const currentLanguageOption = SUPPORTED_LANGUAGES.find(
    (lang) => lang.value === language
  );
  return (
    <div className="flex items-center justify-between p-2 text-sm z-50">
      <span className="hidden">{dictionary.language}</span>
      <div>
        <Select
          onValueChange={(value) =>
            handleRedirectLanguageChange(value as Language)
          }
        >
          <SelectTrigger className="-mr-1 h-9 w-auto">
            <div>
              {currentLanguageOption && (
                <ReactCountryFlag
                  countryCode={currentLanguageOption.country}
                  svg
                  className="mr-2"
                />
              )}
              {currentLanguageOption?.label}
            </div>
          </SelectTrigger>
          <SelectContent>
            {SUPPORTED_LANGUAGES.map(({ value, country, label, enabled }) => (
              <SelectItem
                key={value}
                className={
                  value === language ? "space-x-2 bg-muted" : "space-x-2"
                }
                disabled={!enabled}
                value={value}
              >
                <ReactCountryFlag countryCode={country} svg className="mr-2" />

                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default HeaderLanguage;
