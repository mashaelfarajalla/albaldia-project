<template>
  <div class="all-page">
    <SideBar />
    <div class="main-body">
      <Header />

      <router-view />
      <div class="iconmessage" style="">
        <a href="https://wa.me/message/AQ4737FWY6Q6J1" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.582"
            height="31.603"
            viewBox="0 0 30.582 31.603"
          >
            <path
              id="icons8_facebook_messenger"
              d="M16.291,1C7.892,1,1,7.543,1,15.648A13.445,13.445,0,0,0,5.7,26.069V32.6l5.881-3.924a29.241,29.241,0,0,0,4.7.551,16.529,16.529,0,0,0,10.742-3.694,12.785,12.785,0,0,0,4.549-9.888C31.582,7.543,24.69,1,16.291,1Zm0,2.352c7.186,0,12.939,5.523,12.939,12.3a10.306,10.306,0,0,1-3.722,8.1,14.19,14.19,0,0,1-9.217,3.134,33.463,33.463,0,0,1-4.834-.579l-.441-.055L8.057,28.21V25.131l-.441-.349a10.908,10.908,0,0,1-4.264-9.134C3.352,8.875,9.105,3.352,16.291,3.352Zm-3.529,9.41L5.7,19.82l7.057-2.352L19.82,19.82l7.057-7.057L19.82,15.115Z"
              transform="translate(-1 -1)"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import SideBar from "../src/components/SideBar.vue";
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
// import Stor from "../src/store/index.vue";

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
    width: 5px;
    height: 5px;
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
    padding: 65px 3rem 32px;
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

  .main-body {
    height: calc(100vh - 7vh);
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
  .main-body {
    height: calc(100vh - 7vh);
  }
}
.iconmessage {
  position: fixed;
  left: 80px;
  bottom: 25px;
  margin-right: 2.5rem;
  margin-bottom: 3rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #3ec4b5;
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* z-index: -1; */
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
.section .button:hover {
  background-color: white;
  color: #cf2a45;
  border: 1px solid #cf2a45;
}
.section .button:hover svg path {
  fill: #cf2a45;
}

@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1480px !important ;
  }
}

@media (min-width: 768px) {
  .container-md,
  .container-sm {
    /* max-width: 818px !important; */
    max-width: 865px !important;
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
