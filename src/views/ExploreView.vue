<script setup lang="ts">
import { reactive, onMounted, ref, computed, watch } from "vue";
import HolyGrail from "../components/HolyGrailWidget.vue";
import CardWidget from "../components/CardWidget.vue";
import { useRouter } from "vue-router";

// Layout
import Layout from "../layout/index.vue";
import { getLatestContents } from "@/api/products";

interface Pagination {
  page: number;
  page_size: number;
  num_pages: number;
  total_count: number;
}

const render = ref(false);
const pagination = ref<Pagination>({});

const currentPage = ref(pagination.value.page);
const pageCount = ref(pagination.value.num_pages);
const maxDisplayedPageNumbers = 5;
const router = useRouter();
const param = ref("");

const state = reactive({
  products: [],
});

async function fetchData(pageNumber: number | undefined) {
  const pageQueryParam = pageNumber !== undefined ? `?page=${pageNumber}` : "";
  const url = `${param.value}${pageQueryParam}`;

  try {
    const response = await getLatestContents(url);
    if (response.status === 200) {
      state.products = response.data.data.products;
      pagination.value = response.data.data.pagination;
      
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

onMounted(async () => {
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
      <div class="min-h-screen flex-col overflow-hidden p-4 text-2xl">
        <div class="navbar rounded-3xl bg-base-200 shadow-lg">
          <div class="flex-1">
            <a @click="router.push('/explore')" class="btn-ghost btn text-xl normal-case">All</a>
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
        <div class="grid place-items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="product in state.products" :key="product.id">
            <HolyGrail v-bind:id="product.id" :title="product.title" :description="product.description"
              :banner="product.banner" :price="product.price" />
          </div>
          <!-- <div class="">
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
          </div> -->
        </div>
        <div class="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
          <div class="lg:w-3/4 w-full flex items-center justify-between border-t border-base-300 px-12 lg:px-0">
            <div class="flex items-center pt-3 text-base-content hover:text-primary cursor-pointer"
              :class="{ 'cursor-not-allowed hover:text-error': currentPage === 1 }" @click="previousPage"
              :disabled="currentPage === 1">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="text-md ml-3 font-medium leading-none">Previous</p>
            </div>
            <div class="sm:flex hidden" v-for="pageNumber in displayedPageNumbers" :key="pageNumber">
              <p class="text-md font-medium leading-none cursor-pointer text-base-content hover:text-primary border-t border-transparent hover:border-t-primary pt-3 mr-4 px-2"
                @click="goToPage(pageNumber)" :class="{ 'text-primary border-t-indigo-400': pageNumber === currentPage }">
                {{ pageNumber }}</p>
            </div>
            <div class="flex items-center pt-3 text-base-content hover:text-primary cursor-pointer"
              :class="{ 'cursor-not-allowed hover:text-error': currentPage === pageCount }" @click="nextPage"
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
      </div>
    </div>
  </Layout>
</template>
