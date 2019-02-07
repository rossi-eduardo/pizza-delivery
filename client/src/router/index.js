import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Admin from '@/components/admin/AdminPanel'
import AdminOverview from '@/components/admin/AdminOverview'
import AdminProducts from '@/components/admin/AdminProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: '/admin/overview',
      children: [
        {
          path: '/admin/overview',
          name: 'AdminOverview',
          components: {
            default: AdminOverview,
            'router-view-admin': AdminOverview
          }
        },
        {
          path: '/admin/products',
          name: 'AdminProducts',
          components: {
            default: AdminProducts,
            'router-view-admin': AdminProducts
          }
        }
      ]
    }
  ]
})
