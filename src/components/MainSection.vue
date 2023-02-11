<template>
  <slot />
</template>

<script>
import axios from "axios";

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
    this.store.path = path;
    // console.log(this.store.path);
    // this.store.name = result2.data[0][path][0].name.toLowerCase();
    // console.log(name.toLowerCase());
    // console.log(this.store.name);

    if (path == undefined) {
      this.store.sidebar = result2.data[0].index;
      this.store.indexhome = result2.data[0].index;
      this.store.show = true;
    } else {
      this.store.indexhome = result2.data[0].index;
      // this.store.active = true;

      this.store.sidebar = result2.data[0][path];
      this.store.show = false;
    }
    // if (this.store.path === name.toLowerCase()) {
    //   this.store.active = true;
    // } else {
    //   this.store.active = false;
    // }
    //let result = await axios.get("http://localhost:3000/AlMadina");
    //this.data = result.data;
  },
};
</script>
