import Vue from "vue";
import VueRouter from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";

import LayoutView from "../views/LayoutView.vue";
import HomeView from "../views/HomeView.vue";
import ProjectsSkillsView from '../views/ProjectsSkillsView.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
  {
    path: "/layout",
    name: "layout",
    component: LayoutView,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
      },
      {
        path: "/habilidades",
        name: "projectsskills",
        component: ProjectsSkillsView
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
