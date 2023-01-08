<template>
  <slot />
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";

import { useStore } from "../store/index.js";

export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result2 = await axios.get("http://localhost:3000/SideBar");
    let routepath = this.$route.fullPath;
    let path = routepath.split("/");
    path = path[2];
    if (path == undefined) {
      this.store.sidebar = result2.data[0].index;
      this.store.show = true;
    } else {
      this.store.sidebar = result2.data[0][path];
      this.store.show = false;
    }
    //let result = await axios.get("http://localhost:3000/AlMadina");
    //this.data = result.data;
  },
};
</script>
