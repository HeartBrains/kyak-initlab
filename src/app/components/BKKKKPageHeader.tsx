import { createClient } from "@/prismicio";
import { ActivityNameType, AboutNameType } from "../constants";
import { HeaderThree } from "./Typography";

export default async function BKKKKPageHeader({
  defaultTitle,
  pageUid,
}: {
  defaultTitle?: string;
  pageUid?: ActivityNameType | AboutNameType;
}) {
  let title = defaultTitle;
  if (!title && pageUid) {
    const client = createClient();
    const page = await client.getSingle(pageUid);
    title = page.data.title as string;
  }

  return (
    <div className="flex justify-center">
      <HeaderThree className="underline">{title}</HeaderThree>
    </div>
  );
}
