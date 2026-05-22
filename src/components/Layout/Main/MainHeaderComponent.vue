<script setup lang="ts">
  import {
    ArrowLeft,
    ArrowRight,
    Bookmark,
    EllipsisVertical,
  } from 'lucide-vue-next'
</script>

<template>
  <div class="main-header bg-secondary py-sm px-md">
    <div class="main-header-container">
      <div class="main-header-arrow-container">
        <ArrowLeft
          class="text-gray text-sm hover-text-white hover-bg-tertiary rounded-sm transition-all px-xs py-xs"
          :size="24"
        />
        <ArrowRight
          class="text-gray text-sm hover-text-white hover-bg-tertiary rounded-sm transition-all px-xs py-xs"
          :size="24"
        />
      </div>
      <div class="main-header-navigation-container">
        <div class="main-header-navigation-item">
          <span
            class="text-gray text-sm hover-text-white hover-bg-tertiary rounded-sm transition-all px-xs py-xs"
          >
            File 1
          </span>
        </div>
        <span class="main-header-navigation-separator text-gray text-sm">
          /
        </span>
        <div class="main-header-navigation-item">
          <span
            class="text-gray text-sm hover-text-white hover-bg-tertiary rounded-sm transition-all px-xs py-xs"
          >
            File 1
          </span>
        </div>
        <span class="main-header-navigation-separator text-gray text-sm">
          /
        </span>
        <div class="main-header-navigation-item">
          <span class="text-white text-sm">File 1</span>
        </div>
      </div>
      <div class="main-header-actions-container">
        <Bookmark
          class="text-gray text-sm hover-text-white hover-bg-tertiary rounded-sm transition-all px-xs py-xs"
          :size="24"
        />
        <EllipsisVertical
          class="text-gray text-sm hover-text-white hover-bg-tertiary rounded-sm transition-all px-xs py-xs"
          :size="24"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-header {
    width: 100%;
    height: 2rem;
  }
  .main-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .main-header-navigation-container,
  .main-header-actions-container,
  .main-header-arrow-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .main-header-navigation-item,
  .main-header-navigation-separator {
    cursor: default;
  }
  .main-header-navigation-item:last-child {
    cursor: auto;
  }
</style>
