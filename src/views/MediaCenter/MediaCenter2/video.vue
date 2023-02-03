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
        <swiper-slide
          v-for="item in data"
          :key="item.id"
          class="animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.2s"
        >
          <div class="card">
            <a
              class="btn-play"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="getdata(item.src)"
            >
              <i class="fa-solid fa-play"></i>
            </a>

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
    <popupvideo :datassrc="data2" />
  </div>
</template>

<script>
import axios from "axios";
import popupvideo from "./poupvideo.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

export default {
  data() {
    return {
      data: [],
      data2: "",
    };
  },
  methods: {
    getdata(item) {
      this.data2 = item;
      console.log(this.data2);
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    popupvideo,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/MediaCenetr22");
    this.data = result.data;
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
  text-decoration: none;
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
.popup-video {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  /* display: flex; */
  display: none;

  /* align-items: center; */
  justify-items: center;
}
.popup-video iframe {
  width: 750px;
  height: 700px;
  transform: translate(-50%, 50%);
}
.popup-video span {
  font-size: 50px;
  position: absolute;
  top: 101px;
  right: 114px;
  color: white;
  z-index: 100;
  cursor: pointer;
  font-weight: bolder;
}
</style>
