import { createClient } from "@/prismicio";

import { EXHIBITIONS } from "../../constants";
import SummaryList from "@/app/components/SummaryList";
import Loader from "@/app/components/Loader";
import { Suspense } from "react";
import SummaryTypeMenu from "@/app/components/SummaryTypeMenu";

export default async function KYAFExhibitionsPage() {
  const client = createClient();
  const page = await client.getSingle(EXHIBITIONS.kyaf);

  const { no_exhibitions_title, slices } = page.data;

  return (
    <Suspense fallback={<Loader />}>
      {/* Changing type */}
      <SummaryTypeMenu
        links={[
          { label: "Upcoming" as string, hrefValue: "upcoming" },
          { label: "Current" as string, hrefValue: "current" },
          { label: "Past" as string, hrefValue: "past" },
        ]}
      />
      <section className="overflow-y-auto h-full mt-4">
        <SummaryList
          slices={slices}
          noItemsText={no_exhibitions_title as string}
        />
      </section>
    </Suspense>
  );
}
