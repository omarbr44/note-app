<script setup>
  import StarterKit from '@tiptap/starter-kit'
  import { EditorContent, useEditor } from '@tiptap/vue-3'

  const editor = useEditor({
    content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
    extensions: [StarterKit],
  })
</script>

<template>
  <EditorContent :editor />
</template>

<style>
  .tiptap {
    background-color: var(--color-secondary);
    color: var(--color-white);
    border: 1px solid var(--color-tertiary);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: start;
  }
  .tiptap:focus {
    outline: none;
  }
  .tiptap:focus-visible {
    outline: none;
  }
  .tiptap:focus-within {
    outline: none;
  }
  .tiptap:focus-visible {
    outline: none;
  }
</style>
