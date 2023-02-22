import axios from "axios";

// Store
import store from "@/store";

// Router
import router from "@/router";

// Utils
import { getToken, setToken, destroyToken } from "@/utils/cookie_helper";
import { checkTokenIsExpired } from "@/utils/jwt_helper";

// Api
import { getAccessToken } from "./auth";

async function getNewAccessToken() {
  try {
    const response = await getAccessToken();

    if (response.status === 201) {
      const { data } = response;

      setToken("access-token", data.access_token);

      return data.access_token;
    }
  } catch (error) {
    console.log(error);
  }
}

const axiosInstance = axios.create({
  baseURL: "/api",
  // baseURL: process.env.BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  async function (config: any) {
    const token = getToken("access-token");

    if (token && !checkTokenIsExpired(<string>token)) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      const refreshToken: string | boolean = getToken("refresh-token");

      if (refreshToken && !checkTokenIsExpired(<string>refreshToken)) {
        const access_token = await getNewAccessToken();

        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
      } else {
        store.setIsLoggedIn(false);

        destroyToken("refresh-token");
        destroyToken("access-token");

        router.push("/");
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const callGet = async (url: string) => {
  return await axiosInstance.get(url);
};

const callPost = async (url: string, body: object) => {
  return await axiosInstance.post(url, body);
};

const callPostWithoutBody = async (url: string) => {
  return await axiosInstance.post(url);
};

const callPostByFormData = async (url: string, body: FormData) => {
  return await axiosInstance.post(url, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const callPut = async (url: string, body: object) => {
  return await axiosInstance.put(url, body);
};

const callDelete = async (url: string) => {
  return await axiosInstance.delete(url);
};

export {
  callGet,
  callPost,
  callPostWithoutBody,
  callPostByFormData,
  callPut,
  callDelete,
};
