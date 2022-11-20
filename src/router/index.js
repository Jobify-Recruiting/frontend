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
import article1View from "../views/article1View.vue";
import article2View from "../views/article2View.vue";
import BookView from "../views/BookView.vue"; 
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
      path: "/article1",
      name: "Article1",
      component: article1View,
    },
    {
      path: "/article2",
      name: "Article2",
      component: article2View,
    },
    {
      path: "/book",
      name: "Book",
      component: BookView,
    },
  ],
});

export default router;
