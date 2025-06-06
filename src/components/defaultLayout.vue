<script setup lang="ts">
import AppHeaderComponent from './appHeaderComponent.vue';
import AppFooterComponent from './appFooterComponent.vue';
</script>

<template>
  <v-app>
    <AppHeaderComponent />
    <v-main class="content">
      <slot />
    </v-main>
    <AppFooterComponent />
  </v-app>
</template>

<style scoped>

</style>
