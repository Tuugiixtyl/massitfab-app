<script setup lang="ts">
import { onBeforeMount, watch, ref } from "vue";

import { RouterView } from "vue-router";

// Store
import store from "@/store";
import { getDecodedAccessToken } from "@/utils/jwt_helper";
import { getToken } from "@/utils/cookie_helper";

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
    };
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
</script>

<template>
  <div id="mfabTheme" data-theme="pastel">
    <main>
      <RouterView />
    </main>
  </div>
</template>