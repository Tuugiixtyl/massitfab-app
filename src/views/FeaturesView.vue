<script setup lang="ts">
// Layout
import Layout from "../layout/index.vue";
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
              <img class="rounded-lg" src="/arky.jpg" />
            </article>
          </div>
          <div class="divider " ></div>
          <div class="hero my-10 mb-14 min-h-min ">
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
          
          <div class="border-2 border-neutral-focus min-h-screen">
      <!-- 50/50 1 -->
            <div class="flex w-full flex-col lg:flex-row">
              <div
                class="grid  h-screen flex-grow place-items-center  w-1/2 bg-base-100"
              >
                <img class="object-contain  " src="anya1.png" />
              </div>
              <div
                class="grid h-screen flex-grow place-items-center bg-base-300 w-1/2 "
              >
                <article class="prose text-center font-serif">
                  <h1>Create simple memberships</h1>
                  <p>
                    Give customers access to a library of content for as long as they’re subscribed.
                  </p>
                  <h1>Set up subscriptions</h1>
                  <p>
                    Let customers pay over time—monthly, quarterly, biannually, yearly, and more.
                  </p>
                  <h1>The sky’s the limit</h1>
                  <p>
                    Give your audience the chance to pay what they want for your product.
                  </p>
                </article>
              </div>
            </div>
          </div>
      <!-- 50/50 START2 -->
          
          <div class="border-2 border-neutral-focus min-h-screen">
      <!-- 50/50 2 MAIN -->
            <div class="flex w-full flex-col lg:flex-row">
              <div
                class="grid h-screen flex-grow place-items-center bg-base-300 w-1/2 "
              >
                <article class="prose text-center font-serif">
                  <h1>Say ¥£$ to different currencies</h1>
                  <p>
                    Increase your sales opportunities by accepting payments from a global audience.
                  </p>
                  <h1>Don't sweat VAT</h1>
                  <p>
                    We collect VAT as required and send it to the EU . You don’t need to do a thing.
                  </p>
                  <h1>Want to give 10% off?</h1>
                  <p>
                    Create discount offer codes for your products, as a percentage or fixed amount.
                  </p>
                </article>
              </div>
              <div
                class="grid h-screen flex-grow place-items-center w-1/2  bg-base-100"
              >
                <img class="object-cover" src="/anya2.png" />
              </div>
            </div>
          </div>
      <!-- 50/50 3 START-->
          
          <div class="border-2 border-neutral-focus min-h-screen">
      <!-- 50/50 3 MAIN -->
            <div class="flex w-full flex-col lg:flex-row">
              <div
                class="grid h-screen flex-grow place-items-center w-1/2 bg-base-100 "
              >
                <img class="object-cover" src="/anya.png" />
              </div>
              <div
                class="grid h-screen flex-grow place-items-center bg-base-300 w-1/2 "
              >
                <article class="prose text-center font-serif">
                  <h1>Generate license keys</h1>
                  <p>
                    Selling software? We can create your license keys, so you can get back to beta.
                  </p>
                  <h1>Sell multiple versions</h1>
                  <p>
                    Allow buyers to pick from PDF, ePub, and Mobi. Even charge more for lossless audio.
                  </p>
                  <h1>Protect your work</h1>
                  <p>
                    We can create lightweight DRM to help keep customers honest.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div class="hero my-10 mb-14 min-h-min ">
            <article class="prose text-center font-serif">
              <h1>Share your work.
                Someone out there needs it.</h1>
                <button class="btn bg-accent-content">Start Selling</button>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
