<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

// Api
import { toggleWishlist, cartToggle } from "@/api/products";

// Store
import store from "@/store";

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

const wishlisted = ref(false);
const in_cart = ref(false);
const selectedProduct = ref({
  title: props.title,
  description: props.description,
  gallery: props.gallery,
  slink: props.slink,
});

async function toggleWishlisting() {
  const formData = new FormData();
  formData.append("product_id", props.id);
  await toggleWishlist(formData)
    .then((response) => {
      wishlisted.value = response.status === 201 ? true : false;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function toggleCartListing() {
  await cartToggle(props.id)
    .then((response) => {
      if (response.status === 201) {
        in_cart.value = true;
        store.cartlist.TotalInCart++;

        const subtotal = Number(store.cartlist.cartSubtotal);
        const price = Number(props.price);
        if (!isNaN(subtotal) && !isNaN(price)) {
          store.cartlist.cartSubtotal = subtotal + price;
        }
      } else {
        in_cart.value = false;
        store.cartlist.TotalInCart--;

        const subtotal = Number(store.cartlist.cartSubtotal);
        const price = Number(props.price);
        if (!isNaN(subtotal) && !isNaN(price)) {
          store.cartlist.cartSubtotal = subtotal - price;
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

onBeforeMount(() => {
  selectedProduct.value = {
    title: props.title,
    description: props.description,
    gallery: props.gallery,
    slink: props.slink,
  };
  if (store.isLoggedIn) {
    const wishlistData = store.wishlist;
    const inCartData = store.cartlist.in_cart;

    if (wishlistData && wishlistData.some((item) => item.id === props.id)) {
      wishlisted.value = true;
    }

    if (inCartData && inCartData.some((item) => item.id === props.id)) {
      in_cart.value = true;
    }
  }
});
</script>
<template>
  <input type="checkbox" class="modal-toggle" :id="modalId" />
  <label :for="modalId" class="modal z-50 cursor-pointer">
    <label
      class="max-h-11/12 card modal-box relative w-11/12 max-w-5xl bg-base-100 shadow-xl duration-300"
      for=""
    >
      <div class="max-h-min">
        <div class="carousel rounded-box h-80">
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
      </div>

      <div class="card-body break-all">
        <label class="btn-outline btn-sm btn mb-5 w-28 gap-2" :for="modalId">
          <i class="pi pi-arrow-left"></i>
          Back
        </label>
        <div v-if="store.isLoggedIn" class="fixed right-14 -mt-1 space-x-2">
          <button class="btn-outline btn-circle btn" @click="toggleCartListing">
            <i v-if="!in_cart" class="pi pi-shopping-cart" />
            <i v-else class="pi pi-times" />
          </button>
          <button class="btn-outline btn-circle btn" @click="toggleWishlisting">
            <i v-if="!wishlisted" class="pi pi-bookmark" />
            <i v-else class="pi pi-bookmark-fill" />
          </button>
        </div>
        <h2 class="card-title text-5xl">{{ title }}</h2>
        <p class="text-xl">{{ description }}</p>
        <div class="card-actions justify-center md:justify-end">
          <div class="badge-outline badge my-auto p-4 text-3xl">
            <i class="pi pi-money-bill mr-2" />${{ price }}
          </div>
          <button class="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </label>
  </label>
</template>
