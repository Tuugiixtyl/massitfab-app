<script setup lang="ts">
// Layout
import Layout from "../layout/index.vue";
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div class="z-20 min-h-screen flex-col overflow-hidden p-4 text-2xl">
        <section class="">
          <div
            class="container mx-auto flex flex-col space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16"
          >
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1
                  class="text-3xl font-semibold tracking-wide text-base-content lg:text-4xl"
                >
                  Easiest way to deliver products
                </h1>

                <div class="mt-8 space-y-5">
                  <p class="-mx-2 flex items-center text-base-content">
                    <i
                      class="pi pi-check-circle pr-2"
                      style="font-size: 1rem"
                    ></i>

                    <span class="mx-2">Sell anything, to anyone, anywhere</span>
                  </p>

                  <p class="-mx-2 flex items-center text-base-content">
                    <i
                      class="pi pi-check-circle pr-2"
                      style="font-size: 1rem"
                    ></i>

                    <span class="mx-2"
                      >Deepen connection with the communities</span
                    >
                  </p>

                  <p class="-mx-2 flex items-center text-base-content">
                    <i
                      class="pi pi-check-circle pr-2"
                      style="font-size: 1rem"
                    ></i>

                    <span class="mx-2">Easy to Use</span>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="flex h-96 w-full items-center justify-center overflow-hidden rounded-md lg:w-1/2"
            >
              <div class="screen mx-auto h-full w-full object-cover">
                <div class="screen-image"></div>
                <div class="screen-overlay"></div>
                <div class="screen-content">
                  <i class="screen-icon pi pi-box"></i>
                  <div class="screen-user">
                    <span class="name" data-value="journeysalive">journey</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>
