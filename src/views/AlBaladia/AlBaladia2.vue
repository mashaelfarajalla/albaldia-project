<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>الخلفية التاريخية</h3>
        </div>
        <div class="row">
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
                    سليمان أبو خضرة، رئيسًا للمجلس البلدي لمدينة غزة، وتولى بعد
                    الاحتلال رئاسة البلدية بأمر من الحاكم العسكري لمدة 3 سنوات.
                  </p>
                </div>
              </div> </swiper-slide
            ><swiper-slide>
              <div class="row">
                <div class="col-5">
                  <img src="/image/image 26.png" />
                </div>
                <div class="col-6">
                  <h1>Mahael</h1>
                </div>
              </div></swiper-slide
            ><swiper-slide>
              <div class="row">
                <div class="col-5">
                  <img src="/image/image 26.png" />
                </div>
                <div class="col-6">
                  <h1>Mahael</h1>
                </div>
              </div></swiper-slide
            ><swiper-slide>
              <div class="row">
                <div class="col-5">
                  <img src="/image/image 26.png" />
                </div>
                <div class="col-6">
                  <h1>Mahael</h1>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="row">
                <div class="col-5">
                  <img src="/image/image 26.png" />
                </div>
                <div class="col-4">
                  <h1>Mahael</h1>
                </div>
              </div></swiper-slide
            >
          </swiper>
        </div>
        <div class="row">
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
              <P>نشأة البلدية</P>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
            <swiper-slide>
              <p>1917 - 1906</p>
            </swiper-slide>
          </swiper>
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
