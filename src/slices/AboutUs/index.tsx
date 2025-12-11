import { HeaderFour } from "@/app/components/Typography";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutUs`.
 */
export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

/**
 * Component for "AboutUs" Slices.
 */
const AboutUs = ({ slice }: AboutUsProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        <HeaderFour>{slice.primary.title}</HeaderFour>
        <PrismicRichText field={slice.primary.description} />
      </div>
    </section>
  );
};

export default AboutUs;
