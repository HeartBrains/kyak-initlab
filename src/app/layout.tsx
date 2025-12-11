import type { Metadata } from "next";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import localFont from "next/font/local";

const customFont = localFont({
  src: [
    {
      path: "../../public/fonts/Forestype-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Forestype-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Forestype-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFont.className}`}>
        <main className={`h-svh`}>
          {/* <Header /> */}
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
