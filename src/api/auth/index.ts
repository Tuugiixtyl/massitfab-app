import axios from "axios";

// Utils
import { getToken } from "@/utils/cookie_helper";

const authAxios = axios.create({
  baseURL: "/auth",
});

authAxios.interceptors.request.use(
  function (config: any) {
    config.headers.Authorization = `Bearer ${getToken("refresh-token")}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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
  }
);

const login = async (username: string, password: string) => {
  return await authAxios.post("/login", {
    username,
    password,
  });
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

// Otp
const sendOtp = async (phone_number: number) => {
  return await authAxios.post("/otp/create", { phone_number });
};

const validateOtp = async (otp: string, phone_number: number) => {
  return await authAxios.post("otp/validate", { otp, phone_number });
};

// User registration
const checkPhoneNumberExist = async (phone_number: string) => {
  return await authAxios.post("user/check/phone-number/exist", {
    phone_number,
  });
};

const checkRegisterNumberExist = async (register_number: string) => {
  return await authAxios.post("user/check/register-number/exist", {
    register_number,
  });
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
  last_name: string;
  first_name: string;
  register_number: string;
  username: string;
  phone_number: string;
  email: string;
  password: string;
}

const registerUser = async (data: registerDto) => {
  return await authAxios.post("user/register", data);
};

// Company registration
const checkCompanyRegisterNumberExist = async (register_number: string) => {
  return await authAxios.post("company/check/register-number/exist", {
    register_number,
  });
};

interface registerCompanyDto {
  company_name: string;
  company_register_number: string;
  last_name: string;
  first_name: string;
  register_number: string;
  username: string;
  phone_number: string;
  email: string;
  password: string;
}

const registerCompanyUser = async (data: registerCompanyDto) => {
  return await authAxios.post("company/register", data);
};

export {
  login,
  getAccessToken,
  sendOtp,
  validateOtp,
  checkPhoneNumberExist,
  checkRegisterNumberExist,
  checkUsernameExist,
  checkEmailExist,
  registerUser,
  checkCompanyRegisterNumberExist,
  registerCompanyUser,
};
