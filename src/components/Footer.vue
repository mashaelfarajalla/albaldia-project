<template>
  <MainSection>
    <footer class="d-none d-lg-block">
      <div class="footernav">
        <div id="myDIV" class="footerdiv d-flex justify-content-start">
          <router-link
            v-for="item in footer"
            :key="item.id"
            class="footerlink"
            :class="{ active: store.path == item.name.toLowerCase() }"
            :to="{ name: `${item.name}` }"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </footer>
  </MainSection>
</template>

<script>
// import "./Footer.js";

import MainSection from "@/components/MainSection.vue";
import axios from "axios";
import { useStore } from "../store";

export default {
  setup() {
    const store = useStore();

    return { store };
  },
  name: "Footer",
  data() {
    return {
      footer: [],
      footerlink: [],
      isActive: false,
    };
  },

  components: { MainSection },

  async mounted() {
    let result = await axios.get("http://localhost:3000/Footer");
    this.footer = result.data;
    // if (this.store.path === "almadinaindex") {
    //   (this.isActive = true), console.log("true");
    // } else {
    //   console.log("false");
    // }
    // this.isActive = true;
  },
};
</script>

<style>
footer {
  position: relative;
  bottom: 0;
  /* left: -7%; */
  /* height: 55px; */
  width: 100%;
  background-color: #fff;
  padding: 0rem 0rem 0 0;
  transition: 0.5s;
  z-index: -1;
}

.footernav {
  border-top: 1px solid rgb(237 237 237);
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.footerlink {
  display: flex;
  align-items: center;
  border-left: 1px solid #70707029;
  border-right: none;
  justify-content: center;
  position: relative;
  width: 20%;
  height: 55px;
  text-align: center;
  transition: 0.3s;
  color: #392c23;
  font-size: 20px;
  background: linear-gradient(to right, #fff 50%, #3ec4b5 50%);
  background-size: 200% 100%;
  background-position: left;
  text-decoration: none;
}
.footerlink a {
  color: #392c23;
  text-decoration: none;
}

.footerlink:hover,
.footerlink.active {
  color: #ffffff;
  text-decoration: none;
  background-position: right;
  border-left: 1px solid #3ec4b5;
}
/* .footerlink:hover a,
.footerlink.active a {
  color: #ffffff;
  text-decoration: none;
} */

/* .footerlink .router-link-exact-active {
  color: #ffffff;
  text-decoration: none;
} */
</style>
