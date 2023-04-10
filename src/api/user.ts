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

// async function getUserByPagination(page_number: number, limit: number) {
//   return await callPost("/user/by/pagination", {
//     page_number,
//     limit,
//   });
// }

async function changePassword(data: object) {
  return await callPut("/user/update/password", data);
}

async function getProfile(username: string) {
  return await callGet("/u/get/" + username + "/");
}

async function changeAvatar(data: FormData) {
  return await callPostByFormData("/user/upload/image", data);
}

async function deactivate(user_id: number) {
  return await callPost("/user/deactivate", { user_id });
}

async function activate(user_id: number) {
  return await callPost("/user/activate", { user_id });
}

export {
  getUserBalance,
  getUserInfo,
  changePassword,
  getProfile,
  changeAvatar,
  deactivate,
  activate,
};
