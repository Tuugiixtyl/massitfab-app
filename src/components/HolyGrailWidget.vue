<script setup lang="ts">
import { onMounted, ref } from "vue";

import CardWidget from "./CardWidget.vue"

const props = defineProps(["id", "title", "description", "banner", "price"]);

const subtitle = ref("");
const subtitleWords = ref<string[]>([]);

const createWord = (text: string): string => {
  const word = `${text} `;
  return word;
};

const createSubtitle = (text: string): void => {
  subtitle.value = text;
  subtitleWords.value = text.split(" ").map(createWord);
};

onMounted(() => {
  createSubtitle(props.description);
});
</script>
<template>
  <label for="product-details">
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
  <CardWidget v-bind:id="id" />
</template>