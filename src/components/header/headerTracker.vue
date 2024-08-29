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
        <q-toggle
          v-model="isDark"
          label="Modo Oscuro"
          icon="fa-solid fa-sun"
          checked-icon="fa-solid fa-moon"
          color="black"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import HeaderProps from 'src/components/header/model/HeaderProps'
import Tooltip from 'src/components/Tooltip/Tooltip.vue'

const props = defineProps<HeaderProps>()

const $q = useQuasar()

const isDark = ref($q.dark.isActive)

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

watch(isDark, (newValue) => {
  $q.dark.set(newValue)
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})
</script>

<style scoped lang="scss">
</style>
