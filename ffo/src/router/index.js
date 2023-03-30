import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
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
    path: '/404',
    name: 'notFound',
    component: NotFound,
    meta: {
      title: 'Page Not Found'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      title: 'Page Not Found'
    }
  },
  {
    path: '/template',
    name: 'template',
    meta: {
      title: 'Work - Slider Portfolio - The 51 - digital marketing agency'
    },
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
    component: () =>
      import(
        /* webpackChunkName: "work", webpackPrefetch:true */ '../views/WorkView.vue'
      )
  },
  {
    path: '/work-template/:id',
    name: 'work-template',
    meta: {
      title: 'Work - Slider Portfolio - The 51 - digital marketing agency'
    },
    component: () =>
      import(
        /* webpackChunkName: "work", webpackPrefetch:true */ '../views/work/WorkTemplate.vue'
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
    meta: {
      title:
        'About us | Who We Are - Slider Portfolio - The 51 - digital marketing agency'
    },
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/about/WhoView.vue'
      )
  },
  {
    path: '/about/contact',
    name: 'contact',
    meta: {
      title:
        'About us | Contact us - Slider Portfolio - The 51 - digital marketing agency'
    },
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
    path: '/culture/insight',
    name: 'insight',
    meta: {
      title:
        'Capacity Building Leader Workshop 2019 - The 51 - digital marketing agency'
    },
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
    path: '/insight',
    name: 'insight-hidden',
    meta: {
      title: 'insight - The Fiftyone - The 51 - digital marketing agency'
    },
    component: () =>
      import(
        /* webpackChunkName: "insight-hidden", webpackPrefetch:true */ '../views/InsightHiddenView.vue'
      )
  },
  {
    path: '/culture/:id',
    name: 'insight-template',
    meta: {
      title: 'insight - The Fiftyone - The 51 - digital marketing agency'
    },
    component: () =>
      import(
        /* webpackChunkName: "insight-template", webpackPrefetch:true */ '../views/culture/InsightHiddenTemplate.vue'
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
