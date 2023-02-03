import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import VCalendar from "v-calendar";
import Masonry from "masonry-layout";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  // .use(VueGoogleMaps, {
  //   load: {
  //     key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback",
  //   },
  //   autobindAllEvents: true,
  // })
  .use(VCalendar, {})
  .use(router)

  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
