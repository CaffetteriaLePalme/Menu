<template>
    <div class="header">
      <div class="header_menu">
        <img src="@/assets/menu.svg" @click="toggleMenu">
      </div>
      <div class="header_logo">
        <img src="@/assets/logo_lepalme.png" />
      </div>
    </div>
    <div class="left-menu" v-if="showLeftMenu">
      <div class="left-menu-header">
        <img src="@/assets/close.svg" @click="toggleMenu">
        <div class="left-menu-header_logo">
          <img src="@/assets/logo_lepalme.png" />
        </div>
      </div>
      <div class="left-menu-list">
        <router-link to="/caffetteria" @click="toggleMenu">Caffetteria</router-link>
        <router-link to="/pasticceria" @click="toggleMenu">Bakery</router-link>
        <router-link to="/food" @click="toggleMenu">Food</router-link>
        <!-- <router-link to="/aperitivi" @click="toggleMenu">Aperitivi</router-link> -->
        <router-link to="/bevande" @click="toggleMenu">Bevande</router-link>
        <router-link to="/birre" @click="toggleMenu">Birre</router-link>
        <router-link to="/cocktail" @click="toggleMenu">Cocktail</router-link>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LPHeader',
  data() {
    return {
      showLeftMenu: false
    }
  },
  methods: {
    toggleMenu() {
      const bool = this.showLeftMenu;
      this.showLeftMenu = !bool;
    }
  }
});
</script>

<style lang="scss">
.header {
  background: rgba(0,0,0);
  padding: 0 25px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 98;

  .header_menu {
    img {
      width: 35px;
    }
  }

  .header_logo {
    img {
      max-width: 125px;
    }
  }
}

.left-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 99;
  text-align: left;
  background: rgba(0, 0, 0,0.95);
  color: #fff;
  transition: width 0.3s ease-in;
  padding: 0 25px;

  .left-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #000;

    img {
      width: 35px;
    }
  }

  .left-menu-header_logo {
    img {
      width: 125px;
      max-width: 125px;
    }
  }

  .left-menu-list {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: 50px;
    
    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
  }

}
</style>