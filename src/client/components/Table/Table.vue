<template>
<div class="table-main-container">
  <div class="table-header-container">
    <div v-for="(header, headerIndex) in headers" :key="headerIndex" class="table-header-item">
      <span>{{ header }}</span>
    </div>
  </div>
  <div class="table-body-container" v-on:scroll="scrollHandler">
      <table-item v-for="(item, index) in items" :key="index" :item="item" :keys="headers"  :class="{border: index}"/>
  </div>
</div>
</template>

<script lang="ts">
import TableItem from './TableItem';
export default {
  components: { TableItem },
  props: {
    items: {
      required: true,
      type: Array,
      default: () => [],
    },
    headers: {
      required: true,
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  name: "Table-Component",
  methods : {
    scrollHandler($event) {
      const { scrollTop, offsetHeight, scrollHeight } = $event.target
      if (scrollTop + offsetHeight === scrollHeight && !this.loading) this.requestMoreItems();
    },
    requestMoreItems() {
      this.$emit('request-items');
    },
  }
}
</script>

<style scoped lang="scss">
.table-main-container {
  border-radius: 4px;
  border: 1px solid #8484d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .table-header-container {
    color: white;
    font-weight: 500;
    background-color:#8484d7;
    z-index: 1;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .table-header-item {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      padding: 4px;
      text-align: left;
    }
  }
  .table-body-container {
    max-height: 400px;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-direction: column;

  }
}
.border {
  border-top: 1px solid #efefef;
  z-index: 0;
  position: relative;
}
</style>