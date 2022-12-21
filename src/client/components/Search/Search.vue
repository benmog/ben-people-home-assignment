<template>
<div class="search-input-container">
  <div class="serach-wrapper">
    <input placeholder="Search..." @input="onInput"/>
  </div>
</div>
</template>

<script>
export default {
  name: "Search-component",
  data() {
    return {
      value: '',
      id: null,
    };
  },
  methods: {
    onInput(val) {
      this.value = val.target.value;
      this.debounce();
    },
    debounce() {
      clearTimeout(this.id);
      this.id = setTimeout(() => {
          this.notifySearch();
        }, 500);
    },
    notifySearch() {
      this.$emit('search', this.value);
    }
  },
}
</script>

<style scoped>

</style>