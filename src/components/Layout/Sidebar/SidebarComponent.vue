<script setup>
  import { FileEdit, FolderInput } from 'lucide-vue-next'
  import { ref } from 'vue'
  import SidebarFilesStrucureComponent from './SidebarFilesStrucureComponent.vue'

  const actions = ref([
    {
      name: 'FileEdit',
      icon: FileEdit,
    },
    {
      name: 'FolderInput',
      icon: FolderInput,
    },
  ])
</script>

<template>
  <aside class="sidebar bg-primary py-sm px-sm">
    <div class="sidebar-actions">
      <button
        v-for="(action, index) in actions"
        :key="index"
        class="sidebar-actions-item hover-bg-tertiary rounded-sm transition-all"
      >
        <component
          :is="action.icon"
          class="sidebar-actions-item-icon text-gray"
        />
      </button>
    </div>
    <SidebarFilesStrucureComponent />
  </aside>
</template>

<style scoped>
  .sidebar-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .sidebar-actions-item {
    background: none;
    width: 30px;
    height: 30px;
    padding: 2px 6px;
  }
  .sidebar-actions-item-icon {
    width: 100%;
    height: 100%;
  }
</style>
