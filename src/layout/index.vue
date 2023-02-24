<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// Store
import store from "../store";

// Components
import Header from "./Header.vue";
import Drawer from "./Drawer.vue";
import Footer from "./Footer.vue";
import Breadcrumb from "./Breadcrumb.vue";

const props = defineProps({
  title: String,
  background: Boolean,
  hideButton: Boolean, // when there's active subsription
});
</script>

<template>
  <main class="relative">
    <!-- <div
      v-if="store.isLoading"
      class="absolute z-[100] flex h-full w-full bg-opacity-60"
    >
      <div class="m-auto">
        <ProgressSpinner />
      </div>
    </div> -->
    <div class="col-span-12 flex min-h-screen flex-col lg:col-span-10">
      <Header />
      <div
        v-if="background"
        class="flex flex-grow flex-col space-y-5 rounded-lg p-5 shadow-lg"
      >
        <div class="flex justify-between border-b p-5">
          <h1>{{ title }}</h1>
        </div>
        <slot />
      </div>
      <slot v-else />
    </div>
    <Footer class="footer footer-center bg-base-300 p-4 text-base-content" />
  </main>
</template>
