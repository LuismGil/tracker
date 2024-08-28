<template>
    <nav class="bg-black text-white w-[100%] px-[20px] md:px-[65px]">
      <div class="relative flex h-20 items-center">
        <div class="absolute right-0 flex items-center gap-5">
          <q-btn
            v-for="(button, index) in buttons"
            :key="index"
            :icon="button.icon"
            :disabled="disabled"
            flat
            round
            @click="button?.click"
            :style="{ color: button.iconColor }"
          >
          {{ button }}
            <tooltip v-if="button.tooltip" :content="button.tooltip" />
          </q-btn>
        </div>
      </div>
    </nav>
  </template>

<script setup lang="ts">
import HeaderProps from 'src/components/header/model/HeaderProps'
import Tooltip from 'src/components/Tooltip/Tooltip.vue'

const props = defineProps<HeaderProps>()
const buttons = [
  {
    icon: 'mail',
    click: () => {
      alert('sadsa')
    },
    iconColor: 'asdfs',
    tooltip: 'asdfs'
  },
  {
    icon: 'mail',
    click: () => {
      alert('asdfsd')
    },
    iconColor: 'asdfs',
    tooltip: 'asdfs'
  }
]

</script>

<style scoped lang="scss">

</style>