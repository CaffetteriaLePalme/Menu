<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Cocktail
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Premium" price="9,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Pestati" price="7,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Standard" price="6,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Analcolico alla frutta" price="4,50 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Calice di vino / Variazioni" price="4,00 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Calice di prosecco / Variazioni" price="4,00 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Bottiglia di prosecco" price="15,00 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Bottiglia di vino" price="20,00 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cicchetto standard mezzo" price="2,00 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cicchetto standard intero" price="3,50 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cicchetto premium mezzo" price="3,50 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cicchetto premium mezzo" price="6,00 €" />
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
.menu-section-body {
    background: url('@/assets/cocktail_bg.jpg') no-repeat center/cover;
    background-position: left !important;
    &::before {
        background-color: rgba(0, 0, 0, 0.6) !important;
    }
}
</style>