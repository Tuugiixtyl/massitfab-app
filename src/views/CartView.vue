<script setup lang="ts">
// import { ref, onMounted } from "vue";

// Layout
import Layout from "../layout/index.vue";

// const show = ref(false);
// const text = ref("Sort by");
// const search = ref(true);
// const windowWidth = ref(window.innerWidth);

// function checkoutHandler(flag3: boolean) {
//   const checkout = document.getElementById("checkout");
//   const checdiv = document.getElementById("chec-div");
//   if (!flag3) {
//     checkout.classList.add("translate-x-full");
//     checkout.classList.remove("translate-x-0");
//     setTimeout(function () {
//       checdiv.classList.add("hidden");
//     }, 1000);
//     flag3 = true;
//   } else {
//     setTimeout(function () {
//       checkout.classList.remove("translate-x-full");
//       checkout.classList.add("translate-x-0");
//     }, 1000);
//     checdiv.classList.remove("hidden");
//     flag3 = false;
//   }
// }

// onMounted(() => {
//   window.addEventListener("resize", () => {
//     windowWidth.value = window.innerWidth;
//   });
// });
</script>
<template>
  <Layout>
    <div class="overflow-hidden">
      <div
        class="h-full w-full overflow-y-auto overflow-x-hidden bg-opacity-90"
        id="chec-div"
      >
        <div
          class="h-full w-full transform overflow-x-hidden transition duration-700 ease-in-out"
          id="checkout"
        >
          <div
            class="flex flex-col items-end justify-center lg:flex-row"
            id="cart"
          >
            <div
              class="h-auto w-full overflow-y-auto overflow-x-hidden bg-white px-4 py-4 md:px-6 md:py-8 lg:h-screen lg:w-full lg:px-8 lg:py-14"
              id="scroll"
            >
              <p
                class="pt-3 text-3xl font-black leading-10 text-gray-800 lg:text-4xl"
              >
                Cart
              </p>
              <div
                class="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8"
              >
                <div class="w-full md:w-4/12 2xl:w-1/4">
                  <img
                    src="https://i.ibb.co/SX762kX/Rectangle-36-1.png"
                    alt="Black Leather Bag"
                    class="hidden h-full object-cover object-center md:block"
                  />
                  <img
                    src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg"
                    alt="Black Leather Bag"
                    class="h-full w-full object-cover object-center md:hidden"
                  />
                </div>
                <div
                  class="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4"
                >
                  <p class="pt-4 text-xs leading-3 text-gray-800 md:pt-0">
                    RF293
                  </p>
                  <div class="flex w-full items-center justify-between pt-1">
                    <p class="text-base font-black leading-none text-gray-800">
                      North wolf bag
                    </p>
                    <select
                      aria-label="Select quantity"
                      class="mr-6 border border-gray-200 px-1 py-2 focus:outline-none"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p class="pt-2 text-xs leading-3 text-gray-600">
                    Height: 10 inches
                  </p>
                  <p class="py-4 text-xs leading-3 text-gray-600">
                    Color: Black
                  </p>
                  <p class="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div class="flex items-center justify-between pt-5">
                    <div class="itemms-center flex">
                      <p
                        class="cursor-pointer text-xs leading-3 text-gray-800 underline"
                      >
                        Add to favorites
                      </p>
                      <p
                        class="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline"
                      >
                        Remove
                      </p>
                    </div>
                    <p class="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8"
              >
                <div class="w-full md:w-4/12 2xl:w-1/4">
                  <img
                    src="https://i.ibb.co/c6KyDXN/Rectangle-5-1.png"
                    alt="Gray Sneakers"
                    class="hidden h-full object-cover object-center md:block"
                  />
                  <img
                    src="https://i.ibb.co/yVSpYqx/Rectangle-6.png"
                    alt="Gray Sneakers"
                    class="h-full w-full object-cover object-center md:hidden"
                  />
                </div>
                <div
                  class="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4"
                >
                  <p class="pt-4 text-xs leading-3 text-gray-800 md:pt-0">
                    RF293
                  </p>
                  <div class="flex w-full items-center justify-between pt-1">
                    <p class="text-base font-black leading-none text-gray-800">
                      LW sneakers
                    </p>
                    <select
                      aria-label="Select quantity"
                      class="mr-6 border border-gray-200 px-1 py-2 focus:outline-none"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p class="pt-2 text-xs leading-3 text-gray-600">
                    Height: 10 inches
                  </p>
                  <p class="py-4 text-xs leading-3 text-gray-600">
                    Color: Black
                  </p>
                  <p class="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div class="flex items-center justify-between pt-5">
                    <div class="itemms-center flex">
                      <p
                        class="cursor-pointer text-xs leading-3 text-gray-800 underline"
                      >
                        Add to favorites
                      </p>
                      <p
                        class="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline"
                      >
                        Remove
                      </p>
                    </div>
                    <p class="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8"
              >
                <div class="w-full md:w-4/12 2xl:w-1/4">
                  <img
                    src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                    alt="Black Leather Purse"
                    class="hidden h-full object-cover object-center md:block"
                  />
                  <img
                    src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                    alt="Black Leather Purse"
                    class="h-full w-full object-cover object-center md:hidden"
                  />
                </div>
                <div
                  class="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4"
                >
                  <p class="pt-4 text-xs leading-3 text-gray-800 md:pt-0">
                    RF293
                  </p>
                  <div class="flex w-full items-center justify-between">
                    <p class="text-base font-black leading-none text-gray-800">
                      Luxe card holder
                    </p>
                    <select
                      aria-label="Select quantity"
                      class="mr-6 border border-gray-200 px-1 py-2 focus:outline-none"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p class="pt-2 text-xs leading-3 text-gray-600">
                    Height: 10 inches
                  </p>
                  <p class="py-4 text-xs leading-3 text-gray-600">
                    Color: Black
                  </p>
                  <p class="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div class="flex items-center justify-between pt-5">
                    <div class="itemms-center flex">
                      <p
                        class="cursor-pointer text-xs leading-3 text-gray-800 underline"
                      >
                        Add to favorites
                      </p>
                      <p
                        class="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline"
                      >
                        Remove
                      </p>
                    </div>
                    <p class="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full w-full bg-gray-100 lg:w-96">
              <div
                class="flex h-auto flex-col justify-between overflow-y-auto px-4 py-6 md:px-7 md:py-10 lg:h-screen lg:px-8 lg:py-20"
              >
                <div>
                  <p
                    class="text-3xl font-black leading-9 text-gray-800 lg:text-4xl"
                  >
                    Summary
                  </p>
                  <div class="flex items-center justify-between pt-16">
                    <p class="text-base leading-none text-gray-800">Subtotal</p>
                    <p class="text-base leading-none text-gray-800">$9,000</p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800">Shipping</p>
                    <p class="text-base leading-none text-gray-800">$30</p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800">Tax</p>
                    <p class="text-base leading-none text-gray-800">$35</p>
                  </div>
                </div>
                <div>
                  <div
                    class="flex items-center justify-between pb-6 pt-20 lg:pt-5"
                  >
                    <p class="text-2xl leading-normal text-gray-800">Total</p>
                    <p
                      class="text-right text-2xl font-bold leading-normal text-gray-800"
                    >
                      $10,240
                    </p>
                  </div>
                  <button
                    onclick="checkoutHandler1(true)"
                    class="w-full border border-gray-800 bg-gray-800 py-5 text-base leading-none text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
/* width */

#scroll::-webkit-scrollbar {
  width: 1px;
}

/* Track */

#scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */

#scroll::-webkit-scrollbar-thumb {
  background: rgb(133, 132, 132);
}
</style>
