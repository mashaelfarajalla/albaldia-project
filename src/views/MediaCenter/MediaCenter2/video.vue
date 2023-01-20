<template>
  <div
    class="tab-pane fade show"
    id="our-video"
    role="tabpanel"
    aria-labelledby="pills-video-tab"
  >
    <div class="row">
      <swiper
        :slidesPerView="1"
        :space-between="30"
        :breakpoints="{
          '480': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in data" :key="item.id">
          <div class="card">
            <div class="btn-play">
              <i class="fa-solid fa-play"></i>
            </div>
            <img :src="item.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                {{ item.title }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/MediaCenetr22");

    this.data = result.data;
    console.log(result.data);
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .card-body p {
    padding-left: 135px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .card-body p {
    padding-left: 30px;
  }
}
.card {
  padding: 0;
  position: relative;
}
.card-body {
  position: relative;
  background-color: #f1f1f1;
}

.carousel-control-prev,
.carousel-control-next {
  width: 40px !important;
  height: 80px !important;
  background: black !important;
  top: 28% !important;
}

.btn-play {
  width: 64px;
  position: absolute;
  top: 33%;
  left: 50%;
  height: 64px;
  background: #3ec4b5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-play::after {
  height: 77px;
  width: 77px;
  content: "";
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: rgb(59 186 172 / 49%);
  border-radius: 50%;
  /* z-index: -1; */
}
i.fa-solid.fa-play {
  color: white;
  font-size: 25px;
  z-index: 1;
}
</style>
