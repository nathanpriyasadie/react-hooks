import { CookieKey } from "../constants";

export const setCookie = (key: CookieKey, value: string) => {
  document.cookie = `${key}=${value};`;
};

export const getCookie = (key: CookieKey) => {
  return document?.cookie
    ?.split("; ")
    ?.find((cookie: string) => cookie.startsWith(key))
    ?.split("=")[1];
};
