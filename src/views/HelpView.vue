<script setup lang="ts">
import TheWelcome from '@/components/help/TheWelcome.vue'
import { useVariableStore } from '@/stores/vars'
const store = useVariableStore()
store.change('Vue Documentation Recourses')
</script>

<template lang="pug">

.container
  TheWelcome

</template>
