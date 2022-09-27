import { createRouter, createWebHistory } from 'vue-router'
import IntroPage from '../views/IntroPage.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/page-miniblog/',
      component: IntroPage
    },
    {
    path: '/page-miniblog/intro/',
    component: IntroPage
    },
    {
    path: '/page-miniblog/home/',
    component: HomeView
    },
  ]
});
export default router
