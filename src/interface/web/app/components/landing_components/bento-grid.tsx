import type { Language } from "@/types/languages";
import { getDictionary } from "@/utils/dictionaries";
import { AnimatedListDemo } from "./animated-list-demo";
import { BentoGridIphone } from "./bent-grid-iphone";
import { AnimatedBeamWhasapp } from "./animated-beam-whasapp";
import { SplineScene } from "@/components/robot-animation/splite";
import { BlurFade } from "@/components/magicui/blur-fade";

type BentoGridProps = {
  language: Language;
};

const BLUR_FADE_DELAY = 0.04;

export const BentoGrid = async ({ language }: BentoGridProps) => {
  const dictionary = await getDictionary(language);

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <section className="py-16 px-4 xl:px-0 " id="features">
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 max-w-6xl mx-auto gap-4 aspect-auto lg:aspect-video">
          <div className="aspect-poster lg:aspect-auto col-span-1 row-span-2 border rounded-md overflow-hidden space-y-8 p-6">
            <div className="">
              <div className="space-y-2">
                <h5 className="text-lg font-semibold">
                  {dictionary.elegant_control}
                </h5>

                <p className="text-muted-foreground">
                  {dictionary.elegant_control_description}
                </p>
              </div>
            </div>

            <BentoGridIphone />
          </div>

          <div className="row-span-1 col-span-1 border rounded-md p-6 space-y-4">
            <div className="space-y-2">
              <h5 className="text-lg font-semibold">
                {dictionary.recommendations}
              </h5>

              <p className="text-muted-foreground">
                {dictionary.recommendations_description}
              </p>
            </div>

            <div className="">
              <AnimatedBeamWhasapp />
            </div>
          </div>

          <div className="row-span-2 col-span-1 border rounded-md overflow-hidden p-6 space-y-1 relative aspect-poster lg:aspect-auto">
            <div className="space-y-2">
              <h5 className="text-lg font-semibold">
                {dictionary.create_and_share_lists}
              </h5>

              <p className="text-muted-foreground">
                {dictionary.create_and_share_lists_description}
              </p>
            </div>

            <div className="relative h-full ">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-auto h-full"
              />
            </div>
          </div>

          <div className="aspect-square lg:aspect-auto row-span-1 col-span-1 border rounded-md overflow-hidden flex flex-col">
            <div className="space-y-4 p-6">
              <div className="space-y-2">
                <h5 className="text-lg font-semibold">{dictionary.reviews}</h5>

                <p className="text-muted-foreground">
                  {dictionary.reviews_description}
                </p>
              </div>
            </div>

            <div className="flex-1">
              <AnimatedListDemo />
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
};
