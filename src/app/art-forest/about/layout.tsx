import ThreeNav from "@/app/components/ThreeNav";
import { MAIN_KYAF_BG_COLOR } from "@/app/constants";
import LinkBackHome from "@/app/components/LinkBackHome";
import { HeaderThree } from "@/app/components/Typography";

const Layout = async ({ children }: { children: React.ReactNode }) => {
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

          <div style={{ height: "calc(100% - 54px)" }}>{children}</div>
        </section>

        <ThreeNav
          withTickets
          bottomNav={{
            href: "/art-forest/about",
            title: "About",
          }}
          leftNav={{
            href: "/art-forest/activities",
            title: "Activities",
          }}
          rightNav={{
            href: "/art-forest/exhibitions",
            title: "Exhibitions",
          }}
        />
      </div>
    </>
  );
};

export default Layout;
