import ThreeNav from "@/app/components/ThreeNav";
import { ABOUT, MAIN_BKKK_BG_COLOR } from "@/app/constants";
import BKKKKPageHeader from "@/app/components/BKKKKPageHeader";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className={`p-[54px] pt-[12px] h-svh`}
        style={{ backgroundColor: MAIN_BKKK_BG_COLOR }}
      >
        <section className="max-w-screen-md m-auto h-full">
          <div className="mb-4">
            <BKKKKPageHeader pageUid={ABOUT.kunsthalle} />
          </div>

          <div style={{ height: "calc(100% - 54px)" }}>{children}</div>
        </section>

        <ThreeNav
          backLinkGoesBackHome
          bottomNav={{
            href: "/",
            title: "Bangkok Kunsthalle",
          }}
          leftNav={{
            href: "/bangkok-kunsthalle/activities",
            title: "Activities",
          }}
          rightNav={{
            href: "/bangkok-kunsthalle/exhibitions",
            title: "Exhibitions",
          }}
        />
      </div>
    </>
  );
};

export default Layout;
