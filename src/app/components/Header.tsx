"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MAIN_BKKK_BG, NAV_HEIGHT } from "@/app/constants";
import { usePathname } from "next/navigation";
import CTAButton from "@/app/components/CTAButton";

const NavItem = ({
  name,
  href,
  isButton = false,
}: {
  name: string;
  href: string;
  isButton?: boolean;
}) => {
  if (isButton) {
    return (
      <li className="flex items-center">
        <CTAButton className="my-0">
          <Link href={`/${href}`}>{name}</Link>
        </CTAButton>
      </li>
    );
  }

  return (
    <li className="p-4 text-gray-800 font-medium">
      <Link href={`/${href}`}>{name}</Link>
    </li>
  );
};

export const Header = () => {
  const [hasToggled, setHasToggled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Side effect in response to a path change
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className={`${MAIN_BKKK_BG}` + (menuOpen ? ` fixed` : ``)}>
      <div className={`sticky top-0 ${NAV_HEIGHT} z-50`}>
        <header
          className={`x-8 lg:px-32 ${NAV_HEIGHT} fixed ${MAIN_BKKK_BG} w-full border-b border-gray-200 flex justify-center `}
        >
          <div className="w-full max-w-screen-xl flex justify-between items-center">
            <div className="flex justify-between items-center text-gray-600 w-full px-4 lg:w-auto">
              <div className="pr-4">
                <span className="">
                  <Link href={`/`}>LOGO</Link>
                </span>
              </div>

              <button
                className={
                  `lg:hidden absolute right-8 rounded-full bg-zinc-200 p-2 ` +
                  (menuOpen
                    ? `${
                        hasToggled ? "animate-slideOutRight" : ""
                      } translate-x-[80px]`
                    : `${hasToggled ? "animate-slideInRight" : ""}`)
                }
                onClick={() => {
                  setMenuOpen(true);
                  setHasToggled(true);
                }}
              >
                <Bars3Icon className=" size-6 text-gray-900" />
              </button>
              <button
                className={
                  `lg:hidden absolute right-8 rounded-full bg-zinc-200 p-2 ` +
                  (menuOpen
                    ? `${hasToggled ? "animate-slideInRight" : ""}`
                    : `${
                        hasToggled ? "animate-slideOutRight" : ""
                      } translate-x-[80px]`)
                }
                onClick={() => setMenuOpen(false)}
              >
                <XMarkIcon className=" size-6 text-gray-900" />
              </button>
            </div>

            <nav
              className={
                `fixed top-20 left-0 h-[calc(100%-2.5rem)] lg:relative lg:top-auto lg:flex lg:justify-between lg:items-center w-full text-gray-800 ${MAIN_BKKK_BG} ` +
                (menuOpen
                  ? `${
                      hasToggled ? "animate-slideInLeft" : ""
                    } translate-x-0 lg:animate-none`
                  : `${
                      hasToggled ? "animate-slideOutLeft" : ""
                    } -translate-x-full lg:animate-none lg:translate-x-0`)
              }
            >
              <ul className="flex">
                <NavItem
                  name="Bangkok Kunsthalle"
                  href="bangkok-kunsthalle/exhibitions"
                />
                <NavItem name="Khao Yai Art Forest" href="art-forest/exhibitions" />
              </ul>

              <ul className="flex flex-col lg:items-center lg:flex-row">
                <NavItem name="Tickets" href="tickets" />
                <NavItem name="Members (Coming soon)" href="members" />
                {/* <NavItem isButton name="∅Sign in" /> */}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
