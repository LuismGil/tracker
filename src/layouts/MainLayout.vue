<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated> /* header */ </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
