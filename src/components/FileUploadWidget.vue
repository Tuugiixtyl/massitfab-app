<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits(["storeImages"]);

interface Image {
  name: string;
  url: string;
  file: File;
}

const images = ref<Image[]>([]);

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    for (let i = 0; i < input.files.length; i++) {
      const file = input.files[i];
      const url = URL.createObjectURL(file);
      const existingImage = images.value.find(
        (image) => image.name === file.name && image.url === url,
      );
      if (!existingImage) {
        images.value.push({ name: file.name, url, file });
      }
    }
  }
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  const files = event.dataTransfer?.files;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      images.value.push({ name: file.name, url, file });
    }
  }
};

const removeImage = (index: number) => {
  images.value.splice(index, 1);
};

function formatFileSize(size: number): string {
  if (size < 1024) {
    return size + " B";
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(1) + " KB";
  } else {
    return (size / (1024 * 1024)).toFixed(1) + " MB";
  }
}

watch(
  () => images.value.length,
  (value) => {
    emit("storeImages", {
      data: images,
      total: value,
    });
  },
);
</script>

<template>
  <div>
    <main class="max-w-screen container mx-auto h-full">
      <!-- file upload modal -->
      <article
        aria-label="File Upload Modal"
        class="relative flex h-full flex-col rounded-3xl border bg-base-100 shadow-xl duration-300 ease-in-out hover:border-base-content"
      >
        <!-- overlay -->
        <section class="flex h-full w-full flex-col overflow-auto p-8">
          <div class="flex w-full items-center justify-center">
            <label
              @dragover.prevent
              @drop="handleDrop"
              for="dropzone-file"
              class="dropzone flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-base-100 hover:bg-base-300"
              multiple
              accept="image/png, image/gif, image/jpeg, image/jfif, image/ico, image/jpg"
            >
              <div class="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  aria-hidden="true"
                  class="mb-3 h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                multiple
                @change="handleImageUpload"
                ref="imageInput"
                accept="image/png, image/gif, image/jpeg, image/jfif, image/ico, image/jpg"
              />
            </label>
          </div>

          <h1 class="pb-3 pt-8 font-semibold sm:text-lg">To Upload</h1>

          <ul id="gallery" class="-m-1 flex flex-1 flex-wrap">
            <li
              v-if="images.length === 0"
              id="empty"
              class="flex h-full w-full flex-col items-center justify-center text-center"
            >
              <img
                class="mx-auto w-32"
                src="/uploaded_files.png"
                alt="no data"
              />
              <span class="text-small">No files selected</span>
            </li>
            <!-- image template -->
            <li
              v-for="(image, index) in images"
              :key="index"
              class="xl:w-1/8 block h-24 w-1/2 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <article
                tabindex="0"
                class="hasImage focus:shadow-outline group relative h-full w-full cursor-pointer rounded-md bg-gray-100 text-transparent shadow-sm hover:text-white focus:outline-none"
              >
                <img
                  class="img-preview sticky h-full w-full rounded-md bg-fixed object-cover"
                  :src="image.url"
                  :alt="image.name"
                />

                <section
                  class="absolute top-0 z-20 flex h-full w-full flex-col break-words rounded-md px-3 py-2 text-xs"
                >
                  <h1 class="flex-1"></h1>
                  <div class="flex">
                    <span class="p-1">
                      <i>
                        <svg
                          class="pt- ml-auto h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"
                          />
                        </svg>
                      </i>
                    </span>

                    <p class="p-1 text-xs"></p>
                    <button
                      @click="removeImage(index)"
                      class="ml-auto rounded-md p-1 hover:bg-gray-300 focus:outline-none"
                    >
                      <svg
                        class="pointer-events-none ml-auto h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          class="pointer-events-none"
                          d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                        />
                      </svg>
                    </button>
                  </div>
                </section>
              </article>
            </li>
            <!-- file template -->
            <!-- <li
              class="xl:w-1/8 block h-24 w-1/2 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <article
                tabindex="0"
                class="focus:shadow-outline elative group relative h-full w-full cursor-pointer rounded-md bg-gray-100 shadow-sm focus:outline-none"
              >
                <img
                  alt="upload preview"
                  class="img-preview sticky hidden h-full w-full rounded-md bg-fixed object-cover"
                />

                <section
                  class="absolute top-0 z-20 flex h-full w-full flex-col break-words rounded-md px-3 py-2 text-xs"
                >
                  <h1 class="flex-1 group-hover:text-blue-800"></h1>
                  <div class="flex">
                    <span class="p-1 text-blue-800">
                      <i>
                        <svg
                          class="ml-auto h-4 w-4 fill-current pt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z"
                          />
                        </svg>
                      </i>
                    </span>
                    <p class="size p-1 text-xs text-gray-700"></p>
                    <button
                      class="delete ml-auto rounded-md p-1 text-gray-800 hover:bg-gray-300 focus:outline-none"
                    >
                      <svg
                        class="pointer-events-none ml-auto h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          class="pointer-events-none"
                          d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                        />
                      </svg>
                    </button>
                  </div>
                </section>
              </article>
            </li> -->
          </ul>
        </section>

        <!-- sticky footer -->
        <footer class="flex justify-end px-8 pb-8 pt-4">
          <div class="modal-action" id="submit">
            <label for="upload-files" class="btn-outline btn">CLOSE</label>
          </div>
        </footer>
      </article>
    </main>
  </div>
</template>
<style scoped>
.hasImage:hover section {
  background-color: rgba(5, 5, 5, 0.4);
}

.hasImage:hover button:hover {
  background: rgba(5, 5, 5, 0.45);
}

.group:hover .group-hover\:text-blue-800 {
  color: #2b6cb0;
}
</style>
