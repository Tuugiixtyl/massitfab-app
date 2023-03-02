<script setup lang="ts">
import { reactive } from "vue";

// Vue Router
import { useRouter } from "vue-router";

// Vuelidate
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

// Api
import { registerUser } from "../api/auth";

// Store
import store from "../store";

const rules = {
  email: {
    required: helpers.withMessage("И-мэйл шаардалгатай!", required),
  },
  nickname: {
    required: helpers.withMessage("Хэрэглэгчийн нэр шаардалгатай!", required),
  },
  password: {
    required: helpers.withMessage("Нууц үг шаардалгатай!", required),
  },
};

const router = useRouter();

const state = reactive({
  register: { email: "", nickname: "", password: "" },
  password: "",
});

const v$ = useVuelidate(rules, state.register);

async function register() {
  const result = await v$.value.$validate();

  if (result && state.password === state.register.password) {
    registerUser(state.register)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;

          console.log("success!", data);

          router.push("/join");
        }
      })
      .catch((error) => {
        const { response } = error;
        if (response.status === 401) {
          const { data } = response;

          console.log("warn!", data);
        }
      });
  } else {
    console.log("Та шинэ нууц үгээ дахин оруулна уу!");
  }
}
</script>
<template>
  <input type="checkbox" id="register-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label
        for="register-modal"
        class="btn-sm btn-circle btn absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold">Sign Up!</h3>
      <p class="text-sm opacity-40">It's quick and simple.</p>
      <div class="divider"></div>
      <div class="form-control space-y-5">
        <label class="input-group input-group-vertical">
          <span>Email</span>
          <input
            type="email"
            placeholder="info@site.com"
            class="input-bordered input"
            v-model="state.register.email"
          />
          <div v-if="v$.email.$errors">
            <div v-for="error in v$.email.$errors" :key="error.$uid">
              <span class="text-md italic text-red-500">{{
                error.$message
              }}</span>
            </div>
          </div>
        </label>
        <label class="input-group input-group-vertical">
          <span>Username</span>
          <input
            type="text"
            placeholder="Sandy"
            class="input-bordered input"
            v-model="state.register.nickname"
          />
          <div v-if="v$.nickname.$errors">
            <div v-for="error in v$.nickname.$errors" :key="error.$uid">
              <span class="text-md italic text-red-500">{{
                error.$message
              }}</span>
            </div>
          </div>
        </label>
        <label class="input-group input-group-vertical">
          <span>New Password</span>
          <input
            type="password"
            placeholder="*********"
            class="input-bordered input"
            v-model="state.register.password"
          />
          <span>Confirm New Password</span>
          <input
            type="password"
            placeholder="*********"
            class="input-bordered input"
            v-model="state.password"
          />
          <div v-if="v$.password.$errors">
            <div v-for="error in v$.password.$errors" :key="error.$uid">
              <span class="text-md italic text-red-500">{{
                error.$message
              }}</span>
            </div>
          </div>
        </label>
        <div class="form-control">
          <label class="btn-success btn" @click="register">Sign Up</label>
        </div>
      </div>
    </div>
  </div>
</template>
