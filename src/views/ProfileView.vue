<script setup lang="ts">
import { reactive, onMounted, ref, provide } from "vue";
import { useRoute } from "vue-router";
import HolyGrail from "../components/HolyGrailWidget.vue";

// Layout
import Layout from "../layout/index.vue";
import { getProfile } from "@/api/user";

const render = ref(false);

const state = reactive({
  username: "",
  summary: "",
  profile_picture: "",
  products: [],
});

const route = useRoute();
const userParam = route.params.username;

async function getProfileData() {
  await getProfile(`${userParam}`)
    .then((response) => {
      if (response.status === 200) {
        state.username = response.data.data.username;
        state.summary = response.data.data.summary;
        state.profile_picture = "/hideout" + response.data.data.profile_picture;
        state.products = response.data.data.related_products;

        render.value = true;
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
  getProfileData();
});
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div
        v-if="render"
        class="min-h-screen flex-col overflow-hidden p-4 text-2xl"
      >
        <div class="avatar mb-3">
          <div
            class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100"
          >
            <img :src="state.profile_picture" />
          </div>
          <h1 class="mx-3">{{ state.username }}</h1>
        </div>
        <div class="mb-4">
          <h2 class="mb-4">
            {{ state.summary }}
          </h2>

          <button class="btn-outline btn-primary btn mr-2">Products</button>
          <button class="btn-primary btn-ghost btn">Membership</button>
        </div>

        <div class="divider"></div>

        <div
          class="grid place-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3"
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
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-0">
      <div
        class="flex w-full items-center justify-between border-t border-gray-200 lg:w-3/5"
      >
        <div
          class="flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700"
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4L4.49984 7.33333"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4.00002L4.49984 0.666687"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="ml-3 text-sm font-medium leading-none">Previous</p>
        </div>
        <div class="hidden sm:flex">
          <p
            class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
          >
            1
          </p>
          <p
            class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
          >
            2
          </p>
          <p
            class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
          >
            3
          </p>
          <p
            class="mr-4 cursor-pointer border-t border-indigo-400 px-2 pt-3 text-sm font-medium leading-none text-indigo-700"
          >
            4
          </p>
          <p
            class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
          >
            5
          </p>
          <p
            class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
          >
            6
          </p>
          <p
            class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
          >
            7
          </p>
          <p
            class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-indigo-400 hover:text-indigo-700"
          >
            8
          </p>
        </div>
        <div
          class="flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700"
        >
          <p class="mr-3 text-sm font-medium leading-none">Next</p>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 7.33333L12.8333 4"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 0.666687L12.8333 4.00002"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </Layout>
</template>
