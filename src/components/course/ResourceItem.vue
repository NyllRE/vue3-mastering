<style></style>

<template lang="pug">

li(v-for='source in storedResources' :key="source.id")
   h1 {{ source.title }}
   p {{ source.description }}
   a( :href="source.link" ) {{ source.link }}

</template>

<script>

</script>