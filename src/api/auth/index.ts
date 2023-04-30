import axios from "axios";

// Utils
import { getToken } from "@/utils/cookie_helper";

const authAxios = axios.create({
  baseURL: "/auth",
});

// authAxios.interceptors.request.use(
//   function (config: any) {
//     config.headers.Authorization = `Bearer ${getToken("refresh-token")}`;

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

// Add a response interceptor
authAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

const login = async (formData: object) => {
  return await authAxios.post("/login", formData);
};

const getAccessToken = async () => {
  const token = getToken("access-token");

  if (token) {
    return await authAxios.post("/generate/access-token", {
      access_token: token,
    });
  }

  return await authAxios.post("/generate/access-token");
};

const checkUsernameExist = async (username: string) => {
  return await authAxios.post("user/check/username/exist", {
    username,
  });
};

const checkEmailExist = async (email: string) => {
  return await authAxios.post("user/check/email/exist", {
    email,
  });
};

interface registerDto {
  email: string;
  username: string;
  password: string;
}

const registerUser = async (data: registerDto) => {
  return await authAxios.post("/register", data);
};

export {
  login,
  getAccessToken,
  checkUsernameExist,
  checkEmailExist,
  registerUser,
};
