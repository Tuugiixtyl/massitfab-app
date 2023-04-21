import { createRouter, createWebHistory } from "vue-router";
import { destroyToken, getToken } from "@/utils/cookie_helper";
import { checkTokenIsExpired } from "@/utils/jwt_helper";
import store from "@/store";
import { checkPermission } from "@/api/menu";

// Views
import Home from "@/views/HomeView.vue";
import Join from "@/views/JoinView.vue";
import Features from "@/views/FeaturesView.vue";
import Explore from "@/views/ExploreView.vue";
import Profile from "@/views/ProfileView.vue";
import Settings from "@/views/SettingsView.vue";
import Checkout from "@/views/CartView.vue";
import NotFound from "@/views/NotFoundView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/join",
      name: "join",
      component: Join,
    },
    {
      path: "/features",
      name: "features",
      component: Features,
    },
    {
      path: "/explore",
      name: "explore",
      component: Explore,
    },
    {
      path: "/profile/:username",
      name: "profile",
      component: Profile,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    {
      path: "/checkout",
      name: "cart_checkout",
      component: Checkout,
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
    },
  ],
});

async function checkLogin() {
  const refreshToken: string | boolean = getToken("access-token");

  if (refreshToken && !checkTokenIsExpired(<string>refreshToken)) {
    store.setIsLoggedIn(true);
  } else {
    store.setIsLoggedIn(false);
    destroyToken("access-token");
    // destroyToken("refresh-token");
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
