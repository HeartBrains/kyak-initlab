import { ACTIVITIES, MAIN_BKKK_BG_COLOR } from "../../constants";
import BKKKKPageHeader from "@/app/components/BKKKKPageHeader";
import ThreeNav from "@/app/components/ThreeNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className={`p-[54px] pt-[12px] h-svh`}
        style={{ backgroundColor: MAIN_BKKK_BG_COLOR }}
      >
        <section className="max-w-screen-md m-auto h-full">
          <div className="mb-4">
            <BKKKKPageHeader pageUid={ACTIVITIES.kunsthalle} />
          </div>

          <div style={{ height: "calc(100% - 120px)" }}>
            <div className="h-full">{children}</div>
          </div>
        </section>

        <ThreeNav
          backLinkGoesBackHome
          bottomNav={{
            href: "/",
            title: "Bangkok Kunsthalle",
          }}
          rightNav={{
            href: "/bangkok-kunsthalle/exhibitions",
            title: "Exhibitions",
          }}
          leftNav={{
            href: "/bangkok-kunsthalle/about",
            title: "About",
          }}
        />
      </div>
    </>
  );
}
