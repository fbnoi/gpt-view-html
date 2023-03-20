<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from './SideBar.vue'
</script>
<template>
    <aside class="sidebar bg-light">
      <SideBar />
    </aside>
    <main class="main" id="page-main">
      <RouterView />
    </main>
</template>