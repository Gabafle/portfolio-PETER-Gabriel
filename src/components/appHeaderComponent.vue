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
  <v-app-bar class="barHeader" :elevation="2">

    <v-img max-height="50" max-width="50" class="mr-4" src="@/assets/logo_Gab.png"></v-img>

    <v-app-bar-title class="titleHeader">Développeur Logiciel PETER Gabriel</v-app-bar-title>

    <!-- V-MENU pour petits écrans -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon v-bind="props" class="d-md-none"></v-app-bar-nav-icon>
      </template>

      <v-list>
        <v-list-item
          class="drawerItem"
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
    </v-menu>

    <!-- Menu Desktop -->
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
</template>


<style scoped>
.namePage {
  color: #CFDBD5;
  display: flex;
  padding: clamp(9px, 1vw, 18px) clamp(9px, 1vw, 18px);
  font-size: clamp(9px, 0.9vw, 20px);
}
.iconMenu {
  margin-right: 2%;
}
.navDrawer{
  color: #CFDBD5;
  padding-top: 5%;
  background-color: transparent;
  height: 60vh;
}

.titleHeader{
  color: #CFDBD5;
  font-size: clamp(17px, 1.2vw, 30px);
  white-space: normal;
  word-break: break-word;
}
.barHeader{
  padding: clamp(8px, 1vw, 14px) clamp(8px, 1vw, 14px);
}
.drawerItem{
  background-color: #151515;
}
</style>
