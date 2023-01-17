<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>تقارير وإصدارات</h3>
          <p>
            ننشر في بلدية غزة صحيفة هنا غزة والإصدارات والتقارير المالية
            والتفصيلية التي تفصّل أنشطتنا ومشاريعنا
          </p>
        </div>
        <div class="row mt-5" style="min-height: 347px">
          <swiper
            :slidesPerView="'auto'"
            :spaceBetween="20"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide class="col" v-for="item in data" :key="item.di">
              <div
                class="d-flex justify-content-center report-card"
                :style="{ background: item.color }"
              >
                <figure>
                  <img :src="item.image" />
                  <img :src="item.icon" />
                </figure>
                <div
                  class="text-center d-flex align-items-center flex-column justify-content-center"
                >
                  <h4>{{ item.title }}</h4>
                  <a href="#">
                    تنزيل
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                    >
                      <path
                        id="icons8_download"
                        d="M7,2V9.293L4.352,6.648l-.7.7L7.5,11.207l3.856-3.855-.711-.7L8,9.293V2ZM3,13v1h9V13Z"
                        transform="translate(-3 -2)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </div>
              </div>
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

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MainSection,
  },
  data() {
    return {
      data: [],
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/MediaCenetr3");
    this.data = result.data;
  },
};
</script>

<style scoped>
h4 {
  /* padding: 5px;
  text-align: center; */

  color: white;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 18px !important;
  text-align: center;
  white-space: pre-line;
  margin: 0 auto;
  line-height: 30px;
}
/* .divimage {
  position: relative;
  padding: 5px;
} */

.report-card {
  width: max-content;
  padding: 60px;

  border-radius: 12px;
  gap: 40px;
  position: relative;
  height: 300px;
  max-width: 830px;
}

.report-card figure {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  height: 275px;
  width: auto;
}

.report-card a {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 3px;
  border: 1px solid white;
  width: 79px;
  height: 35px;
  padding-top: 5px;
  margin: 0 auto;
  border-color: transparent;
  transition: all 0.2s ease-in;
}
</style>
