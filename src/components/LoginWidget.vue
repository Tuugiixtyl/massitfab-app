<script setup lang="ts">
import { reactive } from "vue";

// Vue Router
import { useRouter } from "vue-router";

// Vuelidate
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

// Store
import store from "../store";

// Api
import { login } from "../api/auth";

// Utils
import { setToken } from "../utils/cookie_helper";

// Components
// import FormLayout from "../components/FormLayout.vue";

// Dto
import type AuthErrorDto from "../_dto/auth_error.dto";

const rules = {
  email: {
    required: helpers.withMessage("Хэрэглэгчийн нэр шаардалгатай!", required),
  },
  password: {
    required: helpers.withMessage("Нууц үг шаардалгатай!", required),
  },
};

const router = useRouter();

const state = reactive({
  email: "",
  password: "",
});

const v$ = useVuelidate(rules, state);

async function loginUser() {
  try {
    const result = await v$.value.$validate();

    if (result) {
      const response = await login(state);

      if (response.status === 200) {
        const { data } = response;

        console.log("success");

        setToken("access-token", data.access);
        setToken("refresh-token", data.refresh);

        store.setIsLoggedIn(true);

        router.push("/");
      }
    } else {
      console.log("Та мэдээлэлээ шалгаад дахин оролдоно уу!");
    }
  } catch (error) {
    const { response } = error;

    if (response.status === 401) {
      const { data } = response;

      console.log("Алдаа", (data as AuthErrorDto).message);
    }
  }
}
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username or Email Address</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input-bordered input"
              v-model="state.email"
            />
            <div v-if="v$.email.$errors">
              <div v-for="error in v$.email.$errors" :key="error.$uid">
                <p class="text-sm italic text-red-500">{{ error.$message }}</p>
              </div>
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input-bordered input"
              v-model="state.password"
            />
            <div v-if="v$.password.$errors">
              <div v-for="error in v$.password.$errors" :key="error.$uid">
                <p class="text-sm italic text-red-500">{{ error.$message }}</p>
              </div>
            </div>
            <label class="label">
              <a href="#" class="link-hover label-text-alt link"
                >Forgot password?</a
              >
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn-info btn" @click="loginUser">Login</button>
            <div class="divider"></div>
            <button class="btn-success btn">Create new account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
