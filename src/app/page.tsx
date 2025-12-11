"use client";

import Link from "next/link";
import { HeaderFour, HeaderThree } from "@/app/components/Typography";
import {
  COOKIE_BACK_FROM_BOTTOM,
  COOKIE_BACK_FROM_TOP,
  COOKIE_FROM_HOME,
  MAIN_BKKK_BG_COLOR,
  MAIN_KYAF_BG_COLOR,
  TICKETS_LINK,
} from "./constants";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next/client";
import DeleteCookie from "./components/DeleteCookie";
import ThreeNav from "./components/ThreeNav";
import { useEffect, useState } from "react";

const LinkWithAnimation = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const router = useRouter();

  const onClick = () => {
    setTimeout(() => {
      setCookie(COOKIE_FROM_HOME, "true");
      router.push(href);
    }, 1500);

    if (href === "/art-forest/exhibitions") {
      animateKYAF();
    } else {
      animateBKKK();
    }
  };

  // TODO: These all can really just be done in CSS
  const animateBKKK = () => {
    // 0.5s animation
    const elementsToFadeOut = document.querySelectorAll(
      "[data-for-bkkk-fade-out]"
    );
    elementsToFadeOut.forEach((element) => {
      element.classList.add("fade-out-fast");
    });

    const elementsToFadeToBlackText = document.querySelectorAll(
      "[data-for-bkkk-text]"
    );
    elementsToFadeToBlackText.forEach((element) => {
      element.classList.add("fade-to-text-black-fast");
    });

    // Delay for 0.5s. Second 1s animation
    setTimeout(() => {
      const elementsToAppear = document.querySelectorAll(
        "[data-for-bkkk-page]"
      );
      elementsToAppear.forEach((element) => {
        element.classList.remove("hidden");
        ["absolute", "-top-[50svh]", "left-0", "w-full", "h-[100svh]"].forEach(
          (className) => {
            element.classList.add(className);
          }
        );
      });

      const elementsToFadeIn = document.querySelectorAll(
        "[data-for-bkkk-page-navs]"
      );
      elementsToFadeIn.forEach((element) => {
        element.classList.remove("hidden");
        element.classList.add("fade-in");
        element.classList.add("z-10");
      });

      const elementsToSlideUp = document.querySelectorAll(
        "[data-for-slide-downwards]"
      );
      elementsToSlideUp.forEach((element) => {
        element.classList.add("slide-downwards");
      });
    }, 500);
  };

  // TODO: These all can really just be done in CSS
  const animateKYAF = () => {
    // 0.5s animation
    const elementsToFadeOut = document.querySelectorAll(
      "[data-for-kyaf-fade-out]"
    );
    elementsToFadeOut.forEach((element) => {
      element.classList.add("fade-out-fast");
    });

    // Delay for 0.5s. Second 1s animation
    setTimeout(() => {
      const elementsToAppear = document.querySelectorAll(
        "[data-for-kyaf-page]"
      );
      elementsToAppear.forEach((element) => {
        element.classList.remove("hidden");
        ["absolute", "top-[50svh]", "left-0", "w-full", "h-[100svh]"].forEach(
          (className) => {
            element.classList.add(className);
          }
        );
      });

      const elementsToFadeIn = document.querySelectorAll(
        "[data-for-kyaf-page-navs]"
      );
      elementsToFadeIn.forEach((element) => {
        element.classList.remove("hidden");
        element.classList.add("fade-in");
        element.classList.add("z-10");
      });

      const elementsToSlideUp = document.querySelectorAll(
        "[data-for-slide-upwards]"
      );
      elementsToSlideUp.forEach((element) => {
        element.classList.add("slide-upwards");
      });
    }, 500);
  };

  return (
    <Link onClick={onClick} href={""} className="no-underline">
      {children}
    </Link>
  );
};

