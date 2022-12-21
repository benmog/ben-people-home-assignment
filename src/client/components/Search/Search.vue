<template>
<div class="search-input-container">
  <div class="serach-wrapper">
    <input @input="onInput"/>
  </div>
</div>
</template>

<script>
export default {
  name: "Search-component",
  methods: {
    onInput(val) {
      console.log(val.target.value);
    },
  },
}
</script>

<style scoped>

</style>