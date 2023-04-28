<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

const props = defineProps([
  "id",
  "title",
  "description",
  "owner",
  "category",
  "published",
  "updated",
  "gallery",
  "slink",
  "price",
  "modalId",
]);

const selectedProduct = ref({
  title: props.title,
  description: props.description,
  gallery: props.gallery,
  slink: props.slink,
});

onBeforeMount(() => {
  selectedProduct.value = {
    title: props.title,
    description: props.description,
    gallery: props.gallery,
    slink: props.slink,
  };
});
</script>
<template>
  <input type="checkbox" class="modal-toggle" :id="modalId" />
  <label :for="modalId" class="modal z-50 cursor-pointer">
    <label
      class="max-h-11/12 card modal-box relative w-11/12 max-w-5xl bg-base-100 shadow-xl"
      for=""
    >
      <div class="carousel rounded-box h-screen">
        <div
          class="carousel-item w-full duration-700 ease-in-out"
          v-for="(img, index) in gallery"
          :key="index"
        >
          <img
            :src="`${img}`"
            class="w-full object-cover"
            :alt="`image ${index}`"
          />
        </div>
      </div>

      <div class="card-body break-all">
        <label
          class="btn-outline btn-sm btn -ml-8 mb-5 w-28 gap-2"
          :for="modalId"
        >
          <i class="pi pi-arrow-left"></i>
          Back
        </label>
        <h2 class="card-title text-5xl">{{ title }}</h2>
        <p class="text-xl">{{ description }}</p>
        {{ slink }}
        <div class="card-actions justify-center md:justify-end">
          <button class="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </label>
  </label>
</template>
