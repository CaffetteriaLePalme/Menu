<template>
    <div class="menu-section-body">
        <div class="menu-title">
            <h1>
                Food
            </h1>
        </div>
        <div class="menu-section">
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Toast" price="4,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Piadina" price="4,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Puccia" price="4,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Cornetti salati" price="3,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Piatto caldo" price="6,00 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Stuzzichini x1" price="1,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Stuzzichini tris" price="4,50 €" />
            <MenuItem
                imgUrl="https://e7.pngegg.com/pngimages/49/951/png-clipart-coffee-cup-espresso-liebeck-v-mcdonald-s-restaurants-coffee.png"
                name="Patatine san carlo" price="1,50 - 2,00 €" />
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
.menu-section-body {
    background: url('@/assets/food_bg.jpg') no-repeat center/cover;
    &::before {a
        background-color: rgba(0, 0, 0, 0.7) !important;
    }
}
</style>