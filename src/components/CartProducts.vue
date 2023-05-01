<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["products"]);
const emit = defineEmits(["product"]);

function removeProduct(id: number, index: number) {
  emit("product", {
    product_id: id,
    index: index,
  });
}
</script>
<template>
  <div
    v-for="(product, index) in products"
    :key="index"
    class="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8"
  >
    <div class="w-full md:w-4/12 2xl:w-1/4">
      <img
        :src="`/hideout/${product.min}`"
        :alt="`${product.title} - ${index}`"
        class="hidden h-full object-cover object-center md:block"
      />
      <img
        :src="`/hideout/${product.min}`"
        :alt="`${product.title} - ${index}`"
        class="h-full w-full object-cover object-center md:hidden"
      />
    </div>
    <div class="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4">
      <div class="flex w-full items-center justify-between pt-1">
        <p class="text-3xl font-black leading-none text-gray-800">
          {{ index + 1 }}. {{ product.title }}
        </p>
        <p class="text-3xl font-black leading-none text-gray-800">
          <i class="pi pi-money-bill" /> ${{ product.st_price }}
        </p>
      </div>
      <div class="flex items-center justify-between pt-5">
        <div class="itemms-center flex">
          <p class="cursor-pointer text-xs leading-3 text-gray-800 underline">
            Add to favorites
          </p>
          <p
            class="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline"
            @click="removeProduct(product.id, index)"
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
