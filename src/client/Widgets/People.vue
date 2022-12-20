<template>
<div class="people-container">
  <my-table :items="people" :headers="headers"/>
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
    };
  },
  methods: {
    async init() {
      const { items, headers } = await actions.getPeople();
      [this.people, this.headers] = [items, headers];
    },
    async getPeople() {

    }
  }
}
</script>

<style lang="scss" scoped>
.people-container {
  width: 1000px;
}
</style>