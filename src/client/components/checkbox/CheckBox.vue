<template>
<div class="checkbox-container" @click="onCheck">
  <div class="checkbox" :class="{checked: checked || isChecked}">
    <img class="check-sign" :src="check" v-if="checked || isChecked"/>
  </div>
</div>
</template>

<script>
import check from './check.svg'
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  name: 'Check-Box',
  data() {
    return {
      check,
      isChecked: this.$props.checked,
    };
  },
  methods: {
    onCheck() {
      this.isChecked = !this.isChecked;
      this.$emit('on-check', this.isChecked);
    },
  },
}
</script>

<style lang="scss" scoped>
.checkbox-container {
  .checkbox {
    height: 20px;
    width: 20px;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #efefef;
    }
    .check-sign {
      width: 15px;
      height: 15px;
    }
  }
  .checked {
    background-color: #8484d7 !important;
  }
}
</style>