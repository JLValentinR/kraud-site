import Vue from 'vue'
import Router from 'vue-router'
import {isAuthenticated} from '@/services/auth'

// Views
import Home from '@/views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index.html',
      name: 'Home',
      component: Home
    }
  ]
})

// Global Guard navigation
router.beforeEach((to, from, next) => {
  if (to.path === '/profile') {
    if (isAuthenticated()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
