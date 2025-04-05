import React from "react";
import type { PageProps } from "@/types/languages";
import { getDictionary } from "@/utils/dictionaries";

async function Page(props: PageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <div className="min-h-screen bg-white dark:bg-transparent py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {dictionary.term.terms_and_conditions}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {dictionary.term.last_updated}
          </p>
        </div>

        <div className="space-y-8 text-gray-800 dark:text-gray-200">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dictionary.term.introduction}
            </h2>
            <p className="leading-relaxed">
              {dictionary.term.introduction_text}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dictionary.term.user_responsibilities}
            </h2>
            <p className="leading-relaxed">
              {dictionary.term.user_responsibilities_text}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{dictionary.term.user_responsibilities_1}</li>
              <li>{dictionary.term.user_responsibilities_2}</li>
              <li>{dictionary.term.user_responsibilities_3}</li>
              <li>{dictionary.term.user_responsibilities_4}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dictionary.term.privacy_policy}
            </h2>
            <p className="leading-relaxed">
              {dictionary.term.privacy_policy_text}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dictionary.term.intellectual_property}
            </h2>
            <p className="leading-relaxed">
              {dictionary.term.intellectual_property_text}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dictionary.term.plans_and_payments}
            </h2>
            <p className="leading-relaxed">
              {dictionary.term.plans_and_payments_text}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{dictionary.term.plan_basic}</li>
              <li>{dictionary.term.plan_pro}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dictionary.term.liability_limitation}
            </h2>
            <p className="leading-relaxed">
              {dictionary.term.liability_limitation_text}
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {dictionary.term.modifications}
            </h2>
            <p className="leading-relaxed">
              {dictionary.term.modifications_text}
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8  ">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {dictionary.term.contact_info}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
