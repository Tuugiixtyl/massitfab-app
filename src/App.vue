<script setup lang="ts">
import { onBeforeMount, watch, ref } from "vue";

import { RouterView } from "vue-router";

// Store
import store from "@/store";

const themeIndex = ref(0);

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
  <div id="mfabTheme" data-theme="dracula">
    <main>
      <RouterView />
    </main>
  </div>
</template>