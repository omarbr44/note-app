<script setup>
  import MainBodyComponent from './MainBody/MainBodyComponent.vue'
  import MainHeaderComponent from './MainHeaderComponent.vue'
</script>

<template>
  <div class="main-container">
    <MainHeaderComponent />
    <MainBodyComponent />
  </div>
</template>

<style scoped>
  .main-container {
    width: 100%;
    height: 100%;
  }
</style>
