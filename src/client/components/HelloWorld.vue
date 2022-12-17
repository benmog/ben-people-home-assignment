<template>
  <div class="hello">
    <dropdown :items="['a', 'b', 'c', 'd', 'e', 'f', 'g']"/>
  </div>
</template>

<script>
import dropdown from "@/client/components/Dropdown/Dropdown.vue";
export default {
  name: 'HelloWorld',
  components: {dropdown},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
