import { createRouter, createWebHistory } from 'vue-router'
import IntroPage from '../views/IntroPage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/page-miniblog/home',
      redirect:'/'
    },
    {
    path: '/page-miniblog/intro/',
    component: IntroPage
    },
  ]
});
export default router
