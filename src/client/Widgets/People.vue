<template>
<div class="people-container">
  <div class="header">
    <dropdown :items="headers" @selected-items="updateFiltersKeys"/>
    <search/>
  </div>
  <my-table
      @request-items="(index) => getPeople(index)"
      :items="people" :headers="headers" :loading="loading"/>
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
    };
  },
  methods: {
    async init() {
      await this.getPeople(0, 20);
    },
    async getPeople(index, numberOfItems = 20) {
      this.loading = true;
      const { items, headers } = await actions.getPeople(index * numberOfItems, numberOfItems);
      this.loading = false;
      this.people = [...this.people, ...items];
      if (!this.headers.length) this.headers = headers;
    },
    async updateFiltersKeys(keys) {
      this.filters[keys] = keys;
      this.people = [];
      await this.getPeople(0, 20)
    },
    async updateFiltersValue(value) {
      this.filters[value] = value;
      this.people = [];
      await this.getPeople(0, 20);
    },
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