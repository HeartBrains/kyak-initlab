import { HeaderFour } from "@/app/components/Typography";
import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `ActivitySummary`.
 */
export type ActivitySummaryProps =
  SliceComponentProps<Content.ActivitySummarySlice>;

/**
 * Component for "ActivitySummary" Slices.
 */
const ActivitySummary = ({ slice }: ActivitySummaryProps) => {
  return (
    <div className="border-b-[1px] border-black mb-4 pb-4">
      <Link
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        href={`activities/${(slice.primary.activity_detail as any).uid}`}
        style={{ textDecorationLine: "none" }}
      >
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex flex-col gap-8 hover:shadow-lg p-4"
        >
          <div className="flex flex-col">
            <HeaderFour className="lowercase">
              {slice.primary.event_types
                .map((event) => event.event_type)
                .join(" | ")}
            </HeaderFour>
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.subtitle} />
            <PrismicRichText field={slice.primary.date_and_time} />
          </div>

          {slice.primary.main_image.url && (
            <div>
              <PrismicImage
                field={slice.primary.main_image}
                className="max-h-96 w-full object-cover"
              />
            </div>
          )}
        </section>
      </Link>
    </div>
  );
};

export default ActivitySummary;
