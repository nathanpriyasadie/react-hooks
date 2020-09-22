export const setCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value};`;
};

export const getCookie = (key: string) => {
  return document?.cookie
    ?.split("; ")
    ?.find((cookie: string) => cookie.startsWith(key))
    ?.split("=")[1];
};
