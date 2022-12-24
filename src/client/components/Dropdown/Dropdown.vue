<template>
<div class="dropdown-container">
  <div class="dropdown-wrapper" :title="selectedItems">
    <div class="dropdown-header" :class="{'header-marked': isDropdownOpen}" @click="() => dropdownToggle()">
      <span>{{ dropdownHeader }}</span>
    </div>
    <div v-if="isDropdownOpen" class="dropdown-body" v-on-clickaway="() => dropdownToggle(false)">
      <div v-for="(item, index) in items" :key="index" class="dropdown-item-wrapper" :class="{selected: selectedItems[item]}" @click="() => updateItem(item)">
        <div class="dropdown-item-container">
          <check-box :checked="!!selectedItems[item]" :ref="`checkbox${item}`"/>
          <span class="item-text">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import CheckBox from "@/client/components/checkbox/CheckBox";

export default {
  components: {CheckBox},
  mixins: [clickaway],
  name: "Drop-down",
  props: {
    dropdownHeader: {
      type: String,
      default: 'Select filters',
    },
    items: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      isDropdownOpen: false,
      selectedItems: {},
    };
  },
  methods: {
    dropdownToggle(value) {
      this.isDropdownOpen = value === undefined ? !this.isDropdownOpen : value;
    },
    addItems(item) {
      this.selectedItems[item] = true;
    },
    removeItem(item) {
      delete this.selectedItems[item];
    },
    updateItem(item) {
      const sign = !this.selectedItems[item];
      const handler = sign ? this.addItems : this.removeItem;
      handler(item);
      this.$refs[`checkbox${item}`][0].updateCheckSign(!!this.selectedItems[item]);
      this.itemsUpdateEvent();
    },
    itemsUpdateEvent() {
      this.$emit('selected-items', Object.keys(this.selectedItems));
    },
  }
}
</script>

<style scoped lang="scss">
.dropdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .dropdown-wrapper {
    width: 200px;

    .dropdown-header {
      border-radius: 4px;
      border: 1px solid #efefef;

    }
    .header-marked {
      border-radius: 4px;
      border: 1px solid  #8484d7;
    }

    .dropdown-body {
      border: 1px solid black;
      border-radius: 4px;
      overflow-y: auto;
      max-height: 200px;
      width: 200px;
      position: absolute;
      z-index: 10;
      background-color: white;
      top: 93px;

      .dropdown-item-wrapper {
        display: flex;
        justify-content: flex-start;
        &:hover {
          background-color: #efefef;
          width: 100%;
        }
        .dropdown-item-container {
          padding: 10px 0;
          margin-left: 10px;
          cursor: pointer;
          display: flex;

          .item-text {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>