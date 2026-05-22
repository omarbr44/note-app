<script setup lang="ts">
  defineProps({
    item: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div class="sidebar-file-container px-sm py-xs rounded-sm hover-bg-tertiary">
    <span class="sidebar-folder-name text-gray text-sm">{{ item.label }}</span>
  </div>
</template>

<style scoped>
  .sidebar-file-container {
    display: flex;
    align-items: center;
  }
</style>
