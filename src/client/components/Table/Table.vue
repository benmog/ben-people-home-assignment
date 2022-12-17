<template>
<div class="table-main-container">
  <div class="table-header-container">

  </div>
  <div class="table-body-container">
    <div v-for="(item, index) in items" :key="index">
      <table-item :item="item"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import TableItem from './TableItem';
export default {
  components: { TableItem },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    }
  },
  name: "Table",
}
</script>

<style scoped lang="scss">

</style>