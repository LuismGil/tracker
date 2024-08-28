<template>
  <nav>
    <div>
      <div>
        <q-btn
          v-for="(button, index) in buttons"
          :key="index"
          :disabled="disabled"
          flat
          round
          @click="button.click"
          :style="{ color: button.iconColor }"
        >
          <q-icon
            :name="button.icon"
          />
          <Tooltip v-if="button.tooltip" :content="button.tooltip" />
        </q-btn>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderProps from 'src/components/header/model/HeaderProps'
import Tooltip from 'src/components/Tooltip/Tooltip.vue'

const props = defineProps<HeaderProps>()
const buttons = ref([
  {
    icon: 'fa-solid fa-bell',
    click: () => {
      alert('Bell clicked')
    },
    iconColor: '#333',
    tooltip: 'Bell notification'
  },
  {
    icon: 'mail',
    click: () => {
      alert('Mail clicked')
    },
    iconColor: '#555',
    tooltip: 'Send mail'
  }
])
</script>

<style scoped lang="scss">
/* Estilos personalizados si es necesario */
</style>
