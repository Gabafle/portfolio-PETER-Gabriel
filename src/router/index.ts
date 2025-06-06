import {createRouter, createWebHashHistory} from 'vue-router'

import HomePages from '@/pages/homePages.vue'
import monProfil from '@/pages/monProfil.vue'
import mesOutils from '@/pages/mesOutils.vue'


const routes = [
  {path: '/', redirect: '/home'}, // Redirige automatiquement vers HomePages
  {path: '/home', component: HomePages},
  {path: '/monProfil', component: monProfil},
  {path: '/mesOutils', component: mesOutils},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
