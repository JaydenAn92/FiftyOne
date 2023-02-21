import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home - The Fiftyone - The 51 - digital marketing agency'
    }
  },
  {
    path: '/work',
    name: 'work',
    meta: {
      title: 'Work - Slider Portfolio - The 51 - digital marketing agency'
    },
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
    meta: {
      title: 'About us - Slider Portfolio - The 51 - digital marketing agency'
    },
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
    meta: {
      title:
        'Culture | Hello the fifty one - Slider Portfolio - The 51 - digital marketing agency'
    },
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
    meta: {
      title: 'Recruit - The Fiftyone - The 51 - digital marketing agency'
    },
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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
