<script setup lang="ts">
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

  function changeActiveTab(tabName: string) {
    activeTab.value = tabName
  }

  // type HandleNumbers = (a: number, b?: number | string) => number

  // const add: HandleNumbers = (a, b = 5) => {
  //   if(typeof b === 'number')
  //     return  a + (b || 0)
  //   return 0
  // }
  // const sub: HandleNumbers = (a, b) => a - (b || 0)

  // add(2, 3)
  // sub(2, 3)



  // type Filter = 'date' | 'name' | 'price'
  
  // const filters: Filter[] = ['date', 'name', 'price']
  // function applyFilter(filter: Filter) {
  //   return filter
  // }

  // applyFilter('date')
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
    grid-column: 1 / -1;
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
