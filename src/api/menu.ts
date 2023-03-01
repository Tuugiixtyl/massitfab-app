import { callGet, callPost } from "./baseInstance";

async function getAllMenu() {
  return await callGet("/menu");
}

async function getOwnMenus() {
  return await callGet("/menu/get/own/menus");
}

async function checkPermission(body: object) {
  return await callPost("/menu/check/permission", body);
}

export { getAllMenu, getOwnMenus, checkPermission };
