<script setup lang="ts">
import { useRouter } from "vue-router";
// Layout
import Layout from "../layout/index.vue";

// Store
import store from "../store";

const router = useRouter();
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div class="z-20 min-h-screen w-full overflow-hidden text-2xl">
        <div class="flex w-full flex-col">
          <div class="hero min-h-screen">
            <article class="prose text-center font-serif">
              <h4>Product Features</h4>
              <h1>Built for new beginnings</h1>
              <p>
                MassitFab is a powerful, but simple, e-commerce platform that
                puts a wide selection of tools at your fingertips. Now you can
                sell the digital services you want—books, memberships, courses,
                and more—right to your audience.
              </p>
              <div
                class="flex h-96 w-full items-center justify-center overflow-hidden rounded-md"
              >
                <img
                  class="mx-auto h-full w-full object-cover transition duration-300 ease-in-out hover:scale-110 lg:max-w-2xl"
                  src="arky.jpg"
                  alt="glasses photo"
                />
              </div>
            </article>
          </div>
          <div class="divider"></div>
          <div class="hero my-10 mb-14 min-h-min">
            <article class="prose text-center font-serif">
              <h4>Payment Integrations</h4>
              <h1>Money, incoming</h1>
              <p>
                Once you get set up, it’s easy to ring the register. Here’s how
                you can sell and get paid, fast.
              </p>
            </article>
          </div>
          <!-- 50/50 START1 -->

          <div class="min-h-screen border-t-2 border-neutral">
            <!-- 50/50 1 -->
            <div class="flex w-full flex-col lg:flex-row">
              <div
                class="grid h-screen w-1/2 flex-grow place-items-center bg-base-100 p-20"
              >
                <img class="object-contain" src="/ft01.svg" />
              </div>
              <div
                class="grid h-screen w-1/2 flex-grow place-items-center bg-base-200"
              >
                <article class="prose text-start font-serif">
                  <h1>Create simple memberships</h1>
                  <p class="-mt-5 pb-10">
                    Give customers access to a library of content for as long as
                    they’re subscribed.
                  </p>
                  <h1>Set up subscriptions</h1>
                  <p class="-mt-5 pb-10">
                    Let customers pay over time—monthly, quarterly, biannually,
                    yearly, and more.
                  </p>
                  <h1>The sky’s the limit</h1>
                  <p class="-mt-5 pb-10">
                    Give your audience the chance to pay what they want for your
                    product.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <!-- 50/50 3 START-->

          <div class="min-h-screen border-y-2 border-neutral">
            <!-- 50/50 3 MAIN -->
            <div class="flex w-full flex-col lg:flex-row">
              <div
                class="grid h-screen w-1/2 flex-grow place-items-center bg-base-200"
              >
                <article class="prose text-start font-serif">
                  <h1>Generate license keys</h1>
                  <p class="-mt-5 pb-10">
                    Selling software? We can create your license keys, so you
                    can get back to beta.
                  </p>
                  <h1>Sell multiple versions</h1>
                  <p class="-mt-5 pb-10">
                    Allow buyers to pick from PDF, ePub, and Mobi. Even charge
                    more for lossless audio.
                  </p>
                  <h1>Protect your work</h1>
                  <p class="-mt-5 pb-10">
                    We can create lightweight DRM to help keep customers honest.
                  </p>
                </article>
              </div>
              <div
                class="grid h-screen w-1/2 flex-grow place-items-center bg-base-100 p-44"
              >
                <img class="object-cover" src="/ft02.svg" />
              </div>
            </div>
          </div>
          <div v-if="!store.isLoggedIn" class="hero my-10 mb-14 min-h-min">
            <article class="prose text-center font-serif">
              <h1>Share your work. Someone out there needs it.</h1>
              <a @click="router.push('/join')">
                <button class="btn-outline btn animate-bounce">
                  Start Selling
                </button>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
