<template>
  <div id="app">
    <template v-if="db">
      <router-view :db="db"></router-view>
    </template>
    <template v-else>
      <h3>Loading</h3>
    </template>
  </div>
</template>

<script>
export default {
  props: ['db']
}
</script>
