import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import CaseStudy from '../views/CaseStudy.vue'
import AboutMe from "../views/AboutMe.vue";
import Works from "../views/Works.vue";

import Creative from "../views/articles/Creative.vue";
import Graphical from "../views/articles/Graphical.vue";
import Training from "../views/articles/Training.vue";
import Opogo from "../views/articles/Opogo.vue";
import PiktoNext from "../views/articles/PiktoNext.vue";
import DesignSystem from "../views/articles/DesignSystem.vue";
import ColorScheme from "../views/articles/ColorScheme.vue";

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
        path: "pikto-next",
        name: "Pikto Next",
        component: PiktoNext
      },
      {
        path: "color-scheme",
        name: "Color Scheme",
        component: ColorScheme
      }
    ]
  },
  { 
    path: "/works",
    name: "Works",
    component: Works,
    children: [
      {
        path: "design-system",
        name: "Design System",
        component: DesignSystem
      },
      { 
        path: "creative",
        name: "Creative",
        component: Creative
      },
      { 
        path: "graphical",
        name: "Graphical",
        component: Graphical
      },
      { 
        path: "training",
        name: "Training",
        component: Training 
      },
    ]
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
