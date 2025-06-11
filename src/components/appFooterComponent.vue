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
    <div class="footerTitle">
      Suivez moi sur les réseaux !!
    </div>

    <div class="iconMedia">
      <v-btn
        v-for="(item, index) in icons"
        :key="index"
        :icon="item.icon"
        :href="item.link"
        density="comfortable"
      ></v-btn>
    </div>

    <div class="footerContent">
      Ce site a été fait par PETER Gabriel avec les frameworks  <a href="https://vuejs.org/">@Vue</a> et  <a href="https://vuetifyjs.com/en/">@Vuetify</a>
     </div>
  </v-footer>
</template>

<style scoped>
.styleFooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  elevation: below;
  background-color: #1b1a1a;
  padding-bottom: 2%;

}

.footerContent{
  font-size: clamp(8px, 0.7vw, 18px);
  opacity: 60%;

}
.footerTitle{
  font-size: clamp(10px, 0.9vw, 20px);
  color: #F5CB5C;
  font-weight: bold;
}
.iconMedia{
  display: flex;
  gap: 0.6rem;
}
</style>
