<script setup lang="ts">
import {useI18n} from 'vue-i18n';
defineProps<{ msg: string }>()
const {t} = useI18n();
</script>

<template>
  <h1>{{ msg }}</h1>
  {{ t('hello') }}
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500">light-saber</a> fights.
  </p>
  <i-carbon-agriculture-analytics></i-carbon-agriculture-analytics>
</template>

<style scoped>
</style>
