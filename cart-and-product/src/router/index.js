import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/ProductsView.vue'
import PastOrders from '../views/PastOrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/past-orders',
      name: 'PastOrders',
      component: PastOrders
    }
  ]
})

export default router
