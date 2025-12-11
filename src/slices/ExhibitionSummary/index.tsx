import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `ExhibitionSummary`.
 */
export type ExhibitionSummaryProps =
  SliceComponentProps<Content.ExhibitionSummarySlice>;

/**
 * Component for "ExhibitionSummary" Slices.
 */
const ExhibitionSummary = ({ slice }: ExhibitionSummaryProps) => {
  return (
    <div className="border-b-[1px] border-black mb-4 pb-4">
      <Link
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        href={`exhibitions/${(slice.primary.exhibition_detail as any).uid}`}
        style={{ textDecorationLine: "none" }}
      >
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex flex-col gap-8 hover:shadow-lg p-4 mb-8"
        >
          <div className="flex flex-col">
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

export default ExhibitionSummary;
