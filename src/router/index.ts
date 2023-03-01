import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Join from "@/views/SignInView.vue";
import { destroyToken, getToken } from "@/utils/cookie_helper";
import { checkTokenIsExpired } from "@/utils/jwt_helper";
import store from "@/store";
import { checkPermission } from "@/api/menu";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/join",
      name: "join",
      component: Join,
    },
  ],
});

async function checkLogin() {
  const refreshToken: string | boolean = getToken("refresh-token");

  if (refreshToken && !checkTokenIsExpired(<string>refreshToken)) {
    store.setIsLoggedIn(true);
  } else {
    store.setIsLoggedIn(false);
    destroyToken("access-token");
    destroyToken("refresh-token");
  }
}

router.beforeEach(async (to) => {
  store.setIsLoading(true);

  await checkLogin();

  const routes = ["home"];

  // if (!store.isLoggedIn) {
  //   if (!routes.includes(<string>to.name)) {
  //     return {
  //       name: "join",
  //     };
  //   }
  // } else {
  //   const lockedRoutes = ["home"];

  //   if (lockedRoutes.includes(<string>to.name)) {
  //     return {
  //       name: "home",
  //     };
  //   }

  //   const permission = await checkPermission({
  //     route_name: to.name,
  //   });

  //   if (!permission.data && !routes.includes(<string>to.name)) {
  //     return {
  //       name: "about",
  //     };
  //   }
  // }
});

router.afterEach(() => {
  store.setIsLoading(false);
});

export default router;
