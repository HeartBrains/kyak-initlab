import { HeaderFour } from "@/app/components/Typography";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Visit`.
 */
export type VisitProps = SliceComponentProps<Content.VisitSlice>;

/**
 * Component for "Visit" Slices.
 */
const Visit = ({ slice }: VisitProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        <HeaderFour>{slice.primary.title}</HeaderFour>
        <PrismicRichText field={slice.primary.address_and_opening_hours} />
        <iframe
          src={slice.primary.google_maps_embed_src.text}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Visit;
