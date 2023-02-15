<template>
  <nav
    class="sidber d-none d-lg-flex flex-shrink-0 flex-sm-row flex-lg-column justify-content-between"
    style="z-index: var(--z-fixed)"
  >
    <ul class="nav nav-pills nav-flush flex-sm-row flex-lg-column text-center">
      <router-link
        v-for="item in store.sidebar"
        :key="item.id"
        exact
        :to="{ name: `${item.name}` }"
        aria-current="page"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Home"
      >
        <li class="nav-item">
          <img :src="item.icon" />
          <div class="tooltip2">
            <p>{{ item.title }}</p>
          </div>
        </li>
      </router-link>
    </ul>

    <div
      v-if="store.show"
      class="d-lg-flex flex-column align-items-center none"
    >
      <p class="text mb-2">
        جميع الحقوق محفوظة لدى <span class="span">بلدية غزة</span> &copy; 2021
      </p>
      <div v-for="item in socialmedai" :key="item.id" class="square">
        <img :src="item.icon" />
      </div>
    </div>
  </nav>

  <nav
    class="sidber d-sm-flex d-lg-none flex-shrink-0 flex-sm-row flex-lg-column justify-content-between"
    style="z-index: var(--z-fixed)"
  >
    <ul class="nav nav-pills nav-flush flex-sm-row flex-lg-column text-center">
      <li v-for="item in store.indexhome" :key="item.id" class="nav-item">
        <router-link
          exact
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
  </nav>
</template>

<script>
import axios from "axios";
import { useStore } from "../store";
export default {
  name: "SideBar",
  data() {
    return {
      sidebar: [],
      socialmedai: [],
    };
  },
  setup() {
    const store = useStore();

    return { store };
  },
  async mounted() {
    let result2 = await axios.get("http://localhost:3000/SocialMedai");
    this.socialmedai = result2.data;
    // console.log(this.store.indexhome);
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

  nav ul .router-link-exact-active li,
  nav ul a:hover {
    height: 87px;
    width: 100%;
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
    border-left: 1px dashed #d6d6d6;

    width: 25%;
    height: 10vh;
  }
  nav .none {
    display: none;
  }
  .tooltip2 {
    display: none;
  }

  nav ul li .router-link-exact-active {
    height: 10vh;
    width: 100%;
  }
  /* nav ul li:hover {
    height: 10vh;
  } */
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  nav {
    position: fixed;
    height: 11vh;
    bottom: 0;
    width: 100%;
  }

  nav ul {
    width: 100%;
  }

  nav ul li {
    border-left: 1px dashed #d6d6d6;

    width: 25%;
    height: 15vh;
  }
  nav .none {
    display: none;
  }
  .tooltip2 {
    display: none;
  }
  nav ul li .router-link-exact-active {
    height: 15vh;
    width: 100%;
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
  background-color: #fafafa;
}
nav ul li a {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

nav ul a li img {
  filter: invert(16%) sepia(14%) saturate(1055%) hue-rotate(341deg)
    brightness(62%) contrast(92%);
}
nav ul .router-link-exact-active li,
nav ul a:hover li {
  background-color: #f3f2f2;
}
nav ul li:hover img,
nav ul .router-link-exact-active li img {
  filter: invert(28%) sepia(42%) saturate(5614%) hue-rotate(335deg)
    brightness(84%) contrast(92%);
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
