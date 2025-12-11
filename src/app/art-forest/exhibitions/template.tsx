import DeleteCookie from "@/app/components/DeleteCookie";
import { MAIN_KYAF_BG_COLOR } from "../../constants";
import ThreeNav from "@/app/components/ThreeNav";
import { HeaderThree } from "@/app/components/Typography";
import LinkBackHome from "@/app/components/LinkBackHome";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ backgroundColor: MAIN_KYAF_BG_COLOR }}>
      <div
        className={`p-[54px] pt-[12px] relative h-svh`}
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

        <section>
          <ThreeNav
            withTickets
            bottomNav={{
              href: "/art-forest/exhibitions",
              title: "Exhibitions",
            }}
            rightNav={{
              href: "/art-forest/activities",
              title: "Activities",
            }}
            leftNav={{
              href: "/art-forest/about",
              title: "About",
            }}
          />
        </section>
      </div>

      <DeleteCookie />
    </div>
  );
};

export default Template;
