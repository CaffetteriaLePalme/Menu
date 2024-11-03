<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Birre
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Beck's" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Ceres" price="3,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Heineken" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Nastro azzurro" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Tennent's" price="3,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Ichnusa" price="3,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Peroni al limone" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Peroni senza glutine" price="2,50 €" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from '@/components/MenuItem.vue';

export default defineComponent({
  name: 'BirreView',
  props: {
    
  },
  components: {
    MenuItem
  }
});
</script>

<style lang="scss" scoped>

</style>