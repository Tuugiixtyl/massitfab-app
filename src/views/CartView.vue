<script setup lang="ts">
import { ref, onMounted } from "vue";
import { showToast } from "@/utils/toast_helper";

// Store
import store from "@/store";

// Layout
import Layout from "@/layout/index.vue";
import CartSummary from "@/components/CartSummary.vue";
import CartProducts from "@/components/CartProducts.vue";

// Api
import { cartToggle } from "@/api/products";

const products = ref([]);
const subtotal = ref<number>();

async function removeFromCart(removeFromCartValues: {
  product_id: number;
  index: number;
}) {
  await cartToggle(removeFromCartValues.product_id)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response;

        showToast(data.message, "success", 3000);
        products.value.splice(removeFromCartValues.index, 1);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  products.value = store.cartlist.in_cart;
  subtotal.value = store.cartlist.cartSubtotal;
});
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
              class="h-auto w-full overflow-y-auto overflow-x-hidden px-4 py-4 md:px-6 md:py-8 lg:h-screen lg:w-full lg:px-8 lg:py-14"
              id="scroll"
            >
              <p class="pt-3 text-3xl font-black leading-10 lg:text-4xl">
                Cart
              </p>
              <CartProducts :products="products" @product="removeFromCart" />
            </div>
            <CartSummary :subtotal="subtotal" />
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
