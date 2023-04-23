<script setup lang="ts">
import { reactive, ref, computed, onMounted } from "vue";
import { getCategories } from "@/api/products"

// Layout
import Layout from "../layout/index.vue";
import MultiFileUpload from "../components/FileUploadWidget.vue";

interface Subcategory {
  id: number;
  subcategory: string;
}

interface Category {
  id: number;
  category: string;
  subcategories: Subcategory[];
}

interface Image {
  name: string;
  url: string;
}

const hashtagsInput = ref("");
const categories = ref<Category[]>([])
const selectedCategory = ref<number | null>(null)
const selectedSubcategory = ref<number | null>(null)
const resource = ref<Image[]>([]);

const state = reactive({
  data: {
    title: "",
    description: "",
    subcategory_id: null,
    st_price: null,
    source: "",
  },
  images_uploaded: null,
});

// Use computed property to automatically group the hashtags
const hashtagGroups = computed(() => {
  const hashtags = hashtagsInput.value
    .split(",")
    .map((hashtag) => hashtag.trim());

  const groups: any[] = [];

  hashtags.forEach((hashtag) => {
    const existingGroup = groups.find((group) => group.includes(hashtag));
    if (existingGroup) {
      return;
    }

    const newGroup = [hashtag];

    groups.forEach((group) => {
      if (
        group !== newGroup &&
        group.some((element: string) => newGroup.includes(element))
      ) {
        newGroup.push(...group);
        groups.splice(groups.indexOf(group), 1);
      }
    });
    groups.push(newGroup);
  });
  return groups;
});

function storeImages(storeValue: any) {
  resource.value.push(storeValue.data);
  state.images_uploaded = storeValue.total;
  return
}

function applyCategories() {
  getCategories()
    .then((response) => {
      if (response.status === 200) {
        const categoriesData = response.data.data.categories;
        for (let i = 0; i < categoriesData.length; i++) {
          const category = categoriesData[i];
          const subcategories = category.subcategories;
          const subcategoriesArray: Subcategory[] = [];
          for (const [id, subcategory] of Object.entries(subcategories)) {
            subcategoriesArray.push({ id: parseInt(id), subcategory });
          }
          categories.value.push({ id: category.id, category: category.category, subcategories: subcategoriesArray });
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateSelectedCategory(value: number | null) {
  selectedCategory.value = value
  selectedSubcategory.value = null
}

function updateSelectedSubcategory(value: number | null) {
  selectedSubcategory.value = value
}

onMounted(() => {
  applyCategories();
})

const selectedCategoryObj = computed(() => {
  if (selectedCategory.value !== null) {
    return categories.value.find(cat => cat.id === selectedCategory.value) || { subcategories: [] }
  } else {
    return { subcategories: [] }
  }
})
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div class="z-20 min-h-screen flex-col overflow-hidden p-4 text-2xl drop-shadow-md">
        <!-- component -->
        <div class="flex min-h-screen items-center justify-center bg-base-200 p-6">
          <div class="container mx-auto max-w-screen-lg">
            <div>
              <h2 class="text-xl font-semibold">Upload Form</h2>
              <p class="mb-6 text-gray-500">
                Upload anything you want to share with others ^_^
              </p>

              <div class="mb-6 rounded bg-base-100 p-4 px-4 shadow-lg md:p-8">
                <div class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
                  <div>
                    <p class="text-lg font-medium">Product/Content Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div class="lg:col-span-2">
                    <div class="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                      <div class="md:col-span-5">
                        <div>
                          <select v-model="selectedCategory">
                            <option value="">Select a category</option>
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{
                              category.category }}</option>
                          </select>

                          <select v-if="selectedCategory" v-model="selectedSubcategory">
                            <option value="">Select a subcategory</option>
                            <option v-for="subcat in selectedCategoryObj.subcategories" :key="subcat.id"
                              :value="subcat.id">
                              {{ subcat.subcategory }}</option>
                          </select>
                        </div>
                      </div>
                      <!-- Title -->
                      <div class="md:col-span-5">
                        <label class="label">
                          <span class="label-text">Title</span>
                        </label>
                        <input v-model="state.data.title" type="text" placeholder="Type here"
                          class="input-bordered input w-full" />
                      </div>
                      <!-- Description -->
                      <div class="md:col-span-5">
                        <label class="label">
                          <span class="label-text">Description</span>
                        </label>
                        <textarea v-model="state.data.description" placeholder="Description"
                          class="textarea-bordered textarea textarea-md w-full"></textarea>
                      </div>
                      <!-- Upload Files -->
                      <div class="md:col-span-5">
                        <label for="upload-files" class="btn-outline btn-block btn">
                          <i class="pi pi-images pr-2" style="font-size: 1rem"></i>
                          Upload Images</label>
                      </div>
                      <!-- Categories -->
                      <div class="md:col-span-4">
                        <label class="label -mt-2">
                          <span class="label-text">Categories</span>
                        </label>
                        <div class="flex">
                          <label for="categories" class="sr-only">Choose a state</label>
                          <select id="categories"
                            class="z-10 inline-flex flex-shrink-0 items-start rounded-l-lg border bg-base-100 py-2.5 text-start text-sm font-medium">
                            <option selected>- Choose a category</option>
                            <option value="CA">California</option>
                            <option value="TX">Texas</option>
                          </select>
                          <label for="subcategories" class="sr-only">Choose a subcategory</label>
                          <select id="subcategories"
                            class="border-l-1 block w-full rounded-r-lg border bg-base-100 p-2.5 text-sm">
                            <option selected>- Choose a subcategory</option>
                            <option value="CA">California</option>
                            <option value="TX">Texas</option>
                            <option value="WH">Washinghton</option>
                            <option value="FL">Florida</option>
                            <option value="VG">Virginia</option>
                            <option value="GE">Georgia</option>
                            <option value="MI">Michigan</option>
                          </select>
                        </div>
                      </div>
                      <!-- Price -->
                      <div class="md:col-span-1">
                        <div>
                          <label for="price" class="mb-2 block text-sm font-medium">Price</label>
                          <input v-model="state.data.st_price" type="number" id="price"
                            class="block w-full rounded-lg border bg-base-100" placeholder="0.0000" required />
                        </div>
                      </div>
                      <!-- Sources -->
                      <div class="md:col-span-5">
                        <label hashtags class="label">
                          <span class="label-text">Links/Sources:</span>
                        </label>
                        <textarea id="hashtags" v-model="hashtagsInput" class="textarea-bordered textarea w-full"
                          placeholder="Enter links/sources separated by commas"></textarea>
                        <div v-if="hashtagGroups.length">
                          <p>Grouped View:</p>
                          <ul>
                            <li v-for="group in hashtagGroups" :key="group">
                              <span>·-</span>
                              <span v-for="(hashtag, index) in group" :key="index">
                                {{ hashtag }}
                                <span v-if="index !== group.length - 1">,
                                </span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="text-right md:col-span-5">
                        <div class="inline-flex items-end">
                          <button class="btn-accent btn gap-2">
                            Upload
                            <i class="pi pi-send"></i>
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
    <input type="checkbox" id="upload-files" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl bg-base-200">
        <MultiFileUpload @storeImages="storeImages" />
      </div>
    </div>
  </Layout>
</template>
