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
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #3ec4b4a8;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #3ec4b5;
  }

  .main-body {
    margin-right: 10px;
  }
  .section {
    width: 93.5%;
    top: 90px;
  }
  .padding {
    padding: 65px 0px 32px 0;
  }
}

@media screen and (max-width: 767px) {
  .padding {
    padding: 30px 0px 32px 0;
  }
  .section {
    width: 100%;
    top: 75px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .section {
    width: 100%;
    top: 75px;
  }
  .padding {
    padding: 30px 0px 32px 0;
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
  align-items: center;
  height: calc(100vh - 145px);
}

div.carousel-indicators {
  bottom: -60px;
}

div.carousel-dark .carousel-indicators [data-bs-target].active {
  background-color: white;
  border: 1px solid #392c23;
  margin: auto 1px;
}

div.carousel-dark .carousel-indicators [data-bs-target] {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #392c23;
  opacity: 1;
}

.section .button {
  border: 1px solid;
  background-color: #cf2a45;
  color: white;
  font-size: 15px;
  width: 124px;
  height: 47px;
  border-radius: 13px;
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
