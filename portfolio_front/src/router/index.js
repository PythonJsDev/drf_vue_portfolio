import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '@/components/projects/Projects.vue'
import DetailsProject from '@/components/projects/DetailsProject.vue'
import CategoryProjects from '@/components/projects/CategoryProjects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/web-projects',
      name: 'web-projects',
      component: Projects
    },
    {
      path: '/other-projects',
      name: 'other-projects',
      component: Projects
    },
    {
      path: '/details-project/:id',
      name: 'details-project',
      component: DetailsProject
    },

    {
      path: '/category/:name',
      name: 'category',
      component: CategoryProjects
    }
   
  ]
})

export default router
