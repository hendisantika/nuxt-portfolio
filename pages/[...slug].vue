<script lang="ts" setup>
definePageMeta({
  middleware: [
    function (_to, _from) {
      return navigateTo('/')
    },
    'auth',
  ],
})
</script>

<template>
  <div>
    <h1>404 No Page Found</h1>
  </div>
</template>
