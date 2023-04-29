<script setup lang="ts">
import { reactive, onBeforeMount, ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

// Layout
import Layout from "../layout/index.vue"
import HolyGrail from "../components/HolyGrailWidget.vue";

// api
import { getProfile } from "@/api/user";

interface Pagination {
  page: number;
  page_size: number;
  num_pages: number;
  total_count: number;
}

const render = ref(false);
const pagination = ref<Pagination>({});

const state = reactive({
  username: "",
  summary: "",
  profile_picture: "",
  products: [],
});

const currentPage = ref(pagination.value.page);
const pageCount = ref(pagination.value.num_pages);
const maxDisplayedPageNumbers = 5;

const route = useRoute();
const userParam = route.params.username;

async function fetchData(pageNumber: number | undefined) {
  const pageQueryParam = pageNumber !== undefined ? `?page=${pageNumber}` : "";
  const url = `${userParam}/${pageQueryParam}`;

  try {
    const response = await getProfile(url);
    if (response.status === 200) {
      state.username = response.data.data.username;
      state.summary = response.data.data.summary;
      state.profile_picture = `/hideout${response.data.data.profile_picture}`;
      state.products = response.data.data.related_products;
      pagination.value = response.data.data.list;

      render.value = true;
    }
    scrollToTop();
  } catch (error) {
    console.log(error);
  }
}

function nextPage() {
  if (currentPage.value < pageCount.value) {
    currentPage.value++;
    fetchData(currentPage.value);
  }
}

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchData(currentPage.value);
  }
}

function goToPage(pageNumber: number) {
  currentPage.value = pageNumber;
  fetchData(pageNumber);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const displayedPageNumbers = computed(() => {
  const startPage = Math.max(currentPage.value - maxDisplayedPageNumbers, 1);
  const endPage = Math.min(currentPage.value + maxDisplayedPageNumbers, pageCount.value);
  const adjustedStartPage = Math.max(startPage, 1);
  const adjustedEndPage = Math.min(endPage, pageCount.value);

  return Array.from({ length: adjustedEndPage - adjustedStartPage + 1 }, (_, index) => adjustedStartPage + index);
});

onBeforeMount(async () => {
  await fetchData(currentPage.value);
});

watch(pagination, () => {
  currentPage.value = pagination.value.page;
  pageCount.value = pagination.value.num_pages;
});
</script>

<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div v-if="render" class="min-h-screen flex-col overflow-hidden p-4 text-2xl">
        <div class="avatar mb-3">
          <div class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
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

        <div class="grid place-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <div v-for="product in state.products" :key="product.id">
            <HolyGrail :id="product.id" :title="product.title" :description="product.description" :banner="product.banner"
              :price="product.price" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div class="lg:w-3/4 w-full flex items-center justify-between border-t border-base-300 px-12 lg:px-0">
        <div class="flex items-center pt-3 text-base-content hover:text-primary cursor-pointer"
          :class="{ 'cursor-not-allowed hover:text-error': currentPage === 1 }"
          @click="previousPage"
          :disabled="currentPage === 1">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <p class="text-md ml-3 font-medium leading-none">Previous</p>
        </div>
        <div class="sm:flex hidden" v-for="pageNumber in displayedPageNumbers" :key="pageNumber">
          <p class="text-md font-medium leading-none cursor-pointer text-base-content hover:text-primary border-t border-transparent hover:border-t-primary pt-3 mr-4 px-2"
            @click="goToPage(pageNumber)"
            :class="{ 'text-primary border-t-indigo-400': pageNumber === currentPage }">
            {{ pageNumber }}</p>
        </div>
        <div class="flex items-center pt-3 text-base-content hover:text-primary cursor-pointer" 
          :class="{ 'cursor-not-allowed hover:text-error': currentPage === pageCount }"
          @click="nextPage"
          :disabled="currentPage === pageCount">
          <p class="text-md font-medium leading-none mr-3">Next</p>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </Layout>
</template>
