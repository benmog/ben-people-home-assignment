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
      return this.keys.reduce((acc, key) => ({ ...acc, [key]: this.item[key] || "" }), {})
    },
  },
  name: "TableItem"
}
</script>

<style scoped lang="scss">
 .item-container {
   display: flex;
   width: 100%;
   justify-content: space-between;
   .item-wrapper {
     padding: 4px;
     display: flex;
     width: 100%;
     justify-content: space-between;
   }
 }

</style>