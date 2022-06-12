import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Openposition from "../views/OpenPositionsView.vue";
import TechnolgiesView from "../views/TechnolgiesView.vue";
import JournalView from "../views/JournalView.vue";
import PartnershipsView from "../views/PartnershipsView.vue";
import WorkwithusView from "../views/WorkwithusView.vue";
import ContactView from "../views/ContactView.vue";

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
      path: "/technolgies",
      name: "Technolgies",
      component: TechnolgiesView,
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
  ],
});

export default router;
