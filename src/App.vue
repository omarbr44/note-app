<script setup>
  import HeaderComponent from './components/Layout/HeaderComponent.vue'
  import SidebarComponent from './components/Layout/Sidebar/SidebarComponent.vue'
  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'
</script>

<template>
  <div>
    <div class="app-layout">
      <HeaderComponent />
      <Splitpanes class="" vertical>
          <Pane min-size="20" size="20">
            <SidebarComponent style="height: 100%;" />
          </Pane>
          <Pane>
            <main class="bg-secondary" style="height: 100%;"></main>
          </Pane>
    </Splitpanes>
    </div>
  </div>
</template>

<style>
.app-layout {
  display: flex;
  flex-direction: column; /* header on top, splitpanes below */
  height: 100vh;
}
/* Base splitter style */
.splitpanes__splitter {
  background: #ccc;          /* default background */
  width: 2px;                /* thickness of the splitter */
  cursor: col-resize;        /* show resize cursor */
  transition: background 0.2s ease;
}

/* Hover effect */
.splitpanes__splitter:hover {
  background: #4b0cec;       /* highlight color */
}

/* Optional: add a subtle grab handle */
.splitpanes__splitter::after {
  content: "";
  display: block;
  width: 2px;
  height: 30px;
  margin: auto;
  background: rgba(0,0,0,0.2);
  border-radius: 2px;
}

</style>
