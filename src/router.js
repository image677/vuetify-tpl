import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './components/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/table',
      // name: 'table',
      component: Layout,
      children: [
        {
          path: '/table',
          name: 'table',
          component: () => import('./views/Table.vue')
          // meta: { title: 'Table', icon: 'table' }
        }
      ]
    }
    // {
    //   path: '/form',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'index',
    //       name: 'Form',
    //       component: () => import('@/views/form/index'),
    //       meta: { title: 'Form', icon: 'form' }
    //     }
    //   ]
    // },
  ]
})
