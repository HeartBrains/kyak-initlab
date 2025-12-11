import DetailHeader from "@/app/components/DetailHeader";
import SummaryTypeMenu from "@/app/components/SummaryTypeMenu";
import Loader from "@/app/components/Loader";
import { SINGLE_EXHIBITION_PAGE } from "@/app/constants";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { Suspense } from "react";
import ImageOrCarousel from "@/app/components/ImageOrCarousel";
import { Metadata } from "next";

export async function generateStaticParams() {
  const client = createClient();
  const allExhibitions = await client.getAllByType(SINGLE_EXHIBITION_PAGE);
  const pageData = [];

  for (const exhibition of allExhibitions) {
    const { alternate_languages: alternateLanguages } = exhibition;
    pageData.push({
      slug: [exhibition.uid],
    });

    for (const { lang } of alternateLanguages) {
      pageData.push({
        slug: [exhibition.uid, lang],
      });
    }
  }

  return pageData;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [id, lang] = slug;
  const finalLang = lang || "en-us";
  const client = createClient();

  const page = await client.getByUID(SINGLE_EXHIBITION_PAGE, id, {
    lang: finalLang,
  });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function ExhibitionDetailPage({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}) {
  const { slug } = await params;
  const [id, lang] = slug;
  const finalLang = lang || "en-us";
  const client = createClient();

  const page = await client.getByUID(SINGLE_EXHIBITION_PAGE, id, {
    lang: finalLang,
  });
  const {
    title,
    subtitle,
    date_and_time: dateString,
    slider_images: images,
    description,
  } = page.data;

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col gap-2 mb-2">
        <SummaryTypeMenu
          links={[
            { label: "Upcoming" as string, hrefValue: "upcoming" },
            { label: "Current" as string, hrefValue: "current" },
            { label: "Past" as string, hrefValue: "past" },
          ]}
        />
        {/* Going back & translating */}
        <DetailHeader />
      </div>

      <div className="overflow-y-auto h-full p-6 pb-[0px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <PrismicRichText field={title} />
            <PrismicRichText field={subtitle} />
            {dateString && <PrismicRichText field={dateString} />}
          </div>

          <div className="w-full">
            <ImageOrCarousel images={images} />
          </div>

          <div className="exhibition-body">
            <PrismicRichText field={description} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
