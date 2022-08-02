import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Openposition from "../views/OpenPositionsView.vue";
import TechnologiesView from "../views/TechnologiesView.vue";
import JournalView from "../views/JournalView.vue";
import PartnershipsView from "../views/PartnershipsView.vue";
import WorkwithusView from "../views/WorkwithusView.vue";
import ContactView from "../views/ContactView.vue";
import WorkersView from "../views/WorkersView.vue";
import CompaniesView from "../views/CompaniesView.vue";
import NewsletterView from "../views/NewsletterView.vue";
import StoriesView from "../views/StoriesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/openposition",
      name: "OpenPosition",
      component: Openposition,
    },
    {
      path: "/technologies",
      name: "Technologies",
      component: TechnologiesView,
    },
    {
      path: "/journal",
      name: "Journal",
      component: JournalView,
    },
    {
      path: "/partnerships",
      name: "Partnerships",
      component: PartnershipsView,
    },
    {
      path: "/workwithus",
      name: "Workwithus",
      component: WorkwithusView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/workers",
      name: "Workers",
      component: WorkersView,
    },
    {
      path: "/companies",
      name: "Companies",
      component: CompaniesView,
    },
    {
      path: "/newsletter",
      name: "Newsletter",
      component: NewsletterView,
    },
    {
      path: "/stories",
      name: "Stories",
      component: StoriesView,
    },
  ],
});

export default router;
