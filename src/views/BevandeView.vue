<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Bevande
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Frappè" price="3,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Centrifugato" price="3,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Spremuta d'arancia" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Acqua frizzante / naturale" price="1,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Acqua tonica" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Campari soda" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Cedrata" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Coca cola / Coca cola zero" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Cocktail San Pellegrino" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Crodino" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Fanta" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Lemonsoda" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Acqua e menta" price="2,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Latte e menta" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Orzata" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Red bull" price="3,00 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="San bitter bianco/rosso" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="The pesca/limone" price="2,50 €" />
            <MenuItem imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png" name="Sciacquetta" price="1,80 €" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from '@/components/MenuItem.vue';

export default defineComponent({
  name: 'BevandeView',
  props: {
    
  },
  components: {
    MenuItem
  }
});
</script>

<style lang="scss" scoped>

</style>