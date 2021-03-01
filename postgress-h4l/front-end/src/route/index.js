import Vue from 'vue'
import VueRouter from 'vue-router'
import Panel from '../pages/Panel'
import Dashboard from '../pages/Dashboard'
import Entries from '../pages/Entries'
import Survey from '../pages/Survey'
import Json from '../pages/Json'


Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Survey',
    component: Survey
  },
  {
    path : '/panel',
    name : 'Panel',
    component: Panel
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    key: 'admin-dashboard'
  },
  {
    path: '/entries',
    name: 'Entries',
    component: Entries
  },
  {
    path : '/json',
    name: 'Json',
    component: Json
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;