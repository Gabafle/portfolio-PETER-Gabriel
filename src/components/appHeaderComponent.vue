<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const items = [
  { name: "Accueil", link: "/home", icon: "mdi-home" },
  { name: "Mon Profil", link: "/monProfil", icon: "mdi-account" },
  { name: "Mes Outils et Langages", link: "/mesOutils", icon: "mdi-code-tags" }
]
</script>

<template>
  <v-app-bar :elevation="2">

    <v-img max-height="50" max-width="50" class="mr-4" src="@/assets/logo_Gab.png"></v-img>

    <v-app-bar-title class="titleHeader">Développeur Logiciel PETER Gabriel</v-app-bar-title>

    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
    <div class="d-none d-md-flex">
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        :to="item.link"
        @click="drawer = false"
        link
        class="namePage"
        variant="text"
      >
        <v-icon class="iconMenu" start>{{ item.icon }}</v-icon>
        <b>{{ item.name }}</b>
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Drawer pour petits écrans -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    class="navDrawer"
    location="right"
  >
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :to="item.link"
        @click="drawer = false"
        link
      >
          <v-icon>{{ item.icon }}</v-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.namePage {
  color: #CFDBD5;
  display: flex;
}
.iconMenu {
  margin-right: 2%;
}
.navDrawer{
  color: #CFDBD5;
  background-image: url("@/assets/imageDrawer.jpg");
  image-orientation: flip;
}

.titleHeader{
  color: #CFDBD5;
}
</style>
