<script setup lang="ts">
import TheWelcome from '#/help/TheWelcome.vue'
import { useVariableStore } from '@/stores/vars'

useVariableStore().change('Vue Documentation Recourses')
</script>

<template lang="pug">

.container
  TheWelcome

</template>
