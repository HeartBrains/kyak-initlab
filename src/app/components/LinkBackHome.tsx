"use client";

import { setCookie } from "cookies-next/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COOKIE_BACK_FROM_BOTTOM, COOKIE_BACK_FROM_TOP } from "../constants";

const LinkBackHome = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    // Odd behavior where we router.push will not work unless it's wrapped in setTimeout
    setTimeout(() => {
      const cookieToUse = pathname.includes("art-forest")
        ? COOKIE_BACK_FROM_BOTTOM
        : COOKIE_BACK_FROM_TOP;
      setCookie(cookieToUse, "true");
      router.push("/");
    }, 0);
  };

  return (
    <Link onClick={onClick} href="" className="no-underline">
      {children}
    </Link>
  );
};

export default LinkBackHome;
