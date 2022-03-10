<script setup lang="ts">
import { useDark } from '@vueuse/core';
import type { Dark } from 'quasar';
import { useQuasar } from 'quasar';
import { ref, watchEffect } from 'vue';

const dark = useDark();
const $q = useQuasar();

const theme = ref<Dark['mode']>(dark.value);

watchEffect(() => {
  $q.dark.set(theme.value);
  dark.value = theme.value === true;
});
</script>

<template lang="pug">
QToggle(v-model="theme")
</template>
