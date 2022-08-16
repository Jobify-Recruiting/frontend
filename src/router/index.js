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
import StoriesView from "../views/StoriesView.vue";
import searchResultView from "../views/searchResultView.vue";
import feature1View from "../views/feature1View.vue";
import feature2View from "../views/feature2View.vue";
import feature3View from "../views/feature3View.vue";
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
      path: "/stories",
      name: "Stories",
      component: StoriesView,
    },
    {
      path: "/searchResult",
      name: "SearchResult",
      component: searchResultView,
    },
    {
      path: "/feature1",
      name: "Feature1",
      component: feature1View,
    },
    {
      path: "/feature2",
      name: "Feature2",
      component: feature2View,
    },
    {
      path: "/feature3",
      name: "Feature3",
      component: feature3View,
    },
  ],
});

export default router;
