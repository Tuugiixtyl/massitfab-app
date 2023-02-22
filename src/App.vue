<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, watch, ref } from "vue";

import { RouterLink, RouterView } from "vue-router";

// Compnents
import Header from "./layout/Header.vue";
import Drawer from "./layout/Drawer.vue";
import Footer from "./layout/Footer.vue";

const themeIndex = ref(0);
const data = ref(null);

watch(
  themeIndex,
  async () => {
    switch (themeIndex.value) {
      case 0:
        document.querySelector("#mfabTheme").dataset.theme = "light";
        break;
      case 1:
        document.querySelector("#mfabTheme").dataset.theme = "dracula";
        break;
      default:
        document.querySelector("#mfabTheme").dataset.theme = "dark";
    }
  },
  { immediate: true },
);

// onMounted(() => {
//   const script = document.createElement("script");

//   script.src = "https://buttons.github.io/buttons.js";
//   script.async = true;

//   document.body.appendChild(script);
// });
</script>

<template>
  <div id="mfabTheme" data-theme="dracula">
    <main>
      <Header />
      <RouterView />
      <Footer class="footer footer-center bg-base-300 p-4 text-base-content" />
    </main>
  </div>
</template>
