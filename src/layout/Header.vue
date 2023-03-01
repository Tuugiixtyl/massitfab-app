<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
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
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden sm:block">
      <a
        class="btn-ghost btn animate-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-xl normal-case text-transparent"
        >MassitFab</a
      >
    </div>
    <div class="navbar-end">
      <button class="btn-ghost btn-circle btn">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="mask btn-ghost mask-hexagon btn-circle btn">
          <div
            class="max-h-auto mask mask-hexagon relative max-w-max overflow-hidden rounded-full bg-primary p-5 before:absolute before:-inset-y-4 before:inset-x-0 before:animate-[spin_3s_linear_infinite] before:bg-gradient-to-r before:from-transparent before:to-secondary before:transition-[0.5s] before:content-[''] after:absolute after:inset-3 after:z-10 after:content-[''] hover:before:-inset-y-5 hover:before:inset-x-0"
          >
            <div
              class="mask mask-hexagon absolute inset-1 z-10 flex items-center justify-center overflow-hidden"
            >
              <img class="sepia" src="daisy.jpg" />
            </div>
          </div>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
