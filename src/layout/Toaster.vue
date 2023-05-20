<script setup lang="ts">
import { showToast, visibleToasts } from "@/utils/toast_helper";
</script>
<template>
  <div class="z-50">
    <div class="toast-end toast toast-top mt-16">
      <div v-for="toast in visibleToasts" :key="toast">
        <div class="alert" :class="{ [`alert-${toast.type}`]: true }">
          <div>
            <span>{{ toast.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
