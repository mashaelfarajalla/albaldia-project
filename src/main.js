import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
