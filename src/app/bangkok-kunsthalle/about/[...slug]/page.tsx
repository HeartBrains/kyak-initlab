import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { AboutUsSlice, ContactFormSlice } from "../../../../../prismicio-types";
import { VisitSlice } from "../../../../../prismicio-types";
import { TeamSlice } from "../../../../../prismicio-types";
import AboutHeader from "@/app/components/AboutHeader";
import { ABOUT, MAIN_BKKK_BG_COLOR } from "@/app/constants";

export async function generateStaticParams() {
  const client = createClient();
  const page = await client.getSingle(ABOUT.kunsthalle);
  const { slices } = page.data;
  const pageData = [];
  if (!slices) return [];

  const pageAlternateLangauges = page.alternate_languages;
  for (const slice of slices) {
    pageData.push({
      slug: [slice.slice_type],
    });

    for (const { lang } of pageAlternateLangauges) {
      pageData.push({
        slug: [slice.slice_type, lang],
      });
    }
  }

  return pageData;
}

const AboutUsPage = async ({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}) => {
  const { slug } = await params;
  const [id, lang] = slug;
  const finalLang = lang || "en-us";
  const client = createClient();
  const page = await client.getSingle(ABOUT.kunsthalle, {
    lang: finalLang,
  });

  const slice = page.data.slices.find(
    (slice) => slice.slice_type === id.replace("-", "_")
  ) as AboutUsSlice | ContactFormSlice | VisitSlice | TeamSlice;

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden">
      <section
        className="mb-6 sticky top-0 left-0 z-10"
        style={{ backgroundColor: MAIN_BKKK_BG_COLOR }}
      >
        <AboutHeader />
      </section>

      <SliceZone slices={[slice]} components={components} />
    </div>
  );
};

export default AboutUsPage;
