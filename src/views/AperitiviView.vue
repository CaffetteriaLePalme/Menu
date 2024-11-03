<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Aperitivi
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Caffè" price="1,20 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Caffè Macchiato" price="1,20 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Espressino" price="1,40 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Cappuccino" price="1,60 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Ginseng" price="1,60 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Ginseng" price="1,60 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Ginseng" price="1,60 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Ginseng" price="1,60 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Ginseng" price="1,60 €" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from '@/components/MenuItem.vue';

export default defineComponent({
  name: 'AperitiviView',
  props: {
    
  },
  components: {
    MenuItem
  }
});
</script>

<style lang="scss" scoped>

</style>