<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      {{ title }}
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
import footerTracker from 'src/components/footerTracker.vue'
import { ref } from 'vue'

const title = ref<string>('hola')
</script>
