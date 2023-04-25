<script setup lang="ts">
import { onBeforeMount, ref, reactive } from "vue";
import { getProductDetails } from "@/api/products";

const props = defineProps(["id"]);

const gallery = ref([]);
const slink = ref([]);

const state = reactive({
  title: "",
  description: "",
  owner: "",
  category: "",
  published: "",
  updated: "",
});

async function getContentDetails() {
  await getProductDetails(props.id)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data.data;
        state.title = data.title;
        state.description = data.description;
        state.owner = data.owner;
        state.category = data.categories;

        gallery.value = gallery.value.concat(
          data.gallery.map((path: string) => "/hideout" + path),
        );
        slink.value = [...slink.value, ...data.link];
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

onBeforeMount(() => {
  getContentDetails();
});
</script>
<template>
  <input type="checkbox" id="product-details" class="modal-toggle" />
  <label for="product-details" class="modal z-50 cursor-pointer">
    <label
      class="max-h-11/12 card modal-box relative w-11/12 max-w-5xl bg-base-100 shadow-xl"
      for=""
    >
      {{ id }}
      <img :src="gallery[0]" alt="image" class="rounded-lg" />
      <div class="card-body">
        <label
          class="btn-outline btn-sm btn -ml-8 mb-5 w-28 gap-2"
          for="product-details"
        >
          <i class="pi pi-arrow-left"></i>
          Back
        </label>
        <h2 class="card-title">{{ state.title }}</h2>
        <p>{{ state.description }}</p>
        <p>{{ state }}</p>
        <p>{{ gallery }}</p>
        <p>{{ slink }}</p>
        <div class="card-actions justify-end">
          <button class="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </label>
  </label>
</template>
