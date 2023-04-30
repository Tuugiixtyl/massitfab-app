<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";

import CardWidget from "./CardWidget.vue";
import { getProductDetails } from "@/api/products";

const props = defineProps([
  "id",
  "title",
  "description",
  "banner",
  "price",
]);

const modalId = ref(`product-details-${props.id}`);
const subtitle = ref("");
const subtitleWords = ref<string[]>([]);
const gallery = ref<string[]>([]);
const slink = ref<string[]>([]);
const cache = ref({});

const state = reactive({
  title: "",
  description: "",
  owner: "",
  category: "",
  published: "",
  updated: "",
});

const createWord = (text: string): string => {
  const word = `${text} `;
  return word;
};

const createSubtitle = (text: string): void => {
  subtitle.value = text;
  subtitleWords.value = text.split(" ").map(createWord);
};

async function getContentDetails() {
  // Check if the data is already cached
  if (cache.value[props.id]) {
    // If cached data exists, use it directly
    const cachedData = cache.value[props.id];
    state.title = cachedData.title;
    state.description = cachedData.description;
    state.owner = cachedData.owner;
    state.category = cachedData.categories;
    gallery.value = cachedData.gallery;
    slink.value = cachedData.link;
  } else {
    // If data is not cached, fetch it from the API
    await getProductDetails(props.id)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data;
          state.title = data.title;
          state.description = data.description;
          state.owner = data.owner;
          state.category = data.categories;

          gallery.value = data.gallery.map((path: string) => `/hideout${path}`);
          slink.value = data.link;

          // Cache the fetched data for this card
          cache.value[props.id] = {
            title: state.title,
            description: state.description,
            owner: state.owner,
            categories: state.category,
            gallery: gallery.value,
            link: slink.value,
          };
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.clear();
          console.log(error.response.data.message);
        } else {
          console.log(error);
        }
      });
  }
}

onMounted(() => {
  createSubtitle(props.description);
});
</script>
<template>
  <label :for="modalId" @click="getContentDetails">
    <div class="qcard">
      <div class="qcard-content">
        <h3 class="qcard-title">{{ title }}</h3>
        <h4 class="qcard-subtitle h-5/6 overflow-hidden">
          <span
            v-for="(word, index) in subtitleWords"
            :key="index"
            class="qcard-subtitle-word"
            :style="{ transitionDelay: `${index * 40}ms` }"
          >
            {{ word }}
          </span>
        </h4>
      </div>
      <i class="qcard-icon pi pi-lock" style="font-size: 3rem"></i>
      <img
        :src="`/hideout/${banner}`"
        onerror="src='/s404.svg ';"
        class="absolute top-0 h-full w-full object-cover"
      />
    </div>
  </label>
  <CardWidget
    :id="id"
    :title="state.title"
    :description="state.description"
    :owner="state.owner"
    :category="state.category"
    :published="state.published"
    :updated="state.updated"
    :gallery="gallery"
    :slink="slink"
    :price="price"
    :modalId="modalId"
  />
</template>
