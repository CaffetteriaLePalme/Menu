import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import CaffetteriaView from '../views/CaffetteriaView.vue'
import PasticceriaView from '../views/PasticceriaView.vue'
import FoodView from '../views/FoodView.vue'
import AperitiviView from '../views/AperitiviView.vue'
import BevandeView from '../views/BevandeView.vue'
import BirreView from '../views/BirreView.vue'
import CocktailView from '../views/CocktailView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Homepage',
    component: CaffetteriaView
  },
  {
    path: '/caffetteria',
    name: 'CaffetteriaView',
    component: CaffetteriaView
  },
  {
    path: '/pasticceria',
    name: 'PasticceriaView',
    component: PasticceriaView
  },
  {
    path: '/food',
    name: 'FoodView',
    component: FoodView
  },
  {
    path: '/aperitivi',
    name: 'AperitiviView',
    component: AperitiviView
  },
  {
    path: '/bevande',
    name: 'BevandeView',
    component: BevandeView
  },
  {
    path: '/birre',
    name: 'BirreView',
    component: BirreView
  },
  {
    path: '/cocktail',
    name: 'CocktailView',
    component: CocktailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
