import Cookie from "js-cookie";

// Utils
import { getDecodedAccessToken } from "./jwt_helper";

const setToken = (name: string, token: string): void => {
  const data = getDecodedAccessToken(token);

  Cookie.set(name, token, {
    expires: data.exp,
  });
};

const getToken = (name: string): string | boolean => {
  const cookie = Cookie.get(name);

  if (cookie && cookie !== undefined) {
    return cookie;
  }

  return false;
};

const destroyToken = (name: string): void => {
  Cookie.remove(name);
};

// const addDarkMode = (value: string) => {
//   Cookie.set("dark_mode", value);
// };

// const getDarkMode = () => {
//   return Cookie.get("dark_mode");
// };

export { setToken, getToken, destroyToken };
