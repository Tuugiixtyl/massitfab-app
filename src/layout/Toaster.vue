<!-- <template>
  <div class="toast-end toast toast-top mt-16">
    <div v-for="toast in visibleToasts" :key="toast">
      <div class="alert" :class="`alert-${toast.type}`">
        <div>
          <span>{{ toast.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

interface Toast {
  message: string;
  type: "info" | "success" | "error" | "warning";
  visible: boolean;
  timeout: number;
}

const toasts = ref<Toast[]>([]);

function showToast(message: string, type: Toast["type"], timeout: number) {
  const toast: Toast = {
    message,
    type,
    visible: true,
    timeout: window.setTimeout(() => {
      toast.visible = false;
      removeToast(toast);
    }, timeout),
  };
  toasts.value.push(toast);
}

function removeToast(toast: Toast) {
  clearTimeout(toast.timeout);
  const index = toasts.value.indexOf(toast);
  if (index !== -1) {
    toasts.value.splice(index, 1);
  }
}

const visibleToasts = computed(() => {
  return toasts.value.filter((toast) => toast.visible);
});

watch(visibleToasts, (newToasts) => {
  if (newToasts.length > 0) {
    const highestTimeout = Math.max(...newToasts.map((toast) => toast.timeout));
    setTimeout(() => {
      const toastToRemove = toasts.value.find(
        (toast) => toast.timeout === highestTimeout,
      );
      if (toastToRemove) {
        removeToast(toastToRemove);
      }
    }, highestTimeout);
  }
});
</script> -->

<template>
  <div>
    <!-- Your main content -->

    <button
      class="btn"
      @click="showToast('This is a toast message', 'info', 50000)"
    >
      Show Toast
    </button>
    <div class="toast-end toast toast-top mt-16">
      <div v-for="toast in visibleToasts" :key="toast">
        <div class="alert" :class="`alert-${toast.type}`">
          <div>
            <span>{{ toast.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showToast, visibleToasts } from "@/utils/toast_helper";

// Component logic and state setup
// ...
</script>
