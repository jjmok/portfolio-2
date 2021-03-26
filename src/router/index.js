import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import CaseStudy from '../views/CaseStudy.vue'
import AboutMe from "../views/AboutMe.vue";
import Creative from "../views/Creative.vue";
import Developer from "../views/Developer.vue";
import Training from "../views/Training.vue";
import Opogo from "../views/case-studies/Opogo.vue";
import Pikto from "../views/case-studies/Pikto.vue";

const routes = [
  { 
    path: '/',
    redirect: '/about-me' 
  },
  { 
    path: "/about-me",
    name: "About Me",
    component: AboutMe 
  },
  { 
    path: "/creative",
    name: "Creative",
    component: Creative
  },
  { 
    path: "/case-study",
    name: "Case Study",
    component: CaseStudy,
    children: [
      {
        path: "opogo",
        name: "Opogo",
        component: Opogo
      },
      {
        path: "pikto",
        name: "Pikto",
        component: Pikto
      },
    ]
  },
  { 
    path: "/developer",
    name: "Developer",
    component: Developer 
  },
  { 
    path: "/training",
    name: "Training",
    component: Training 
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: '/about-me'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
