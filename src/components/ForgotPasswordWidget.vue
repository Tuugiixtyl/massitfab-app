<script setup lang="ts">
import { ref } from "vue";

// Vuelidate
import { required, helpers } from "@vuelidate/validators";

// Store
const rules = {
  email: {
    required: helpers.withMessage("И-мэйл шаардалгатай!", required),
  },
};

const email = ref();

function recoverPass() {
  try {
    console.log("davaa");
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <!-- component -->
  <body class="antialiased">
    <input type="checkbox" id="recoverpass-modal" class="modal-toggle" />
    <div class="modal">
      <div
        class="modal-box relative mx-auto my-10 max-w-lg rounded-xl p-8 shadow"
      >
        <label
          for="recoverpass-modal"
          class="btn-sm btn-circle btn absolute right-2 top-2"
          >✕</label
        >
        <h1 class="text-4xl font-medium">Reset password</h1>
        <p class="text-slate-500">Fill up the form to reset the password</p>

        <div class="divider"></div>

        <form action="" class="my-5">
          <div class="flex flex-col space-y-5">
            <label for="email">
              <p class="pb-2 font-medium text-base-content">Email address</p>
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                class="w-full rounded-lg bg-base-100 px-3 py-3 hover:shadow"
                placeholder="Enter email address"
              />
            </label>

            <div class="form-control">
              <label class="btn-info btn" @click="recoverPass">Recover</label>
            </div>
            <p class="text-center">
              Not registered yet?
              <a
                href="#"
                class="inline-flex items-center space-x-1 font-medium text-secondary-focus"
                ><span>Register now </span
                ><span
                  ><i
                    class="pi pi-external-link"
                    style="font-size: 0.75rem" /></span
              ></a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>
