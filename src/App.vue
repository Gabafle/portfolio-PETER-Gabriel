<template>

    <router-view></router-view>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  router.push('/home');
})


</script>

<style>

</style>
