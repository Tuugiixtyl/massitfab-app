import {
  callGet,
  callPost,
  callPostByFormData,
  callPostWithoutBody,
  callPut,
} from "./baseInstance";

async function getLatestContents(params: string) {
  return await callGet("/content/get/" + params + "/");
}

async function getCategories() {
  return await callGet("/category/get/");
}

async function uploadNewContent(data: FormData) {
  return await callPostByFormData("/content/create/", data);
}

async function getProductDetails(param: number) {
  return await callGet("/content/get/" + param + "/");
}

export {
  getLatestContents,
  getCategories,
  uploadNewContent,
  getProductDetails,
};
