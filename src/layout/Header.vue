<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from "vue-router";

// Store
import store from "../store";

// Utils
import { destroyToken } from "../utils/cookie_helper";

const router = useRouter();

function logout() {
  store.setIsLoggedIn(false);

  destroyToken("access-token");

  router.push("/");
}
</script>
<template>
  <ul class="navbar sticky top-0 z-50 bg-base-200">
    <li class="navbar-start flex lg:hidden">
      <div class="dropdown">
        <label tabindex="0" class="btn-ghost btn-circle btn">
          <input type="checkbox" class="hidden" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
        >
          <li><a @click="router.push('/')">Homepage</a></li>
          <li><a @click="router.push('/features')">Features</a></li>
          <li><a @click="router.push('/explore')">Explore</a></li>
        </ul>
      </div>
      <div class="hidden sm:block lg:hidden">
        <a
          class="btn-ghost btn animate-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-xl normal-case text-transparent"
          >MassitFab</a
        >
      </div>
    </li>
    <li class="navbar-center hidden lg:navbar-start lg:block">
      <a
        @click="router.push('/')"
        class="btn-ghost btn animate-text bg-gradient-to-br from-base-content via-secondary to-accent-content bg-clip-text text-xl normal-case text-transparent hover:scale-110 hover:animate-pulse"
      >
        MassitFab
      </a>
      <a
        @click="router.push('/features')"
        class="btn-ghost btn animate-text bg-gradient-to-r from-base-content via-info to-success-content bg-clip-text text-lg normal-case text-transparent"
      >
        <span class="link-underline link-underline-black"> Features </span>
      </a>
      <a
        @click="router.push('/explore')"
        class="btn-ghost btn animate-text bg-gradient-to-r from-base-content via-info to-success-content bg-clip-text text-lg normal-case text-transparent"
      >
        <span class="link-underline link-underline-black"> Explore </span>
      </a>
    </li>
    <li class="navbar-end space-x-2">
      <div class="form-control">
        <div class="input-group">
          <input
            type="text"
            placeholder="Search…"
            class="input-bordered input"
          />
          <button class="btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="store.isLoggedIn"
        class="dropdown dropdown-end hidden sm:dropdown-content sm:inline-block"
      >
        <label tabindex="0" class="btn-ghost btn-circle btn">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="card dropdown-content card-compact mt-3 w-52 bg-base-200 shadow"
        >
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn-primary btn-block btn">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="store.isLoggedIn" class="dropdown dropdown-end">
        <label tabindex="0" class="mask btn-ghost mask-hexagon btn-circle btn">
          <div
            class="max-h-auto mask mask-hexagon relative max-w-max overflow-hidden rounded-full bg-primary p-5 before:absolute before:-inset-y-4 before:inset-x-0 before:animate-[spin_3s_linear_infinite] before:bg-gradient-to-r before:from-transparent before:to-secondary before:transition-[0.5s] before:content-[''] after:absolute after:inset-3 after:z-10 after:content-[''] hover:before:-inset-y-5 hover:before:inset-x-0"
          >
            <div
              class="mask mask-hexagon absolute inset-1 z-10 flex items-center justify-center overflow-hidden"
            >
              <img :src="`/hideout/${store.userData.profilePic}`" />
            </div>
          </div>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
        >
          <li>
            <a
              class="justify-between"
              @click="router.push(`/profile/${store.userData.username}`)"
            >
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a @click="router.push('/settings')">Settings</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
      <a v-else class="btn" @click="router.push('/join')">JOIN</a>
    </li>
  </ul>
</template>
<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(hsl(var(--bc)), hsl(var(--bc)));
}

.link-underline:hover {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
