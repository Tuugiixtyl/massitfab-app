<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from "vue";

import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
  const script = document.createElement("script");

  script.src = "https://buttons.github.io/buttons.js";
  script.async = true;

  document.body.appendChild(script);
});
</script>

<template>
  <div class="bg-gray-300 h-screen text-white">
    <main>
      <RouterView />
    </main>

    <footer class="bg-gray-800 py-4 shadow-lg flex">
      <div class="text-white mx-auto">
        ©2023
      </div>
    </footer>
</div>
</template>
