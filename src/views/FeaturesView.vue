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
          <div class="divider"></div>
          <div class="hero my-10 mb-14 min-h-screen">
            <div class="flex w-full flex-col lg:flex-row">
              <div
                class="grid h-screen flex-grow place-items-center bg-base-300"
              >
                <img class="object-cover" src="/ae.png" />
              </div>
              <div class="divider lg:divider-horizontal"></div>
              <div
                class="grid h-screen flex-grow place-items-center bg-base-300"
              >
                <article class="prose text-center font-serif">
                  <h1>Create a home here</h1>
                  <p>
                    No site? No problem. Use our flexible page editor to build a
                    storefront and customize your site’s colors, and more.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
