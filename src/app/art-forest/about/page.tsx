import { createClient } from "@/prismicio";
import { HeaderThree } from "@/app/components/Typography";
import Link from "next/link";
import { ABOUT } from "@/app/constants";

const SliceTypeToUrl = {
  about_us: "/about-us",
  contact_form: "/contact-form",
  visit: "/visit",
  team: "/team",
};

const AboutPage = async () => {
  const client = createClient();
  const page = await client.getSingle(ABOUT.kyaf);
  const { slices } = page.data;

  return (
    <div>
      {slices.map((slice) => (
        <div key={slice.id} className="border-b-[1px] border-black py-4">
          <Link
            href={`/art-forest/about/${SliceTypeToUrl[slice.slice_type]}`}
            className="no-underline"
          >
            <HeaderThree className="font-normal">
              {slice.primary.title}
            </HeaderThree>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
