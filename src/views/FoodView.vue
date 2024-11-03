<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Food
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Toast" price="4,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Roll" price="3,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Panino" price="4,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Cornetti salati" price="3,50 €" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from '@/components/MenuItem.vue';

export default defineComponent({
  name: 'FoodView',
  props: {
    
  },
  components: {
    MenuItem
  }
});
</script>

<style lang="scss" scoped>

</style>