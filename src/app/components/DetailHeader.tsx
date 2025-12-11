"use client";

import { createClient } from "@/prismicio";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { HeaderFive } from "./Typography";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SINGLE_EXHIBITION_PAGE } from "../constants";
import { SINGLE_ACTIVITY_PAGE } from "../constants";

const defaultLang = "en-us";
const thaiLang = "th";

type Type = "upcoming" | "current" | "past";
const DetailHeader = () => {
  const pathname = usePathname();
  const client = createClient();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<Type | null>(null);

  const urlParts = pathname.split("/");
  const entity = urlParts?.[1] as "bangkok-kunsthalle" | "kunsthalle-bangkok";
  const entityType = urlParts?.[2] as "activities" | "exhibitions";
  const uid = urlParts?.[3] || "";

  useEffect(() => {
    const getExhibitionType = async () => {
      if (!uid) return;

      setLoading(true);
      const entityUid =
        entityType === "activities"
          ? SINGLE_ACTIVITY_PAGE
          : SINGLE_EXHIBITION_PAGE;
      const page = await client.getByUID(entityUid, uid);
      const type = page.data.type?.toLowerCase() || "current";

      setType(type as Type);
      setLoading(false);
    };

    getExhibitionType();
  }, [uid, entityType, client]);

  if (urlParts.length < 4) {
    return <></>;
  }
  let lang = urlParts[urlParts.length - 1];
  if (lang !== thaiLang) {
    lang = defaultLang;
  }

  let translatedPath = `/${entity}/${entityType}/${uid}`;
  if (lang === defaultLang) {
    translatedPath = `${translatedPath}/${thaiLang}`;
  }

  return (
    <div className="flex justify-between">
      <Link
        aria-disabled={loading}
        href={`/${entity}/${entityType}?type=${type}`}
        className="flex items-center gap-2 cursor-pointer hover:underline"
        onClick={() => {}}
      >
        <ArrowLeftIcon className="size-4" />
        <HeaderFive className="uppercase">Back</HeaderFive>
      </Link>

      <Link href={translatedPath} replace>
        <HeaderFive className="uppercase">
          {lang === defaultLang ? "ไทย" : "English"}
        </HeaderFive>
      </Link>
    </div>
  );
};

export default DetailHeader;
