import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MobileApplication from "../views/MobileApplication.vue";
import ConnectUs from "../views/ConnectUs.vue";
import FrequentlyQuestions from "../views/FrequentlyQuestions.vue";
import AlBaladiaIndex from "../views/AlBaladia/AlBaladiaIndex.vue";
import Vision from "../views/AlBaladia/Vision.vue";
import Alahdaf from "../views/AlBaladia/Alahdaf.vue";
import SiasatAlbaladia from "../views/AlBaladia/SiasatAlbaladia.vue";
import AlBaladia2 from "../views/AlBaladia/AlBaladia2.vue";
import AlBaladia3 from "../views/AlBaladia/AlBaladia3/AlBaladia3";
import Section1 from "../views/AlBaladia/AlBaladia3/Section1";
import Section2 from "../views/AlBaladia/AlBaladia3/Section2";
import Section3 from "../views/AlBaladia/AlBaladia3/Section3";
import Section4 from "../views/AlBaladia/AlBaladia3/Section4";
import Section5 from "../views/AlBaladia/AlBaladia3/Section5";

import AlBaladia4 from "../views/AlBaladia/AlBaladia4/AlBaladia4.vue";
import AlBaladia5 from "../views/AlBaladia/AlBaladia5.vue";
import AlBaladia6 from "../views/AlBaladia/AlBaladia6.vue";
import AlBaladia7 from "../views/AlBaladia/AlBaladia7/AlBaladia7";
import AlBaladia8 from "../views/AlBaladia//AlBaladia8/AlBaladia8";
import details from "../views/AlBaladia//AlBaladia8/details";
import AlMadinaIndex from "../views/AlMadina/AlMadinaIndex.vue";
import AlMadina2 from "../views/AlMadina/AlMadina2.vue";
import AlMadina3 from "../views/AlMadina/AlMadina3.vue";
import AlMadina4 from "../views/AlMadina/AlMadina4.vue";
import AlMadina5 from "../views/AlMadina/AlMadina5.vue";

import AlMadina6 from "../views/AlMadina/AlMadina6/AlMadina6.vue";
import detailsAlmadina from "../views/AlMadina/AlMadina6/details";
import details2Almadina from "../views/AlMadina/AlMadina6/details2";

import AlKhadamat from "../views/AlKhadamat/AlKhadamatIndex/AlKhadamatIndex";
import AlKhadamat2 from "../views/AlKhadamat/AlKadamat2/AlKadamat2.vue";

import DetailsAlKhadmat from "../views/AlKhadamat/AlKhadamatIndex/DetailsAlKhadmat";
import AlMasharie from "../views/AlMasharie/AlMasharie.vue";
import AlMasharie2 from "../views/AlMasharie/AlMasharie2.vue";

import MediaCenter from "../views/MediaCenter/MediaCenter.vue";
import MediaCenter2 from "../views/MediaCenter/MediaCenter2.vue";
import MediaCenter3 from "../views/MediaCenter/MediaCenter3.vue";

import Modal from "../views/AlBaladia/AlBaladia7/Modal";

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
    // path: "/modal/:id",
    path: "/modal",

    name: "Modal",
    component: Modal,
  },

  {
    path: "/SideBar/vision",
    name: "Vision",
    component: Vision,
  },
  {
    path: "/SideBar/albaladiaindex",
    name: "AlBaladiaIndex",
    component: AlBaladiaIndex,
  },
  {
    path: "/SideBar/alahdaf",
    name: "Alahdaf",
    component: Alahdaf,
  },
  {
    path: "/SideBar/SiasatAlbaladia",
    name: "SiasatAlbaladia",
    component: SiasatAlbaladia,
  },
  // {
  //   path: "/SideBar/albaladiaindex",
  //   name: "AlBaladiaIndex",
  //   component: AlBaladiaIndex,
  // },
  {
    path: "/SideBar/albaladiaindex/albaladia2",
    name: "AlBaladia2",
    component: AlBaladia2,
  },
  {
    path: "/SideBar/albaladiaindex/albaladia3",
    name: "AlBaladia3",
    component: AlBaladia3,
  },
  {
    path: "/section1",
    name: "Section1",
    component: Section1,
  },
  {
    path: "/section2",
    name: "Section2",
    component: Section2,
  },
  {
    path: "/section3",
    name: "Section3",
    component: Section3,
  },
  {
    path: "/section4",
    name: "Section4",
    component: Section4,
  },
  {
    path: "/section5",
    name: "Section5",
    component: Section5,
  },
  {
    path: "/SideBar/albaladiaindex/albaladia4",
    name: "AlBaladia4",
    component: AlBaladia4,
  },
  {
    path: "/SideBar/albaladiaindex/albaladia5",
    name: "AlBaladia5",
    component: AlBaladia5,
  },
  {
    path: "/SideBar/albaladiaindex/albaladia6",
    name: "AlBaladia6",
    component: AlBaladia6,
  },
  {
    path: "/SideBar/albaladiaindex/albaladia7",
    name: "AlBaladia7",
    component: AlBaladia7,
  },
  {
    path: "/SideBar/albaladiaindex/albaladia8",
    name: "AlBaladia8",
    component: AlBaladia8,
  },

  {
    path: "/albaladiaindex/details/:id",
    name: "details",
    component: details,
  },
  {
    path: "/SideBar/almadinaindex",
    name: "AlMadinaIndex",
    component: AlMadinaIndex,
    meta: {
      title: "AlMadinaIndex",
    },
  },
  {
    path: "/SideBar/almadinaindex/almadina2",
    name: "AlMadina2",
    component: AlMadina2,
    meta: {
      title: "AlMadina2",
    },
  },
  {
    path: "/SideBar/almadinaindex/almadina3",
    name: "AlMadina3",
    component: AlMadina3,
    meta: {
      title: "AlMadina3",
    },
  },

  {
    path: "/SideBar/almadinaindex/almadina4",
    name: "AlMadina4",
    component: AlMadina4,
  },
  {
    path: "/SideBar/almadinaindex/almadina5",
    name: "AlMadina5",
    component: AlMadina5,
  },

  {
    path: "/SideBar/almadinaindex/almadina6",
    name: "AlMadina6",
    component: AlMadina6,
    meta: {
      title: "AlMadina3",
    },
  },

  {
    path: "/SideBar/almadinaindex/detailsAlmadina/:id",
    name: "detailsAlmadina",
    component: detailsAlmadina,
  },
  {
    path: "/SideBar/almadinaindex/detailsAlmadina/:id/details2Almadina/:id",
    name: "details2Almadina",
    component: details2Almadina,
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
    path: "/detailsAlKhadmat/:id",
    name: "DetailsAlKhadmat",
    component: DetailsAlKhadmat,
  },

  {
    path: "/SideBar/alkhadamat",
    name: "AlKhadamat2",
    component: AlKhadamat2,
  },

  {
    path: "/SideBar/almasharie",
    name: "AlMasharie",
    component: AlMasharie,
  },

  {
    path: "/SideBar/almasharie",
    name: "AlMasharie2",
    component: AlMasharie2,
  },

  {
    path: "/SideBar/mediacenter",
    name: "MediaCenter",
    component: MediaCenter,
  },

  {
    path: "/SideBar/mediacenter/mediacenter2",
    name: "MediaCenter2",
    component: MediaCenter2,
  },

  {
    path: "/SideBar/mediacenter/mediacenter3",
    name: "MediaCenter3",
    component: MediaCenter3,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
