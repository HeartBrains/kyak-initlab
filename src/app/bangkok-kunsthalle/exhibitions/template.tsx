import { MAIN_BKKK_BG_COLOR } from "../../constants";
import DeleteCookie from "@/app/components/DeleteCookie";
import ThreeNav from "@/app/components/ThreeNav";
import { HeaderThree } from "@/app/components/Typography";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ backgroundColor: MAIN_BKKK_BG_COLOR }}>
      <div className={`p-[54px] pt-[12px] h-svh relative`}>
        <section className="max-w-screen-md m-auto h-full">
          <div className="mb-4">
            <div className="flex justify-center">
              <HeaderThree className="underline">Exhibitions</HeaderThree>
            </div>
          </div>

          <div style={{ height: "calc(100% - 120px)" }}>
            <div className="h-full">{children}</div>
          </div>
        </section>

        <section>
          <ThreeNav
            backLinkGoesBackHome
            bottomNav={{
              href: "/",
              title: "Bangkok Kunsthalle",
            }}
            rightNav={{
              href: "/bangkok-kunsthalle/activities",
              title: "Activities",
            }}
            leftNav={{
              href: "/bangkok-kunsthalle/about",
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
