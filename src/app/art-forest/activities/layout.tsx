import LinkBackHome from "@/app/components/LinkBackHome";
import { MAIN_KYAF_BG_COLOR } from "../../constants";
import ThreeNav from "@/app/components/ThreeNav";
import { HeaderThree } from "@/app/components/Typography";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className={`main-page p-[54px] pt-[12px] h-svh`}
        style={{ backgroundColor: MAIN_KYAF_BG_COLOR }}
      >
        <section className="max-w-screen-md m-auto h-full">
          <div className="mb-4">
            <div className="flex justify-center">
              <LinkBackHome>
                <HeaderThree>Khao Yai Art Forest</HeaderThree>
              </LinkBackHome>
            </div>
          </div>

          <div style={{ height: "calc(100% - 120px)" }}>
            <div className="h-full">{children}</div>
          </div>
        </section>

        <ThreeNav
          withTickets
          bottomNav={{
            href: "/art-forest/activities",
            title: "Activities",
          }}
          rightNav={{
            href: "/art-forest/exhibitions",
            title: "Exhibitions",
          }}
          leftNav={{
            href: "/art-forest/about",
            title: "About",
          }}
        />
      </div>
    </>
  );
}
