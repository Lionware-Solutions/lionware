<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Moon from '../icons/Moon.vue'
import Sun from '../icons/Sun.vue'

const isDark = ref(true) // Default to dark mode

const updateTheme = (dark: boolean) => {
  isDark.value = dark
  if (dark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleTheme = () => {
  updateTheme(!isDark.value)
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (theme === 'light' || (!theme && !prefersDark)) {
    updateTheme(false)
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    aria-label="Color Mode"
    class="md:mr-4 mr-12">
    <Moon v-if="!isDark" />
    <Sun v-else />
  </button>
</template>
