<script lang="ts" setup>
const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav class="flex items-center justify-between">
    <span>TheTest</span>
    <div class="flex items-center gap-2">
      <NuxtLink :to="switchLocalePath('fr')">FR</NuxtLink>
      <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
    </div>
  </nav>
</template>
