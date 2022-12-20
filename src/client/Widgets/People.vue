<template>
<div class="people-container">
  <my-table
      @request-items="(index) => getPeople(index)"
      :items="people" :headers="headers" :loading="loading"/>
</div>
</template>

<script>
import actions from './state';
import MyTable from '../components/Table';
export default {
  components: { MyTable },
  name: "People-Widget",
  created() {
    this.init();
  },
  data() {
    return {
      people: [],
      headers: [],
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
      this.headers = headers;
      return { items, headers };

    }
  }
}
</script>

<style lang="scss" scoped>
.people-container {
  width: 1000px;
}
</style>