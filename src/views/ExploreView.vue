<script setup lang="ts">
import { reactive, onBeforeMount, ref, computed, watch } from "vue";
import HolyGrail from "@/components/HolyGrailWidget.vue";
import { useRouter } from "vue-router";

// Layout
import Layout from "@/layout/index.vue";
import { getLatestContents, searchProduct } from "@/api/products";
import store from "@/store";

const props = defineProps({
  searchTerm: String,
});

interface Pagination {
  page: number;
  page_size: number;
  num_pages: number;
  total_count: number;
}

const pagination = ref<Pagination>({});

const currentPage = ref(pagination.value.page);
const pageCount = ref(pagination.value.num_pages);
const maxDisplayedPageNumbers = 5;
const router = useRouter();
const param = ref("");

const state = reactive({
  products: [],
});

async function fetchSearchData(pageNumber: number | undefined) {
  const pageQueryParam = pageNumber !== undefined ? `&page=${pageNumber}` : "";
  const url = `?keyword=${props.searchTerm}${pageQueryParam}`;

  try {
    const response = await searchProduct(url);
    if (response.status === 200) {
      state.products = response.data.data.products;
      pagination.value = response.data.data.pagination;
    }
    scrollToTop();
  } catch (error) {
    console.log(error);
  }
}

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
    if (props.searchTerm === undefined || props.searchTerm === "") {
      fetchData(currentPage.value);
    } else {
      fetchSearchData(currentPage.value);
    }
  }
}

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    if (props.searchTerm === undefined || props.searchTerm === "") {
      fetchData(currentPage.value);
    } else {
      fetchSearchData(currentPage.value);
    }
  }
}

function goToPage(pageNumber: number) {
  currentPage.value = pageNumber;
  if (props.searchTerm === undefined || props.searchTerm === "") {
    fetchData(pageNumber);
  } else {
    fetchSearchData(pageNumber);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const displayedPageNumbers = computed(() => {
  const startPage = Math.max(currentPage.value - maxDisplayedPageNumbers, 1);
  const endPage = Math.min(
    currentPage.value + maxDisplayedPageNumbers,
    pageCount.value,
  );
  const adjustedStartPage = Math.max(startPage, 1);
  const adjustedEndPage = Math.min(endPage, pageCount.value);

  return Array.from(
    { length: adjustedEndPage - adjustedStartPage + 1 },
    (_, index) => adjustedStartPage + index,
  );
});

onBeforeMount(async () => {
  if (props.searchTerm === undefined || props.searchTerm === "") {
    await fetchData(currentPage.value);
  } else {
    await fetchSearchData(currentPage.value);
  }
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
        <div
          class="navbar rounded-3xl border border-base-300 bg-base-200 shadow-lg"
        >
          <div class="flex-1">
            <a
              @click="
                router.push('/explore').then(() => {
                  router.go(0);
                })
              "
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
        </div>
        <div
          class="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-0"
        >
          <div
            class="flex w-full items-center justify-between border-t border-base-300 lg:w-3/4"
          >
            <div
              class="flex items-center pt-3 text-base-content duration-300 ease-in-out"
              :class="{
                'cursor-pointer hover:text-primary': currentPage !== 1,
                'cursor-not-allowed hover:text-error': currentPage === 1,
              }"
              @click="previousPage"
              :disabled="currentPage === 1"
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
              <p class="ml-3 text-base font-medium leading-none">Previous</p>
            </div>
            <div
              class="hidden sm:flex"
              v-for="pageNumber in displayedPageNumbers"
              :key="pageNumber"
            >
              <p
                class="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-base font-medium leading-none text-base-content duration-300 ease-in-out hover:border-t-primary hover:text-primary"
                @click="goToPage(pageNumber)"
                :class="{
                  'border-t-indigo-400 text-primary':
                    pageNumber === currentPage,
                }"
              >
                {{ pageNumber }}
              </p>
            </div>
            <div
              class="flex items-center pt-3 text-base-content duration-300 ease-in-out"
              :class="{
                'cursor-pointer hover:text-primary': currentPage !== pageCount,
                'cursor-not-allowed hover:text-error':
                  currentPage === pageCount,
              }"
              @click="nextPage"
              :disabled="currentPage === pageCount"
            >
              <p class="mr-3 text-base font-medium leading-none">Next</p>
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
      </div>
    </div>
  </Layout>
</template>
