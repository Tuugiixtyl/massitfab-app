import {
  callGet,
  callPost,
  callPostByFormData,
  callPostWithoutBody,
  callPut,
} from "./baseInstance";

async function getUserBalance() {
  return await callGet("/user/get/account/balance");
}

async function getUserInfo(user_id: number) {
  return await callPost("/user/get/user/info", { user_id });
}

async function getUserByPagination(page_number: number, limit: number) {
  return await callPost("/user/by/pagination", {
    page_number,
    limit,
  });
}

async function changePassword(data: object) {
  return await callPut("/user/update/password", data);
}

async function changePhone(data: object) {
  return await callPut("/user/update/phone", data);
}

async function getProfile() {
  return await callGet("/user/get/profile");
}

async function changeAvatar(data: FormData) {
  return await callPostByFormData("/user/upload/image", data);
}

async function otpAltCreate(data: object) {
  return await callPost("/otpAlt/create", data);
}

async function checkPricePackage() {
  return await callGet("/user/check/price-package");
}

async function getUserPricePackage() {
  return await callGet("/user/price-package");
}

async function deactivate(user_id: number) {
  return await callPost("/user/deactivate", { user_id });
}

async function activate(user_id: number) {
  return await callPost("/user/activate", { user_id });
}

// async function otpAltValidate(data: object) {
//   return await callPost("/otpAlt/validate", data);
// }

export {
  getUserBalance,
  getUserInfo,
  getUserByPagination,
  changePassword,
  changePhone,
  getProfile,
  changeAvatar,
  otpAltCreate,
  checkPricePackage,
  getUserPricePackage,
  deactivate,
  activate,
  // otpAltValidate,
};
