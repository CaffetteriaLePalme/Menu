<template>
  <div class="menu-item">
    <!-- <div class="menu-item_img">
      <img :src="imgUrl" />
    </div> -->
    <div class="menu-item_row">
      <div class="menu-item_row_name">
        {{ name }}
      </div>
      <div class="menu-item_row_price">
        {{ price }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuItem',
  props: {
    imgUrl: String,
    name: String,
    price: String,
  },
});
</script>

<style scoped lang="scss">
.menu-item {
  display: flex;
  padding-block: 10px;
  padding-inline: 0 15px;
  .menu-item_img {
    img {
      width: 100px;
    }
  }

  .menu-item_row {
    margin-left: 15px;
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: space-between;

    &_name {
      font-weight: bold;
      font-size: 16px;
      padding-right: 8px;
      text-align: left;
    }

    &_price {
      font-weight: bold;
      font-size: 16px;
      white-space: nowrap;
    }
  }
}
</style>