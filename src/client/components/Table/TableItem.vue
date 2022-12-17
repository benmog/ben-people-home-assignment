<template>
  <div class="item-container">
    <div v-for="(value, key) in parsedItem" :key="key" class="item-wrapper">
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    keys: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    parsedItem() {
      const item = this.keys.reduce((acc, key) => ({ [key]: this.item[key] || "" }), {})
      delete item.id;
      return item;
    },
  },
  name: "TableItem"
}
</script>

<style scoped lang="scss">
 .item-container {
   .item-wrapper {

   }
 }
</style>