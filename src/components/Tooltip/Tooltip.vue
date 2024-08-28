<template>
  <q-tooltip
    v-if="isTooltipVisible"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :anchor="anchor"
    :self="self"
    :offset="offset"
    :delay="delay"
    :persistent="persistent"
    :class="qClass"
  >
    {{ content }}
  </q-tooltip>
</template>

<script setup lang="ts">
import { ref, onActivated, onDeactivated } from 'vue'
import { QTooltip } from 'quasar'
import TooltipProps from './models/TooltipProps'
defineProps<TooltipProps>()

const isTooltipVisible = ref(true)

onActivated(() => isTooltipVisible.value = true)

onDeactivated(() => isTooltipVisible.value = false)

</script>
