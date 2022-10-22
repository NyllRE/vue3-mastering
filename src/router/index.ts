import { createRouter, createWebHistory } from 'vue-router'
import HelpView from '../views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/help'
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView
    },
    {
      path: '/course',
      name: 'course',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CourseView.vue')
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import('../views/FormView.vue'),
    },
    {
      path: '/:NotFound(.*)',
      redirect: '/',
    }
  ]
})

export default router
