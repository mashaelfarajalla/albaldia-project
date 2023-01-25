<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>الخلفية التاريخية</h3>
        </div>
        <div class="row">
          <div id="nav-tabContent">
            <swiper
              :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }"
              :slidesPerView="auto"
              :loop="true"
              :spaceBetween="5"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="modules"
              class="mySwiper2"
            >
              <swiper-slide>
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="row">
                    <div class="col-5">
                      <img src="/image/image 26.png" />
                    </div>
                    <div class="col-5">
                      <h4 class="mt-5">1918 - 1921</h4>
                      <h5 class="mt-3">الحاج محمود سليمان أبو خضرة</h5>
                      <div class="line"></div>
                      <p class="mt-3">
                        في عام 1918، اختارت حكومة الانتداب البريطاني الحاج محمود
                        سليمان أبو خضرة، رئيسًا للمجلس البلدي لمدينة غزة، وتولى
                        بعد الاحتلال رئاسة البلدية بأمر من الحاكم العسكري لمدة 3
                        سنوات.
                      </p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="row">
                    <div class="col-5">
                      <img src="/image/image 26.png" />
                    </div>
                    <div class="col-6">
                      <h1>Mahael</h1>
                    </div>
                  </div>
                </div> </swiper-slide
              ><swiper-slide>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div class="row">
                    <div class="col-5">
                      <img src="/image/image 26.png" />
                    </div>
                    <div class="col-6">
                      <h1>Mahael</h1>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="row mt-5">
          <div id="nav-tab history-slider" role="tablist">
            <swiper
              @swiper="setThumbsSwiper"
              :loop="true"
              :spaceBetween="10"
              :slidesPerView="7"
              :freeMode="true"
              :watchSlidesProgress="true"
              :modules="modules"
              class="mySwiper lineswiper"
            >
              <swiper-slide>
                <a
                  class="active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  >نشأة البلدية</a
                >
              </swiper-slide>
              <swiper-slide>
                <a
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  >1917 - 1906</a
                >
              </swiper-slide>
              <swiper-slide>
                <a
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  >1917 - 1906</a
                >
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MainSection,
  },
  setup() {
    let thumbsSwiper = null;

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper = swiper;
    };

    return {
      setThumbsSwiper,
      thumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>

<style scoped>
/* .history-slider */
a.active::before {
  content: "";
  position: absolute;
  width: 22px;
  height: 22px;
  border: 8px solid rgb(220, 34, 34);
  border-radius: 50%;
  background-color: white;
  z-index: 1;
  outline: white;
  outline-style: solid;
  outline-color: white;
  outline-width: 2px;
  /* right: -38px; */
  right: 30px;
  transition: 0.2s ease-in;
}

a.active::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 40px;
  transform: translate(0%, -50%);
  width: 4px;
  height: 80px !important;
  background-color: #3ec4b5;
}

.line {
  border: none;
  border-top: 2px solid #3ec4b5;
  width: 90px;
  margin: auto;
  display: inline-block;
  line-height: 8px;
}
p {
  font-size: 16px;
  color: #392c23;
  padding-left: 5px;
}
.lineswiper {
  border-bottom: 1px solid #d6d6d6;
}
</style>
