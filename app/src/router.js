import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/rt/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
