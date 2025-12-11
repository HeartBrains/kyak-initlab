"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { HeaderFour } from "./Typography";

export default function SummaryTypeMenu({
  links,
}: {
  links: { label: string; hrefValue: string }[];
}) {
  const pathname = usePathname();
  const entity = pathname.split("/")[1];
  const entityType = pathname.split("/")[2];
  const searchParams = useSearchParams();
  const activeType = searchParams.get("type") || "";

  return (
    <div className="flex justify-between">
      {links.map((link, index) => {
        const isActive = link.hrefValue === activeType;
        const positionClassName =
          index === 0 ? "text-start" : index === 1 ? "text-center" : "text-end";
        return (
          <section key={link.hrefValue} className={`w-1/3`}>
            <HeaderFour className={`${positionClassName}`}>
              <Link
                href={`/${entity}/${entityType}?type=${link.hrefValue}`}
                className={`no-underline ${isActive ? "font-bold" : ""}`}
              >
                {link.label}
              </Link>
            </HeaderFour>
          </section>
        );
      })}
    </div>
  );
}
