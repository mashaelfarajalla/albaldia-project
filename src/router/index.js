import { createRouter, createWebHistory } from "vue-router";
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
    path: "/albaladia",
    name: "AlBaladia",
    component: AlBaladia,
  },
  {
    path: "/almadina",
    name: "AlMadina",
    component: AlMadina,
  },
  {
    path: "/alkhadamat",
    name: "AlKhadamat",
    component: AlKhadamat,
  },
  {
    path: "/almasharie",
    name: "AlMasharie",
    component: AlMasharie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
