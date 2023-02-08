import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/compteur',
    name: 'compteur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "compteur" */ '../views/CompteurView.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "compteur" */ '../views/AboutView.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  },
  {
    path: '/membres',
    name: 'MembresView',
    component: () => import(/* webpackChunkName: "new" */ '../views/MembresView.vue')
  },
  {
    path: '/interlocuteur',
    name: 'InterlocuteurView',
    component: () => import(/* webpackChunkName: "new" */ '../views/InterlocuteurView.vue')
  },
  {
    path: '/membres/codit',
    name: 'CoditView',
    component: () => import(/* webpackChunkName: "new" */ '../views/CoditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
