import { createRouter, createWebHistory } from "vue-router";
import Footer from "../components/Footer.vue";
import SideBar from "../components/SideBar.vue";
import Home from "../views/Home.vue";
import MobileApplication from "../views/MobileApplication.vue";
import ConnectUs from "../views/ConnectUs.vue";
import FrequentlyQuestions from "../views/FrequentlyQuestions.vue";
import AlBaladia from "../views/AlBaladia.vue";
import AlMadina from "../views/AlMadina.vue";
import AlKhadamat from "../views/AlKhadamat.vue";
import AlMasharie from "../views/AlMasharie.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mobileapplication",
    name: "MobileApplication",
    component: MobileApplication,
  },
  {
    path: "/connect-us",
    name: "ConnectUs",
    component: ConnectUs,
  },
  {
    path: "/frequentlyquestions",
    name: "FrequentlyQuestions",
    component: FrequentlyQuestions,
  },
  {
    path: "/SideBar/:name",
    name: "SideBar",
    component: SideBar,
  },
  {
    path: "/SideBar/albaladia",
    name: "AlBaladia",
    component: AlBaladia,
    meta: {
      title: "AlBaladia",
    },
  },
  {
    path: "/SideBar/almadina",
    name: "AlMadina",
    component: AlMadina,
    meta: {
      title: "AlMadina",
    },
  },
  {
    path: "/SideBar/alkhadamat",
    name: "AlKhadamat",
    component: AlKhadamat,
    meta: {
      title: "AlKhadamat",
    },
  },
  {
    path: "/SideBar/almasharie",
    name: "AlMasharie",
    component: AlMasharie,
    meta: {
      title: "AlMasharie",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
