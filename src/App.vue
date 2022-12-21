<template>
  <div class="all-page">
    <SideBar />
    <div class="main-body">
      <Header />
      <div class="bg section index container1 padding">
        <div class="container">
          <router-view />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import SideBar from "../src/components/SideBar.vue";
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";

export default {
  name: "",
  components: { SideBar, Header, Footer },
};
</script>

<style>
@font-face {
  font-family: "FFShamelFamily-SansOneBold";
  src: url(./assets/fonts/ArbFONTS-FFShamelFamily-SansOneBold.ttf);
}

@font-face {
  font-family: "FFShamelFamily-SansOneBook";
  src: url(./assets/fonts/ArbFONTS-FFShamelFamily-SansOneBook.ttf);
}
* {
  margin: 0;
  padding: 0;
  font-family: "FFShamelFamily-SansOneBook";
}
@media screen and (min-width: 992px) {
  .main-body {
    margin-right: 10px;
  }
  .section {
    width: 93%;
    top: 90px;
  }
}

@media screen and (max-width: 767px) {
  .section {
    width: 100%;
    top: 75px;
  }
}
.all-page {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
}
.main-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1 1 auto;
  width: 0%;
  background: transparent;
  position: relative;
  z-index: 1;
}

.padding {
  padding: 65px 0px 32px 0;
}
.section {
  align-items: center;
  height: calc(100vh - 145px);
}

.bg2 {
  height: 293px;
  margin-top: 36px;
}

.divmagright p {
  margin-right: 40px;
}

.bg {
  background: url(./assets/image/Group.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.section {
  overflow-y: auto;
  position: fixed;
  left: 0;
}

@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1420px;
  }
}

@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1178px;
  }
}
</style>
