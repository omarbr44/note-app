<script setup>
  import { ref } from 'vue'
  import SidebarSubFilesStrucureComponent from './SidebarSubFilesStrucureComponent.vue'

  const files = ref([
    {
      label: 'File 1',
      items: [
        {
          label: 'File 11',
          items: [
            {
              label: 'File 111',
              items: [
                {
                  label: 'File 1111',
                  items: [],
                },

                {
                  label: 'File 1112',
                  items: [],
                },
                {
                  label: 'File 1111',
                  items: [],
                },

                {
                  label: 'File 1112',
                  items: [],
                },
                {
                  label: 'File 1111',
                  items: [],
                },

                {
                  label: 'File 1112',
                  items: [],
                },
                {
                  label: 'File 1111',
                  items: [],
                },

                {
                  label: 'File 1112',
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      label: 'File 2',
      items: [
        {
          label: 'File 21',
          items: [],
        },
      ],
    },

    {
      label: 'File 3',
      items: [],
    },
  ])
</script>

<template>
  <div class="sidebar-files-container py-md">
    <SidebarSubFilesStrucureComponent
      v-for="file in files"
      :key="file.label"
      :item="file"
    />
  </div>
</template>

<style scoped>
  .sidebar-files-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
