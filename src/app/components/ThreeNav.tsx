import Link from "next/link";
import { TICKETS_LINK } from "../constants";
import { HeaderThree } from "./Typography";
import LinkBackHome from "./LinkBackHome";

// Three corner Navs
interface NavProps {
  href: string;
  title: string;
}

const ThreeNav = ({
  withTickets = false,
  rightNav,
  leftNav,
  bottomNav,
  topNav,
  backLinkGoesBackHome = false,
  className,
}: {
  withTickets?: boolean;
  topNav?: NavProps;
  bottomNav?: NavProps;
  rightNav: NavProps;
  leftNav: NavProps;
  backLinkGoesBackHome?: boolean;
  className?: string;
}) => {
  return (
    <>
      {topNav && (
        <div
          className={`${className} pt-[12px] absolute  top-0 left-0 w-full flex justify-center items-center`}
        >
          <Link href={topNav.href}>
            <HeaderThree>{topNav.title}</HeaderThree>
          </Link>
        </div>
      )}

      {/* Bottom nav */}
      {bottomNav && (
        <div
          className={`${className} pb-4 absolute  bottom-0 left-0 w-full flex justify-center items-center`}
        >
          {/* 
          Note: "backLinkGoesBackHome" is used solely for animation for BKKK. 
          There is a strong leakage of this Component, making this abstraction difficult to maintain. 

          We should refactor ThreeNav to be more spcific to BKKK & KYAF.
        */}
          {backLinkGoesBackHome ? (
            <LinkBackHome>
              <HeaderThree>{bottomNav.title}</HeaderThree>
            </LinkBackHome>
          ) : (
            <Link href={bottomNav.href} className="no-underline">
              <HeaderThree>{bottomNav.title}</HeaderThree>
            </Link>
          )}
        </div>
      )}

      <section>
        {/* Left nav */}
        <div className="absolute h-full left-0 top-0 flex justify-center items-center w-[54px]">
          <div className="-rotate-90">
            <Link href={leftNav.href} className="no-underline">
              <HeaderThree>{leftNav.title}</HeaderThree>
            </Link>
          </div>
        </div>

        {/* Right nav */}
        <div className="absolute h-full right-0 top-0 flex justify-center items-center w-[54px]">
          <div className="rotate-90 500 relative">
            <Link href={rightNav.href} className="no-underline">
              <HeaderThree>{rightNav.title}</HeaderThree>
            </Link>
          </div>

          {withTickets && (
            <div className="rotate-90 absolute bottom-[120px] -left-[21px]">
              <a
                className="no-underline whitespace-nowrap"
                href={TICKETS_LINK}
                target="_blank"
              >
                <button className="hover:shadow-lg border-[1px] border-black py-1 px-4 bg-black text-white">
                  Get Tickets
                </button>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ThreeNav;
