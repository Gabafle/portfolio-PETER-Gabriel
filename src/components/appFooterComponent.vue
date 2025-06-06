<script setup lang="ts">
const icons = [
  { icon: "mdi-github", link: "https://github.com/Gabafle" },
  { icon: "mdi-mail", link: "mailto:gabriel.peter@hotmail.fr" },
  { icon: "mdi-linkedin", link: "https://www.linkedin.com/in/gabriel-peter-dev-logiciel" },
  { icon: "mdi-instagram", link: "https://instagram.com/Gabafle" },
  { icon: "mdi-youtube", link: "https://www.youtube.com/@gabrielpeter2791" },
];
</script>

<template>
  <v-footer class="styleFooter">
    <div class="text-caption font-weight-regular" style="color: #F5CB5C">
      Suivez moi sur les réseaux !!
    </div>

    <div class="d-flex ga-3">
      <v-btn
        v-for="(item, index) in icons"
        :key="index"
        :icon="item.icon"
        :href="item.link"
        target="_blank"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <div class="text-caption font-weight-regular opacity-60">
      Ce site a été fait par PETER Gabriel avec les frameworks Vuetify et Vue.
      <br />
      please check :
      <br />
      <a href="https://vuejs.org/">@Vue</a>
      <br />
      <a href="https://vuetifyjs.com/en/">@Vuetify</a>
    </div>
  </v-footer>
</template>

<style scoped>
.styleFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #1e1e1e;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.3);
}
</style>
