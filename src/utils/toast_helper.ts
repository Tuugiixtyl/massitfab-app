import { ref, computed, watch } from "vue";

interface Toast {
  message: string;
  type: "info" | "success" | "error" | "warning";
  visible: boolean;
  timeout: number;
}

const toasts = ref<Toast[]>([]);

export function showToast(
  message: string,
  type: Toast["type"],
  timeout: number,
) {
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

export const visibleToasts = computed(() => {
  return toasts.value.filter((toast) => toast.visible);
});

watch(toasts, (newToasts) => {
  newToasts.forEach((toast) => {
    if (!toast.visible) {
      removeToast(toast);
    }
  });
});
