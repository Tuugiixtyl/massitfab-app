<script setup lang="ts">
// Layout
import Layout from "../layout/index.vue";
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div class="z-20 min-h-screen flex-col overflow-hidden p-4 text-2xl">
        <!-- component -->
        <div
          class="flex min-h-screen items-center justify-center bg-base-300 p-6"
        >
          <div class="container mx-auto max-w-screen-lg">
            <div>
              <h2 class="text-xl font-semibold text-gray-600">Upload Form</h2>
              <p class="mb-6 text-gray-500">
                Upload anything you want to share with others ^_^
              </p>

              <div class="mb-6 rounded bg-base-200 p-4 px-4 shadow-lg md:p-8">
                <div
                  class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3"
                >
                  <div class="text-gray-600">
                    <p class="text-lg font-medium">Product/Content Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div class="lg:col-span-2">
                    <div
                      class="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5"
                    >
                      <div class="md:col-span-5">
                        <label class="label">
                          <span class="label-text">Title</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input-bordered input w-full"
                        />
                      </div>

                      <div class="md:col-span-5">
                        <label class="label">
                          <span class="label-text">Description</span>
                        </label>
                        <textarea
                          placeholder="Description"
                          class="textarea-bordered textarea textarea-md w-full"
                        ></textarea>
                      </div>

                      <div class="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          class="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                          value=""
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="city">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          class="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                          value=""
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="country">Country / region</label>
                        <div
                          class="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50"
                        >
                          <input
                            name="country"
                            id="country"
                            placeholder="Country"
                            class="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                            value=""
                          />
                          <button
                            tabindex="-1"
                            class="cursor-pointer text-gray-300 outline-none transition-all hover:text-red-600 focus:outline-none"
                          >
                            <svg
                              class="mx-2 h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button
                            tabindex="-1"
                            for="show_more"
                            class="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-blue-600 focus:outline-none"
                          >
                            <svg
                              class="mx-2 h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="state">State / province</label>
                        <div
                          class="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50"
                        >
                          <input
                            name="state"
                            id="state"
                            placeholder="State"
                            class="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                            value=""
                          />
                          <button
                            tabindex="-1"
                            class="cursor-pointer text-gray-300 outline-none transition-all hover:text-red-600 focus:outline-none"
                          >
                            <svg
                              class="mx-2 h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button
                            tabindex="-1"
                            for="show_more"
                            class="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-blue-600 focus:outline-none"
                          >
                            <svg
                              class="mx-2 h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="md:col-span-1">
                        <label for="zipcode">Zipcode</label>
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          class="mt-1 flex h-10 w-full items-center rounded border bg-gray-50 px-4 transition-all"
                          placeholder=""
                          value=""
                        />
                      </div>

                      <div class="md:col-span-5">
                        <div class="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="billing_same"
                            id="billing_same"
                            class="form-checkbox"
                          />
                          <label for="billing_same" class="ml-2"
                            >My billing address is different than above.</label
                          >
                        </div>
                      </div>

                      <div class="md:col-span-2">
                        <label for="soda">How many soda pops?</label>
                        <div
                          class="mt-1 flex h-10 w-28 items-center rounded border border-gray-200 bg-gray-50"
                        >
                          <button
                            tabindex="-1"
                            for="show_more"
                            class="cursor-pointer border-r border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="mx-2 h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                          <input
                            name="soda"
                            id="soda"
                            placeholder="0"
                            class="w-full appearance-none bg-transparent px-2 text-center text-gray-800 outline-none"
                            value="0"
                          />
                          <button
                            tabindex="-1"
                            for="show_more"
                            class="cursor-pointer border-l border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="mx-2 h-4 w-4 fill-current"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="text-right md:col-span-5">
                        <div class="inline-flex items-end">
                          <button
                            class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
