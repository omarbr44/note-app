<script setup>
  import { ArrowRight } from 'lucide-vue-next'
  import { ref } from 'vue'
  import SidebarSubFilesStrucureComponent from './SidebarSubFilesStrucureComponent.vue'

  defineProps({
    item: {
      type: Object,
      required: true,
    },
  })

  const isOpen = ref(false)
</script>

<template>
  <div class="sidebar-folder-container" @click="isOpen = !isOpen">
    <ArrowRight
      class="sidebar-folder-arrow text-gray transition-all"
      :class="isOpen ? 'rotate-90' : ''"
    />
    <span class="sidebar-folder-name text-gray text-sm">{{ item.label }}</span>
  </div>
  <Transition name="collapse">
    <div v-show="isOpen" class="overflow-hidden">
      <SidebarSubFilesStrucureComponent
        v-for="file in item.items"
        :key="file.label"
        :item="file"
      />
    </div>
  </Transition>
</template>

<style scoped>
  .sidebar-folder-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .sidebar-folder-arrow {
    width: 10px;
    height: 10px;
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
  /* Active state: transition applies */
  .collapse-enter-active,
  .collapse-leave-active {
    transition: max-height 0.3s ease;
    overflow: hidden;
  }

  /* Start collapsed */
  .collapse-enter-from,
  .collapse-leave-to {
    max-height: 0;
  }

  /* End expanded */
  .collapse-enter-to,
  .collapse-leave-from {
    max-height: 500px; /* pick a safe upper bound */
  }
</style>
