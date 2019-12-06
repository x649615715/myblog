import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '../layout/default.vue'
import Index from '../page/index.vue'
import guestBook from '../page/guestBook.vue'
import about from '../page/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: defaultPage,
    redirect: '/index',
    children:[{
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/guestbook',
      name: 'guestBook',
      component: guestBook
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
