<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import HolyGrail from "../components/HolyGrailWidget.vue"

// Layout
import Layout from "../layout/index.vue";
import { getProfile } from "@/api/user";

const render = ref(false);

const state = reactive({
  username: "",
  summary: "",
  profile_picture: "",
});

const route = useRoute();
const userParam = route.params.username;

async function getProfileData() {
  await getProfile(`${userParam}`)
    .then((response) => {
      if (response.status === 200) {
        state.username = response.data.data.username;
        state.summary = response.data.data.summary;
        state.profile_picture = "/hideout" + response.data.data.profile_picture;

        render.value = true;
      }
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.clear();
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    });
}

onMounted(() => {
  getProfileData();
});
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div v-if="render" class="z-20 min-h-screen flex-col overflow-hidden p-4 text-2xl">
        <div class="avatar mb-3">
          <div class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <img :src="state.profile_picture" />
          </div>
          <h1 class="mx-3">{{ state.username }}</h1>
        </div>
        <div class="mb-4">
          <h2 class="mb-4">
            {{ state.summary }}
          </h2>

          <button class="btn-outline btn-primary btn mr-2">Products</button>
          <button class="btn-primary btn-ghost btn">Membership</button>
        </div>

        <div class="... grid grid-cols-3 place-items-center gap-4">
          <HolyGrail />
          <div>
            <div class="card glass w-96">
              <figure>
                <img src="/propro.jpg" alt="car!" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Products name!</h2>
                <p>How to park your car at your garage?</p>
                <div class="card-actions justify-end">
                  <button class="btn-primary btn">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card glass w-96">
              <figure>
                <img src="/propro.jpg" alt="car!" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Products name!</h2>
                <p>How to park your car at your garage?</p>
                <div class="card-actions justify-end">
                  <button class="btn-primary btn">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card glass w-96">
              <figure>
                <img src="/propro.jpg" alt="car!" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Products name!</h2>
                <p>How to park your car at your garage?</p>
                <div class="card-actions justify-end">
                  <button class="btn-primary btn">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card glass w-96">
              <figure>
                <img src="/propro.jpg" alt="car!" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Products name!</h2>
                <p>How to park your car at your garage?</p>
                <div class="card-actions justify-end">
                  <button class="btn-primary btn">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card glass w-96">
              <figure>
                <img src="/propro.jpg" alt="car!" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Products name!</h2>
                <p>How to park your car at your garage?</p>
                <div class="card-actions justify-end">
                  <button class="btn-primary btn">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
