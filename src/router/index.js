import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'
import EditArticle from '../views/EditArticle.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'CreateArticle',
    component: CreateArticle
  },

  {
    path: '/article/:id/edit',
    name: 'EditArticle',
    component: EditArticle
  },
  {
    path: '/article/index',
    name: 'ListArticle',
    component: ListArticle
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
