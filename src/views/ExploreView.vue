<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import HolyGrail from "../components/HolyGrailWidget.vue";
import CardWidget from "../components/CardWidget.vue";
import { useRouter } from "vue-router";

// Layout
import Layout from "../layout/index.vue";
import { getLatestContents } from "@/api/products";

const router = useRouter();

const param = ref("");

const state = reactive({
  products: [],
});

async function getExploreData() {
  await getLatestContents(`${param.value}`)
    .then((response) => {
      if (response.status === 200) {
        state.products = response.data.data[0].products;
      }
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.clear();
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    });
}

onMounted(() => {
  getExploreData();
});
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div class="min-h-screen flex-col overflow-hidden py-4 text-2xl">
        <div class="navbar rounded-3xl bg-base-200 shadow-lg">
          <div class="flex-1">
            <a
              @click="router.push('/explore')"
              class="btn-ghost btn text-xl normal-case"
              >All</a
            >
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li tabindex="0" class="m-auto">
                <a class="btn-ghost btn text-xl normal-case">
                  More
                  <i class="pi pi-angle-down" />
                </a>
                <ul class="z-20 bg-base-300 p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
        <div class="divider my-5"></div>
        <div
          class="grid place-items-center gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          <div v-for="product in state.products" :key="product.id">
            <HolyGrail
              v-bind:id="product.id"
              :title="product.title"
              :description="product.description"
              :banner="product.banner"
              :price="product.price"
            />
          </div>
          <div class="">
            <div class="card image-full w-96 bg-base-100 shadow-xl">
              <figure><img src="/shadow.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Item name</h2>
                <p>
                  Something about item anything what you want Just fill with
                  something. Please ant Thank you!
                </p>
                <div class="card-actions justify-end">
                  <button class="btn-primary btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card glass w-96">
              <figure>
                <img src="/propro.jpg" alt="car!" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Products name!</h2>
                <p>How to park your car at your garage?</p>
                <div class="card-actions justify-end">
                  <button class="btn-primary btn">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
