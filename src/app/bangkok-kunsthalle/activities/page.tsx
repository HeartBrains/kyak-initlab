import { Metadata } from "next";

import { createClient } from "@/prismicio";

import { ACTIVITIES } from "../../constants";
import SummaryList from "@/app/components/SummaryList";
import Loader from "@/app/components/Loader";
import { Suspense } from "react";
import SummaryTypeMenu from "@/app/components/SummaryTypeMenu";

export default async function KunsthalleActivitiesPage() {
  const client = createClient();
  const page = await client.getSingle(ACTIVITIES.kunsthalle);

  const { no_activities_title, slices } = page.data;

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
          noItemsText={no_activities_title as string}
        />
      </section>
    </Suspense>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle(ACTIVITIES.kunsthalle);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
