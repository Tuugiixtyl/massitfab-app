import {
  callGet,
  callPost,
  callPostByFormData,
  callPostWithoutBody,
  callPut,
} from "./baseInstance";

async function getLatestContents(params: string) {
  return await callGet(`/content/get${params}`);
}

async function getCategories() {
  return await callGet("/category/get");
}

async function uploadNewContent(data: FormData) {
  return await callPostByFormData("/content/create", data);
}

async function getProductDetails(param: number) {
  return await callGet(`/content/get/${param}`);
}

async function searchProduct(params: string) {
  return await callGet(`/content/search${params}`);
}

async function toggleWishlist(data: FormData) {
  return await callPostByFormData("/u/wishlist/toggle", data);
}

async function cartToggle(param: number) {
  return await callPostWithoutBody(`/cart/toggle/${param}`);
}

async function getWishlist() {
  return await callGet(`/u/wishlist/getAll`);
}

async function getCartList() {
  return await callGet(`/cart/get`);
}

async function cartCheckout() {
  return await callPostWithoutBody(`/cart/checkout`)
}

export {
  getLatestContents,
  getCategories,
  uploadNewContent,
  getProductDetails,
  searchProduct,
  toggleWishlist,
  cartToggle,
  getWishlist,
  getCartList,
  cartCheckout,
};
