<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { RouterView } from "vue-router";
import "primevue/resources/primevue.min.css";

// Store
import store from "@/store";

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
  <div id="mfabTheme" data-theme="light">
    <main>
      <RouterView />
    </main>
  </div>
</template>
