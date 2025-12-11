"use client";

import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { HeaderFive } from "./Typography";
import { usePathname } from "next/navigation";
import Link from "next/link";

const defaultLang = "en-us";
const thaiLang = "th";

const AboutHeader = () => {
  const pathname = usePathname();

  const urlParts = pathname.split("/");
  const entity = urlParts?.[1] as "bangkok-kunsthalle" | "kunsthalle-bangkok";

  if (urlParts.length < 4) {
    return <></>;
  }
  let lang = urlParts[urlParts.length - 1];
  if (lang !== thaiLang) {
    lang = defaultLang;
  }

  let translatedPath = pathname.replace(`/${thaiLang}`, "");
  if (lang === defaultLang) {
    translatedPath = `${translatedPath}/${thaiLang}`;
  }

  return (
    <div className="flex justify-between">
      <Link
        href={`/${entity}/about`}
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

export default AboutHeader;
