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

export { getLatestContents };
