import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BloggView from '@/views/BloggView.vue'
import SinglePostView from '@/views/SinglePostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path: '/posts',
   name: 'posts',
   component: BloggView
  },
  {
    path: '/posts/:id',
    name: 'singlePost', 
    component: SinglePostView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
