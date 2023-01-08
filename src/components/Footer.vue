<template>
  <footer class="d-none d-lg-block">
    <div class="footernav">
      <div>
        <div class="footerdiv d-flex justify-content-start">
          <router-link
            v-for="item in footer"
            :key="item.id"
            :to="{ name: `${item.name}` }"
            class="footerlink"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import { useStore } from "../store/index";

// import { useRoute } from "vue-router";

export default {
  setup() {
    // const route = useRoute();
    // return [route];
  },
  name: "Footer",
  data() {
    return {
      footer: [],
    };
  },

  async mounted() {
    const store = useStore();
    let result = await axios.get("http://localhost:3000/Footer");
    this.footer = result.data;
    // store.getdata(this.$route.fullPath);
  },
  methods: {
    // GetData() {
    //   const store = useStore();
    //   store.getdata(this.$route.fullPath);
    // },
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

.footerlink:hover,
.footerlink.router-link-exact-active {
  color: #ffffff;
  background-position: right;
  border-left: 1px solid #3ec4b5;
}
</style>