const HomePage = () => {
  const [backFromBottom, setBackFromBottom] = useState<boolean>(false);
  const [backFromTop, setBackFromTop] = useState<boolean>(false);

  useEffect(() => {
    const backFromBottom = getCookie(COOKIE_BACK_FROM_BOTTOM);
    const backFromTop = getCookie(COOKIE_BACK_FROM_TOP);

    setBackFromBottom(backFromBottom === "true");
    setBackFromTop(backFromTop === "true");

    setTimeout(() => {
      setBackFromBottom(false);
      setBackFromTop(false);
    }, 1000);
  }, []);

  let pageClassName = "";
  if (backFromBottom) {
    pageClassName = "slide-back-top";
  } else if (backFromTop) {
    pageClassName = "slide-back-bottom";
  }

  return (
    <div
      data-for-slide-upwards
      data-for-slide-downwards
      className={pageClassName}
    >
      <div className="h-full">
        <div className="relative">
          {/* Fade in BKKK with page navs */}
          {/* TODO: The animation here is wonky since bottom,right and left nav changes depending on the page */}
          <>
            <div
              data-for-bkkk-page
              className={
                backFromTop
                  ? "absolute -top-[50svh] left-0 w-full h-[100svh]"
                  : "hidden"
              }
              style={{ backgroundColor: MAIN_BKKK_BG_COLOR }}
            >
              <section
                data-for-bkkk-page-navs
                className={`${backFromTop ? "fade-out" : "hidden"}`}
              >
                <ThreeNav
                  topNav={{
                    href: "/bangkok-kunsthalle/exhibitions",
                    title: "Exhibitions",
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
          </>

          <div
            className={`relative basis-1/2 border-b-[1px] border-black flex justify-center items-end pb-4 h-[50svh]`}
          >
            <div className="z-20">
              <LinkWithAnimation href="/bangkok-kunsthalle/exhibitions">
                <HeaderThree
                  data-for-bkkk-text
                  className={`${backFromTop ? "text-black fade-to-text-white-fast" : "text-white"}`}
                >
                  Bangkok Kunsthalle
                </HeaderThree>
              </LinkWithAnimation>
            </div>
          </div>

          <div
            data-for-bkkk-fade-out
            className={`absolute top-0 left-0 w-full h-full z-10 ${backFromTop ? "fade-in" : ""}`}
            style={{
              backgroundColor: MAIN_BKKK_BG_COLOR,
              backgroundImage: `url(https://images.prismic.io/kyaf/Z4eSbJbqstJ99e1N_bkkk-background-image.jpeg?w=800&h=800&dpr=2&fit=max&auto=compress)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div>
          <div
            className={`relative basis-1/2 flex justify-center items-start pt-4 h-[50svh]`}
          >
            <div className={`flex-col z-20`}>
              <LinkWithAnimation href="/art-forest/exhibitions">
                <HeaderThree>Khao Yai Art Forest</HeaderThree>
              </LinkWithAnimation>

              {/* Fade out tickets button */}
              <a
                data-for-kyaf-fade-out
                className={`no-underline ${backFromBottom ? "fade-in" : ""}`}
                href={TICKETS_LINK}
                target="_blank"
              >
                <button className="hover:shadow-lg border-[1px] border-black py-1 px-4 w-full mt-2">
                  <HeaderFour>Tickets</HeaderFour>
                </button>
              </a>
            </div>

            {/* Fade inout our background image */}
            <div
              data-for-kyaf-fade-out
              className={`absolute top-0 left-0 w-full h-full z-10 ${backFromBottom ? "fade-in" : ""}`}
              style={{
                backgroundImage: `url(https://images.prismic.io/kyaf/Z39x8ZbqstJ99M5I_Walking-In-Nature.png?w=800&h=800&dpr=2&fit=max&auto=compress)`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            />
          </div>

          {/* Fade in KYAF with page navs */}
          <>
            <div
              data-for-kyaf-page
              className={`${backFromBottom ? "absolute top-[50svh] left-0 w-full h-[100svh]" : "hidden"}`}
              style={{ backgroundColor: MAIN_KYAF_BG_COLOR }}
            >
              <section
                data-for-kyaf-page-navs
                className={`${backFromBottom ? "fade-out" : "hidden"}`}
              >
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
          </>
        </div>
      </div>

      <DeleteCookie />
    </div>
  );
};

export default HomePage;
