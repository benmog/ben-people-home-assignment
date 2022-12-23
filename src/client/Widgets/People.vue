<template>
<div class="people-container">
  <div class="header">
    <dropdown :items="headers" @selected-items="updateFiltersKeys"/>
    <search @search="updateFiltersValue"/>
  </div>
  <my-table
      @request-items="() => getPeople(index)"
      :items="people" :headers="headers" :loading="loading" :index="index"/>
</div>
</template>

<script>
import actions from './state';
import search from '../components/Search';
import Dropdown from '../components/Dropdown';
import MyTable from '../components/Table';
export default {
  components: { search, Dropdown, MyTable },
  name: "People-Widget",
  created() {
    this.init();
  },
  data() {
    return {
      people: [],
      headers: [],
      filters: {keys: [], value: ''},
      loading: false,
      index: 0,
    };
  },
  methods: {
    async init() {
      await this.getPeople( 20);
    },
    async getPeople(numberOfItems = 20) {
      this.loading = true;
      const { items, headers } = await actions.getPeople(this.index * numberOfItems, numberOfItems, this.filters);
      this.loading = false;
      this.people = [...this.people, ...items];
      if (!this.headers.length) this.headers = headers;
      this.index ++;
    },
    async updateFiltersKeys(keys) {
      this.filters.keys = keys;
      this.reset();
      await this.getPeople( 20)
    },
    async updateFiltersValue(value) {
      this.filters.value = value;
      if (this.filters.keys.length)this.reset();
      await this.getPeople( 20);
    },
    reset() {
      this.people = [];
      this.index = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.people-container {
  width: 1000px;
  .header {
    width: 400px;
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;
  }
}
</style>