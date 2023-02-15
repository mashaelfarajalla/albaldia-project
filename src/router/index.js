import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MobileApplication from "../views/MobileApplication.vue";
import ConnectUs from "../views/ConnectUs.vue";
import FrequentlyQuestions from "../views/FrequentlyQuestions.vue";
import AlBaladiaIndex from "../views/AlBaladia/AlBaladiaIndex.vue";
import AlBaladia2 from "../views/AlBaladia/AlBaladia2.vue";
import AlBaladia3 from "../views/AlBaladia/AlBaladia3/AlBaladia3";
import AlBaladia4 from "../views/AlBaladia/AlBaladia4/AlBaladia4.vue";
import AlBaladia5 from "../views/AlBaladia/AlBaladia5.vue";
import AlBaladia6 from "../views/AlBaladia/AlBaladia6/AlBaladia6";
import AlBaladia7 from "../views/AlBaladia/AlBaladia7/Section1";
import AlBaladia8 from "../views/AlBaladia//AlBaladia8/AlBaladia8";
import details from "../views/AlBaladia//AlBaladia8/details";
import AlMadinaIndex from "../views/AlMadina/AlMadinaIndex.vue";
import AlMadina2 from "../views/AlMadina/AlMadina2.vue";
import AlMadina3 from "../views/AlMadina/AlMadina3.vue";
import AlMadina4 from "../views/AlMadina/AlMadina4.vue";
import AlMadina5 from "../views/AlMadina//AlMadina5/AlMadina5.vue";

import AlMadina6 from "../views/AlMadina/AlMadina6/AlMadina6.vue";
import detailsAlmadina from "../views/AlMadina/AlMadina6/details";
import details2Almadina from "../views/AlMadina/AlMadina6/details22";

import AlKhadamat from "../views/AlKhadamat/AlKhadamatIndex/AlKhadamatIndex";
import AlKhadamat2 from "../views/AlKhadamat/AlKadamat2/alkadamat22.vue";

import DetailsAlKhadmat from "../views/AlKhadamat/AlKhadamatIndex/DetailsAlKhadmat";
import AlMasharie from "../views/AlMasharie/AlMasharie.vue";
import AlMasharie2 from "../views/AlMasharie/AlMasharie2.vue";

import MediaCenter from "../views/MediaCenter/MediaCenter.vue";
import MediaCenter2 from "../views/MediaCenter/MediaCenter2/MediaCenter2";
import MediaCenter3 from "../views/MediaCenter/MediaCenter3.vue";
import MediaCenter4 from "../views/MediaCenter/MediaCenter4/MediaCenter4.vue";

import Modal from "../views/AlBaladia/AlBaladia7/Modal";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/mobileapplication",
    name: "MobileApplication",
    component: MobileApplication,
    meta: {
      title: "MobileApplication",
    },
  },
  {
    path: "/connect-us",
    name: "ConnectUs",
    component: ConnectUs,
    meta: {
      title: "ConnectUs",
    },
  },
  {
    path: "/frequentlyquestions",
    name: "FrequentlyQuestions",
    component: FrequentlyQuestions,
    meta: {
      title: "FrequentlyQuestions",
    },
  },
  {
    // path: "/modal/:id",
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/SideBar/albaladiaindex",
    name: "AlBaladiaIndex",
    component: AlBaladiaIndex,
    meta: {
      title: "AlBaladia",
    },
  },

  {
    path: "/SideBar/albaladiaindex/albaladia2",
    name: "AlBaladia2",
    component: AlBaladia2,
    meta: {
      title: "AlBaladia-background-history",
    },
  },
  {
    path: "/SideBar/albaladiaindex/albaladia3",
    name: "AlBaladia3",
    component: AlBaladia3,
    meta: {
      title: "AlBaladia",
    },
  },

  {
    path: "/SideBar/albaladiaindex/albaladia4",
    name: "AlBaladia4",
    component: AlBaladia4,
    meta: {
      title: "AlBaladia",
    },
  },
  {
    path: "/SideBar/albaladiaindex/albaladia5",
    name: "AlBaladia5",
    component: AlBaladia5,
    meta: {
      title: "AlBaladia",
    },
  },
  {
    path: "/SideBar/albaladiaindex/albaladia6",
    name: "AlBaladia6",
    component: AlBaladia6,
    meta: {
      title: "AlBaladia",
    },
  },
  {
    path: "/SideBar/albaladiaindex/albaladia7",
    name: "AlBaladia7",
    component: AlBaladia7,
    meta: {
      title: "AlBaladia",
    },
  },
  {
    path: "/SideBar/albaladiaindex/albaladia8",
    name: "AlBaladia8",
    component: AlBaladia8,
    meta: {
      title: "AlBaladia",
    },
  },

  {
    path: "/SideBar/albaladiaindex/details/:id",
    name: "details",
    component: details,
    meta: {
      title: "AlBaladia",
    },
  },
  {
    path: "/SideBar/almadinaindex",
    name: "AlMadinaIndex",
    component: AlMadinaIndex,
    meta: {
      title: "City",
    },
  },
  {
    path: "/SideBar/almadinaindex/almadina2",
    name: "AlMadina2",
    component: AlMadina2,
    meta: {
      title: "City-gaza-histroy",
    },
  },
  {
    path: "/SideBar/almadinaindex/almadina3",
    name: "AlMadina3",
    component: AlMadina3,
    meta: {
      title: "City-distance",
    },
  },

  {
    path: "/SideBar/almadinaindex/almadina4",
    name: "AlMadina4",
    component: AlMadina4,
    meta: {
      title: "City-distance",
    },
  },
  {
    path: "/SideBar/almadinaindex/almadina5",
    name: "AlMadina5",
    component: AlMadina5,
    meta: {
      title: "City-distance",
    },
  },

  {
    path: "/SideBar/almadinaindex/almadina6",
    name: "AlMadina6",
    component: AlMadina6,
    meta: {
      title: "City-",
    },
  },

  {
    path: "/SideBar/almadinaindex/almadina6/:name",
    name: "detailsAlmadina",
    component: detailsAlmadina,
    meta: {
      title: "City-",
    },
  },
  {
    path: "/SideBar/almadinaindex/almadina6/:name/:id",
    name: "details2Almadina",
    component: details2Almadina,
    meta: {
      title: "City-",
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
    path: "/SideBar/alkhadamat/detailsAlKhadmat/:id",
    name: "DetailsAlKhadmat",
    component: DetailsAlKhadmat,
    meta: {
      title: "AlKhadamat",
    },
  },

  {
    path: "/SideBar/alkhadamat/alkhadamat2",
    name: "AlKhadamat2",
    component: AlKhadamat2,
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

  {
    path: "/SideBar/almasharie/almasharie2",
    name: "AlMasharie2",
    component: AlMasharie2,
    meta: {
      title: "AlMasharie",
    },
  },

  {
    path: "/SideBar/mediacenter",
    name: "MediaCenter",
    component: MediaCenter,
    meta: {
      title: "MediaCenter",
    },
  },

  {
    path: "/SideBar/mediacenter/mediacenter2",
    name: "MediaCenter2",
    component: MediaCenter2,
    meta: {
      title: "MediaCenter",
    },
  },

  {
    path: "/SideBar/mediacenter/mediacenter3",
    name: "MediaCenter3",
    component: MediaCenter3,
    meta: {
      title: "MediaCenter",
    },
  },
  {
    path: "/SideBar/mediacenter/mediacenter4",
    name: "MediaCenter4",
    component: MediaCenter4,
    meta: {
      title: "MediaCenter",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
