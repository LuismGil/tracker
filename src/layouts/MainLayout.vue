<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <header-tracker />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <footer-tracker />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import headerTracker from 'src/components/header/headerTracker.vue'
import footerTracker from 'src/components/footer/footerTracker.vue'
import { ref } from 'vue'

const title = ref<string>('hola')
</script>
