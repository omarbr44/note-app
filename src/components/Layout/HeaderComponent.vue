<script setup>
  import { Folder, Search } from 'lucide-vue-next'
  import { ref } from 'vue'

  const tabs = ref([
    {
      name: 'Folder',
      icon: Folder,
    },
    {
      name: 'Search',
      icon: Search,
    },
  ])

  const activeTab = ref('Folder')

  function changeActiveTab(tabName) {
    activeTab.value = tabName
  }
</script>

<template>
  <header class="header bg-secondary px-md py-sm">
    <div
      v-for="tab in tabs"
      :key="tab.name"
      class="header-item hover-bg-tertiary rounded-sm transition-all"
      :class="activeTab === tab.name ? 'bg-tertiary text-white' : 'text-gray'"
      @click="changeActiveTab(tab.name)"
    >
      <component :is="tab.icon" class="header-item-icon" />
    </div>
  </header>
</template>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .header-item {
    padding: 2px 6px;
    width: 30px;
    height: 30px;
  }
  .header-item-icon {
    width: 100%;
    height: 100%;
  }
</style>
