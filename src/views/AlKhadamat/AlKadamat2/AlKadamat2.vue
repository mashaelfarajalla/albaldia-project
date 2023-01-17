<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>أنظمة وأدلة</h3>
          <div class="row">
            <div v-for="item in data" :key="item.id" class="col">
              <div class="row justify-content-around">
                <div class="col-1">
                  <div class="circle7">
                    <img :src="item.icon" />
                  </div>
                </div>
                <div class="col-4">{{ item.title }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <swiper
              :slidesPerView="3"
              :spaceBetween="30"
              :freeMode="true"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="list in data.children" :key="list.id">
                <div class="col-5 bg-white py-5 px-3">
                  <p>{{ list.title }}</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import axios from "axios";

import MainSection from "@/components/MainSection.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default {
  components: { MainSection, Swiper, SwiperSlide },
  data() {
    return {
      data: [],
      data2: [],
    };
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/AlKhadamat2");
    this.data = result.data;
    this.data2 = result.data.children;
    console.log(this.data2);
  },
};
</script>

<style scoped>
.circle7 {
  width: 64px;
  height: 64px;
  line-height: 64px;
  border-radius: 50%;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  background-color: #f3f2f2;
}
</style>
