<template>
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <label
          tabindex="0"
          class="btn btn-ghost btn-circle"
        >
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
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">MassitFab</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
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
        <label
          tabindex="0"
          class="btn btn-ghost btn-circle mask mask-hexagon"
        >
          <div
            class="mask mask-hexagon max-w-max max-h-auto relative p-5 bg-purple-500 rounded-full overflow-hidden before:content-[''] before:absolute before:bg-gradient-to-r before:from-transparent before:to-sky-400 before:-inset-y-4 before:inset-x-0 before:transition-[0.5s] hover:before:-inset-y-5 hover:before:inset-x-0 before:animate-[spin_3s_linear_infinite] after:content-[''] after:absolute after:inset-3 after:z-10"
          >
            <div
              class="mask mask-hexagon flex absolute inset-1 z-10 overflow-hidden justify-center items-center"
            >
              <img
                class=""
                src="daisy.jpg"
              >
            </div>
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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