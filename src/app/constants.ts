export const MAIN_BKKK_BG_COLOR = "#f8f6f6";
export const MAIN_KYAF_BG_COLOR = "#fcfaf4";
export const NAV_HEIGHT = "h-20";
export const MAIN_BKKK_BG = `bg-[${MAIN_BKKK_BG_COLOR}]`;
export const MAIN_KYAF_BG = `bg-[${MAIN_KYAF_BG_COLOR}]`;
export const BRAND_BG_COLOR = "bg-indigo-300";
export const BRAND_BG_TEXT_COLOR = "text-indigo-900";

// Prismic
export const DEFAULT_EXHIBITION_TYPE = "current";
export const EXHIBITIONS = {
  kyaf: "kyaf_exhibitions",
  kunsthalle: "exhibitions",
} as const;

export const ACTIVITIES = {
  kunsthalle: "activities",
  kyaf: "kyaf_activities",
} as const;

export const ABOUT = {
  kunsthalle: "kunsthalle_about_home",
  kyaf: "kyaf_about_home",
} as const;
export const SINGLE_EXHIBITION_PAGE = "exhibition_detail";
export const SINGLE_ACTIVITY_PAGE = "activity_detail";
export type ExhibitionNameType = (typeof EXHIBITIONS)[keyof typeof EXHIBITIONS];
export type ActivityNameType = (typeof ACTIVITIES)[keyof typeof ACTIVITIES];
export type AboutNameType = (typeof ABOUT)[keyof typeof ABOUT];

// Others
export const TICKETS_LINK = "https://buytickets.at/khaoyaiart/1537984/share/541b233115860daed3e7c8da32d1176b";

// Cookies
export const COOKIE_FROM_HOME = "fromHome";
export const COOKIE_BACK_FROM_BOTTOM = "backFromBottom";
export const COOKIE_BACK_FROM_TOP = "backFromTop";
