<template>
  <nav class="flex justify-end p-4 bg-gray-100 dark:bg-gray-800">
    <div class="flex items-center space-x-4">
      <q-btn
        flat
        round
        icon="fa-solid fa-globe"
        @click="toggleMenu"
      />
      <q-menu
        v-model="menu"
        transition-show="scale"
        transition-hide="scale"
        cover
        class="q-mr-sm"
      >
        <q-list>
          <q-item clickable @click="setLanguage('en')">
            <q-item-section>
              English
            </q-item-section>
          </q-item>
          <q-item clickable @click="setLanguage('es')">
            <q-item-section>
              Español
            </q-item-section>
          </q-item>
          <q-item clickable @click="setLanguage('pt')">
            <q-item-section>
              Português
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
      <q-toggle
        v-model="isDark"
        icon="fa-solid fa-sun"
        checked-icon="fa-solid fa-moon"
        class="q-mr-sm"
      >
        <Tooltip :content="isDark ? 'Modo Claro' : 'Modo Oscuro'" />
      </q-toggle>
      <q-btn
        v-for="(button, index) in buttons"
        :key="index"
        :disabled="disabled"
        flat
        round
        @click="button.click"
        :style="{ color: button.iconColor }"
        class="flex items-center"
      >
        <q-icon :name="button.icon" />
        <Tooltip v-if="button.tooltip" :content="button.tooltip" />
      </q-btn>
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
const menu = ref<boolean>(false)

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

const languages = ref([
  {
    language: 'en',
    name: 'English',
    icon: '',
    click: () => {
      setLanguage('en')
    }
  },
  {
    language: 'es',
    name: 'Spanish',
    icon: '',
    click: () => {
      setLanguage('es')
    }
  },
  {
    language: 'pt-bt',
    name: 'Portuguese',
    icon: '',
    click: () => {
      setLanguage('en')
    }
  }
])

const toggleMenu = () => {
  menu.value = !menu.value
}

const setLanguage = (language: string) => {
  console.log(`Idioma seleccionado: ${language}`)
}

watch(isDark, (newValue) => {
  $q.dark.set(newValue)
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})
</script>

<style scoped lang="scss">
</style>
