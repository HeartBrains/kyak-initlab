import { EXHIBITIONS } from "@/app/constants";
import { createClient } from "@/prismicio";
import { Metadata } from "next";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle(EXHIBITIONS.kyaf);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default Layout;
