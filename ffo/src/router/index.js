import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/work',
    name: 'work',
    // route level code-splitting
    // this generates a separate chunk (work.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "work", webpackPrefetch:true */ '../views/WorkView.vue'
      )
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/culture',
    name: 'culture',
    // route level code-splitting
    // this generates a separate chunk (culture.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "culture", webpackPrefetch:true */ '../views/CultureView.vue'
      )
  },
  {
    path: '/recruit',
    name: 'recruit',
    // route level code-splitting
    // this generates a separate chunk (recruit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "recruit", webpackPrefetch:true */ '../views/RecruitView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
