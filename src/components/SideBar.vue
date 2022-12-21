<template>
  <nav
    class="sidber d-lg-flex flex-shrink-0 flex-sm-row flex-lg-column justify-content-between"
  >
    <ul class="nav nav-pills nav-flush flex-sm-row flex-lg-column text-center">
      <li v-for="item in sidebar" :key="item.id" class="nav-item">
        <router-link
          :to="{ name: `${item.name}` }"
          aria-current="page"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Home"
        >
          <img :src="item.icon" />
          <div class="tooltip2">
            <p>{{ item.title }}</p>
          </div>
        </router-link>
      </li>
    </ul>

    <div class="d-lg-flex flex-column align-items-center none">
      <p class="text mb-2">
        جميع الحقوق محفوظة لدى <span class="span">بلدية غزة</span> &copy; 2021
      </p>
      <div v-for="item in socialmedai" :key="item.id" class="square">
        <!-- <img src="../assets/image/icons8_facebook_logo_1.svg" /> -->
        <img :src="item.icon" />
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "SideBar",
  data() {
    return {
      sidebar: [],
      socialmedai: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/SideBar");
    this.sidebar = result.data;
    console.log(result.data);
    let result2 = await axios.get("http://localhost:3000/SocialMedai");
    this.socialmedai = result2.data;
  },
};
</script>

<style>
@media screen and (min-width: 992px) {
  nav {
    position: relative;
    width: 6%;
    top: 0;
    right: 0;
    height: 100vh;
  }
  nav ul li {
    width: 100%;
    height: 88px;
    border-bottom: 1px dashed #d6d6d6;
  }

  .tooltip2 {
    border-radius: 10%;
    position: fixed;
    color: white;
    display: flex;
    height: 40px;
    background: rgb(57 44 35 / 70%);
    z-index: 2;
    opacity: 0;
    right: 0;
    padding: 10px;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  nav ul li:hover .tooltip2 {
    right: 71px;
    opacity: 1;
  }
}

@media screen and (max-width: 767px) {
  nav {
    position: fixed;
    height: 10vh;
    bottom: 0;
    width: 100%;
  }

  nav ul {
    width: 100%;
  }

  nav ul li {
    width: 25%;
    height: 10vh;
  }
  nav .none {
    display: none;
  }
  .tooltip2 {
    display: none;
  }
}
nav {
  overflow: hidden;
  background-color: #fafafa;
  z-index: 1;
  transition: 0.5s;
}
nav ul {
  margin-top: 0;
  padding: 0;
}
nav ul li {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li a {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

nav ul li a svg path {
  fill: #392c23;
}

nav ul li .router-link-exact-active,
nav ul li:hover {
  height: 87px;
  width: 100%;
  background-color: #f3f2f2;
}
nav ul li:hover a svg path,
nav ul li .router-link-exact-active svg path {
  fill: #cf2a45;
}
.text {
  margin: 0 auto;
  font-family: "FFShamelFamily-SansOneBook";
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: #392c23;
  font-size: 12px;
}

.text .span {
  color: #cf2a45;
}
.square {
  display: flex;
  margin-bottom: 6px;
  text-align: center;
  height: 25px;
  width: 25px;
  background-color: #3ec4b5;
  align-items: center;
  justify-content: center;
}
</style>
