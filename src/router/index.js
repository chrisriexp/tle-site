import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import GetAppointed from '../views/GetAppointed.vue'
import About from '../views/About.vue'
import LeadRouter from '../views/LeadRouter.vue'
import LeadSubmission from '../views/LeadSubmission.vue'
import HomeLead from '../views/HomeLead.vue'
import AdditionalLead from '../views/OtherLead.vue'
import AutoLead from '../views/AutoLead.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/lead-submission',
      component: LeadRouter,
      children: [
        {
          path: '',
          component: LeadSubmission
        },
        {
          path: 'home-lead',
          component: HomeLead
        },
        {
          path: 'other-lead',
          component: AdditionalLead
        },
        {
          path: 'auto-lead',
          component: AutoLead
        }
      ]
    },
    {
      path: '/get-appointed',
      component: GetAppointed
    }
  ]
})

export default router
