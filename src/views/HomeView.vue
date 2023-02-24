<script setup lang="ts">
// Layout
import Layout from "../layout/index.vue";

// Store
// import store from "../store";

// Components
// import UserDashboard from "./user/Dashboard.vue";

import Card from "../components/CardWidget.vue";
</script>
<template>
  <Layout>
    <div class="flex items-center justify-center">
      <div class="z-20 min-h-screen flex-col overflow-hidden p-4 text-2xl">
        <h1>This is Home</h1>
        <Card />
      </div>
    </div>
  </Layout>
</template>
