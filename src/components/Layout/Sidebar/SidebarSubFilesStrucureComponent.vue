<script setup>
  import SidebarFileComponent from './SidebarFileComponent.vue'
  import SidebarFolderComponent from './SidebarFolderComponent.vue'

  defineProps({
    item: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div class="sidebar-sub-files-structure-container px-md">
    <template v-if="item.items.length > 0">
      <SidebarFolderComponent :item />
    </template>
    <template v-else>
      <SidebarFileComponent :item />
    </template>
  </div>
</template>

<style scoped>
  .sidebar-sub-files-structure-container {
    padding-block: 4px;
  }
</style>
