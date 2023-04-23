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

export { getLatestContents, getCategories, uploadNewContent };
