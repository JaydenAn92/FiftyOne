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
    path: '/template',
    name: 'template',
    meta: {
      title: 'Work - Slider Portfolio - The 51 - digital marketing agency'
    },
    // route level code-splitting
    // this generates a separate chunk (template.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/TemplateView.vue'
      )
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
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/about/who',
    name: 'who',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/about/WhoView.vue'
      )
  },
  {
    path: '/about/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/about/ContactView.vue'
      )
  },
  {
    path: '/culture',
    name: 'culture',
    meta: {
      title:
        'Culture | Hello the fifty one - Slider Portfolio - The 51 - digital marketing agency'
    },
    component: () =>
      import(
        /* webpackChunkName: "culture", webpackPrefetch:true */ '../views/CultureView.vue'
      )
  },
  {
    path: '/culture/hello',
    name: 'hello',
    // route level code-splitting
    // this generates a separate chunk (culture.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "culture", webpackPrefetch:true */ '../views/CultureView.vue'
      )
  },
  {
    path: '/culture/insight',
    name: 'insight',
    // route level code-splitting
    // this generates a separate chunk (culture.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "culture", webpackPrefetch:true */ '../views/culture/InsightView.vue'
      )
  },
  {
    path: '/recruit',
    name: 'recruit',
    meta: {
      title: 'Recruit - The Fiftyone - The 51 - digital marketing agency'
    },
    component: () =>
      import(
        /* webpackChunkName: "recruit", webpackPrefetch:true */ '../views/RecruitView.vue'
      )
  },
  {
    path: '/nav',
    name: 'nav',
    // route level code-splitting
    // this generates a separate chunk (recruit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "recruit", webpackPrefetch:true */ '../views/NavView.vue'
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
