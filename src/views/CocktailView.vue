<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Cocktail
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Premium" price="9,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Pestati" price="7,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Standard" price="6,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Analcolico alla frutta" price="4,50 €" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from '@/components/MenuItem.vue';

export default defineComponent({
  name: 'CocktailView',
  props: {
    
  },
  components: {
    MenuItem
  }
});
</script>

<style lang="scss" scoped>

</style>