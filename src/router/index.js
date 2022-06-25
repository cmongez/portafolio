import Vue from "vue";
import VueRouter from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import LayoutView from "../views/LayoutView.vue";
import HomeView from "../views/HomeView.vue";
import ProjectsSkillsView from "../views/ProjectsSkillsView.vue";
import CertificatesView from "../views/CertificatesView.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },

  {
    path: "/",
    name: "layout",
    component: LayoutView,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
        
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
