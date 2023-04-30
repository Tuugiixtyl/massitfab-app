<script setup lang="ts">
// Layout
import Layout from "@/layout/index.vue";
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div class="z-20 min-h-screen flex-col overflow-hidden p-4 text-2xl">
        <!-- component -->
        <section
          class="mx-auto mt-20 max-w-4xl rounded-md border bg-base-100 p-6 shadow-md"
        >
          <h2 class="text-lg font-semibold capitalize text-base-content">
            Account settings
          </h2>

          <form>
            <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-base">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input-bordered input w-full max-w-xs"
                />
              </div>

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-base">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  class="input-bordered input w-full max-w-xs"
                />
              </div>

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-base">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  class="input-bordered input w-full max-w-xs"
                />
              </div>

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-base"
                    >Password Confirmation</span
                  >
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  class="input-bordered input w-full max-w-xs"
                />
              </div>
            </div>

            <div class="mt-6 flex justify-end">
              <button class="btn gap-2">
                Save
                <i class="pi pi-save"></i>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </Layout>
</template>
