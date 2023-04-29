<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, watch, ref } from "vue";

import { RouterView } from "vue-router";

// Store
import store from "./store";
import { getDecodedAccessToken } from "./utils/jwt_helper";
import { getToken } from "./utils/cookie_helper";

const themeIndex = ref(0);

//------ will be used for storing data ------//

watch(
  () => store.isLoggedIn,
  (value) => {
    if (value) {
      const token = getToken("access-token");
      const key = getDecodedAccessToken(token);
      store.setUserData(key.username);
      // store.setMenu();
    }
  },
);

//------ foreshadowing the future theme toggler -------//

// watch(
//   themeIndex,
//   async () => {
//     switch (themeIndex.value) {
//       case 0:
//         document.querySelector("#mfabTheme").dataset.theme = "light";
//         break;
//       case 1:
//         document.querySelector("#mfabTheme").dataset.theme = "dracula";
//         break;
//       default:
//         document.querySelector("#mfabTheme").dataset.theme = "dark";
//     }
//   },
//   { immediate: true },
// );

//------ I don't know what to do with this cause it's there from the start so... ------//

// onMounted(() => {
//   const script = document.createElement("script");

//   script.src = "https://buttons.github.io/buttons.js";
//   script.async = true;

//   document.body.appendChild(script);
// });
</script>

<template>
  <div id="mfabTheme" data-theme="light">
    <main>
      <RouterView />
    </main>
  </div>
</template>