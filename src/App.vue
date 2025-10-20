<script setup>
  import HeaderComponent from './components/Layout/HeaderComponent.vue'
  import SidebarComponent from './components/Layout/Sidebar/SidebarComponent.vue'
</script>

<template>
  <div>
    <div class="app-layout">
      <HeaderComponent />
      <SidebarComponent />
    </div>
  </div>
</template>

<style scoped>
  .app-layout {
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 300px 1fr;
    height: 100vh;
  }
</style>
