<script setup lang="ts">
// Layout
import Layout from "../layout/index.vue";
</script>
<template>
  <Layout>
    <section class="">
      <div
        class="container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12"
      >
        <div class="wf-ull lg:w-1/2">
          <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1 class="mt-3 text-2xl font-semibold text-base-content">
            Page not found
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>

          <div class="mt-6 flex items-center gap-x-3">
            <button
              class="flex w-1/2 items-center justify-center gap-x-2 rounded-lg bg-base-content px-5 py-2 text-sm text-neutral-content transition-colors duration-200 hover:bg-neutral-focus sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <button
              class="w-1/2 shrink-0 rounded-lg bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto"
            >
              Take me home
            </button>
          </div>
        </div>

        <div class="relative mt-12 w-full lg:mt-0 lg:w-1/2">
          <img
            class="w-full max-w-lg lg:mx-auto"
            src="illustration.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  </Layout>
</template>
