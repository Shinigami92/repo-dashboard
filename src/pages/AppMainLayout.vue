<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<template lang="pug">
QLayout(view="hHh LpR lFf")
  AppHeader

  QPageContainer
    router-view(v-slot="{ Component, route }")
      transition(name="fade", mode="out-in")
        component(:is="Component", :key="route.path")
</template>

<style lang="scss">
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
