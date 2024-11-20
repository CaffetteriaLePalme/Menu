<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Bakery
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cornetto vuoto" price="1,30 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cornetto farcito" price="1,30 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Treccia alle noci" price="1,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Saccottino" price="1,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Brioche vuota" price="1,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Brioche farcita" price="1,80 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cornettino vuoto" price="0,80 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cornettino farcito" price="1,00 €" />
                <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Mini krapfen / Ciambelline" price="1,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Biscotti al burro" price="1,20 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Donuts" price="2,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Pasticciotto piccolo" price="1,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Muffin vari gusti" price="1,80 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Muffin senza glutine" price="3,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Zeppolina" price="1,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Trancio di crostata" price="2,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Tortino alle carote vegano" price="1,80 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Pancake / Waffle" price="4,00 €" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from '@/components/MenuItem.vue';

export default defineComponent({
    name: 'PasticceriaView',
    props: {

    },
    components: {
        MenuItem
    }
});
</script>

<style lang="scss" scoped>
.menu-section-body {
    background: url('@/assets/bakery_bg.jpg') no-repeat center/cover;
    &::before {
        background-color: rgba(0, 0, 0, 0.7) !important;
    }
}
</style>