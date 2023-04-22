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

// Dto
import type AuthErrorDto from "../_dto/auth_error.dto";
import { getDecodedAccessToken } from "@/utils/jwt_helper";

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
        const dt = getDecodedAccessToken(data.access);

        store.userData.username = dt.username;
        store.setIsLoggedIn(true);

        router.push("/");
      }
    } else {
      console.log("Та мэдээлэлээ шалгаад дахин оролдоно уу!");
    }
  } catch (error) {
    const { response } = error;

    if (response.status === 400) {
      const { data } = response;

      console.log("Алдаа", (data as AuthErrorDto).message);
    }
  }
}
</script>

<template>
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
            <span class="label-text-alt italic text-red-500">{{
              error.$message
            }}</span>
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
            <span class="label-text-alt italic text-red-500">{{
              error.$message
            }}</span>
          </div>
        </div>
        <label for="recoverpass-modal" class="label">
          <a class="link-hover label-text-alt link text-[1rem] text-indigo-600"
            >Forgot password?</a
          >
        </label>
      </div>
      <div class="form-control mt-6">
        <button class="btn-info btn" @click="loginUser">Login</button>
        <div class="divider"></div>
        <label for="register-modal" class="btn-success btn"
          >Create new account</label
        >
      </div>
    </div>
  </div>
</template>
