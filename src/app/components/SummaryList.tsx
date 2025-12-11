"use client";
import { SliceZone } from "@prismicio/react";
import { SliceZone as SliceZoneType } from "@prismicio/client";
import {
  ActivitySummarySlice,
  ExhibitionSummarySlice,
} from "../../../prismicio-types";
import { useSearchParams } from "next/navigation";
import { Title } from "./Typography";

import { components } from "@/slices";
import { DEFAULT_EXHIBITION_TYPE } from "../constants";

export default function SummaryList({
  slices,
  noItemsText,
}: {
  slices:
    | SliceZoneType<ExhibitionSummarySlice>
    | SliceZoneType<ActivitySummarySlice>;
  noItemsText: string;
}) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || DEFAULT_EXHIBITION_TYPE;

  const activeSlices = slices.filter(
    (slice) => slice.primary.type?.toLowerCase() === type
  );

  if (activeSlices.length === 0) {
    return (
      <div className="flex justify-center p-4 lg:p-24 ">
        <Title>{noItemsText}</Title>
      </div>
    );
  }

  return (
    <section className="p-2">
      <SliceZone slices={activeSlices} components={components} />
    </section>
  );
}
