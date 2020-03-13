import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import SearchListing from '../views/SearchListing.vue'
import ListingDetail from '../views/ListingDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/search',
    name: 'search',
    component: SearchListing
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: ListingDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
