<template>
  <router-view />
</template>

<script>
import { defineComponent, watch } from 'vue'
import { Dark } from 'quasar'

export default defineComponent({
  name: 'App',
  setup() {
    const userPrefersDark = localStorage.getItem('theme') === 'dark'
    Dark.set(userPrefersDark)

    watch(() => Dark.isActive, (isDark) => {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    })
  }
})
</script>
