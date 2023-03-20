import { createRouter, createWebHistory } from 'vue-router'
import Session from '../components/chat/Session.vue';
import Empty from '../components/chat/Empty.vue'
import Main from '../components/chat/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/sessions'
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: Main,
      children:
        [
          {
            path: '',
            name: 'default',
            component: Empty
          },
          {
            path: ':id',
            name: 'session',
            component: Session
          },
        ],
    }
  ]
})

export default router
