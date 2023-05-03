<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["subtotal"]);

// Store
import store from "@/store";

// Api
import { cartCheckout } from "@/api/products";
import router from "@/router";

async function checkout() {
  await cartCheckout()
    .then((response) => {
      if (response.status === 202) {
        router.go(0);
      } else {
        console.log("insufficient balance");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template>
  <div class="h-full w-full bg-base-200 lg:w-96">
    <div
      class="flex h-auto flex-col justify-between overflow-y-auto px-4 py-6 md:px-7 md:py-10 lg:h-screen lg:px-8 lg:py-20"
    >
      <div>
        <p class="text-3xl font-black leading-9 lg:text-4xl">Summary</p>
        <div class="flex items-center justify-between pt-16">
          <p class="text-base leading-none">Subtotal</p>
          <p class="text-base leading-none">${{ subtotal }}</p>
        </div>
        <div class="flex items-center justify-between pt-5">
          <p class="text-base leading-none">Discount</p>
          <p class="text-base leading-none">$0</p>
        </div>
        <div class="flex items-center justify-between pt-5">
          <p class="text-base leading-none">Special Offer</p>
          <p class="text-base leading-none">$0</p>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between pt-20 lg:pt-5">
          <p class="text-2xl leading-normal">Your balance</p>
          <p class="text-right text-2xl font-bold leading-normal">
            ${{ store.userData.balance }}
          </p>
        </div>
        <div class="flex items-center justify-between pb-6">
          <p class="text-2xl leading-normal">Total</p>
          <p class="text-right text-2xl font-bold leading-normal">
            ${{ subtotal }}
          </p>
        </div>
        <button @click="checkout" class="btn-info btn-wide btn">
          <i class="pi pi-check-square pr-2" /> Checkout
        </button>
      </div>
    </div>
  </div>
</template>
