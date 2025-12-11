"use client";

import { deleteCookie } from "cookies-next/client";

import {
  COOKIE_BACK_FROM_BOTTOM,
  COOKIE_BACK_FROM_TOP,
  COOKIE_FROM_HOME,
} from "../constants";
import { useEffect } from "react";

const DeleteCookie = () => {
  useEffect(() => {
    setTimeout(() => {
      deleteCookie(COOKIE_FROM_HOME);
      deleteCookie(COOKIE_BACK_FROM_BOTTOM);
      deleteCookie(COOKIE_BACK_FROM_TOP);
    }, 100);
  }, []);

  return <></>;
};

export default DeleteCookie;
