<template>
  <slot />
</template>

<script>
import axios from "axios";

import { useStore } from "@/store/data";

export default {
  setup() {
    const store = useStore();
    return { store };
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/AlMadina6");
    let routepath = this.$route.fullPath;
    let path = routepath.split("/");
    this.store.pathid = path[6];
    path = path[4];
    if (path == "Archaeology") {
      this.store.datadetails = result.data[0].Archaeology;
    } else if (path == "Crafts") {
      this.store.datadetails = result.data[0].Crafts;
    } else if (path == "folklore") {
      this.store.datadetails = result.data[0].folklore;
    }
  },
};
</script>

<style></style>
