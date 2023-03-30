<script setup lang="ts">
import { ref } from "vue";

// Vue Router
import { useRouter } from "vue-router";

// Vuelidate
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

// Api
import { login, registerUser } from "../api/auth";

// Store
import store from "../store";
import { setToken } from "@/utils/cookie_helper";
const rules = {
  email: {
    required: helpers.withMessage("И-мэйл шаардалгатай!", required),
  },
};

const email = ref()

function recoverPass() {
  try {
    console.log('davaa');
    
  } catch (error) {
    console.log(error);
    
  }
}
</script>

<template>
  <input type="checkbox" id="recoverpass-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label
        for="recoverpass-modal"
        class="btn-sm btn-circle btn absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold">Forgot Password!</h3>
      <p class="text-sm opacity-40">It's quick and simple.</p>
      <div class="divider"></div>
      <div class="form-control space-y-5">
        <label class="input-group input-group-vertical">
          <span>Email</span>
          <input
            type="email"
            placeholder="info@site.com"
            class="input-bordered input"
            v-model="email"
          />
          <!-- <div v-if="v$.email.$errors">
            <div v-for="error in v$.email.$errors" :key="error.$uid">
              <span class="text-md italic text-red-500">{{
                error.$message
              }}</span>
            </div>
          </div> -->
        </label>
        <div class="form-control">
          <label class="btn-success btn" @click="recoverPass">Recover</label>
        </div>
      </div>
    </div>
  </div>
</template>