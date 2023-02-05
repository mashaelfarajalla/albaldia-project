<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="circle4">
        <svg
          id="svgexport-6_9_"
          data-name="svgexport-6 (9)"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            id="Path_25757"
            data-name="Path 25757"
            d="M32,21.656a10.367,10.367,0,0,0-7.575-9.967A12.218,12.218,0,1,0,1.694,18.429L.045,24.392l5.963-1.649a12.173,12.173,0,0,0,5.68,1.682,10.347,10.347,0,0,0,15.231,6.137l5.035,1.393-1.393-5.035A10.307,10.307,0,0,0,32,21.656Zm-25.7-.94-3.57.988.988-3.57L3.5,17.781a10.34,10.34,0,1,1,3.159,3.159Zm22.962,8.55-2.649-.733-.354.23a8.472,8.472,0,0,1-12.636-4.407A12.242,12.242,0,0,0,24.356,13.627a8.472,8.472,0,0,1,4.407,12.636l-.23.354Zm0,0"
            fill="#392c23"
          />
          <path
            id="Path_25758"
            data-name="Path 25758"
            d="M182.387,271H180.5v1.887h1.887Zm0,0"
            transform="translate(-169.217 -254.069)"
            fill="#3ec4b5"
          />
          <path
            id="Path_25759"
            data-name="Path 25759"
            d="M137.387,93.774A1.868,1.868,0,0,0,138,95.167l2.216,2.028v2.3H138.33V98.026l-1.6-1.467a3.774,3.774,0,1,1,6.32-2.785H141.16a1.887,1.887,0,1,0-3.774,0Zm0,0"
            transform="translate(-127.048 -84.39)"
            fill="#3ec4b5"
          />
        </svg>
      </div>
      <h3
        class="d-inline-block mx-2 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.2s"
      >
        الأسئلة الشائعة
      </h3>
      <p
        class="animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.2s"
      >
        هنا بعض الأسئلة الشائعة وإجاباتها
      </p>
      <form
        class="animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.3s"
      >
        <div class="row justify-content-start mt-4">
          <div
            class="form-group col-12 col-md-6 col-lg-10"
            style="position: relative"
          >
            <input
              type="text"
              class="form-control"
              placeholder="ابحث عن سؤال ..."
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </form>
    </div>
  </div>

  <swiper :pagination="pagination" :modules="modules" class="mySwiper">
    <swiper-slide v-for="list in data" :key="list.id">
      <div class="row mySwiper1">
        <div
          class="col-lg-6 divqutions animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.1s"
        >
          <p
            class="animate__animated animate__fadeInUp"
            style="animation-duration: 1s; animation-delay: 0.2s"
            v-for="item in list"
            :key="item.id"
            @click="getdata(item)"
          >
            {{ item.question }}
          </p>
        </div>
        <div class="col-lg-6">
          <Section2 :data="data2" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Section2 from "./Section2.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";

export default {
  name: "Section1",
  components: {
    Swiper,
    SwiperSlide,
    Section2,
  },
  data() {
    return {
      data: [],
      data2: [],
    };
  },
  methods: {
    getdata(item) {
      // this.data2 = this.data[id - 1];
      this.data2 = item;
      console.log(this.data2);
    },
  },
  setup() {
    return {
      // pagination: {
      //   clickable: true,
      //   renderBullet: function (index, className) {
      //     return '<span class="' + className + '">' + (index + 1) + "</span>";
      //   },
      // },
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/Questions");
    this.data = result.data[0];
    console.log(result.data[0].pag1);
    this.getdata(result.data[0].pag1[0]);
  },
};
</script>
<style scoped>
.circle4 {
  height: 56px;
  width: 56px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  padding-top: 10px;
  display: inline-block;
  border: 1px solid #392c23;
  margin: 0 4px;
}
input[type="text"] {
  border: none;
  border-bottom: 1px solid #392c23;
  background-color: transparent;
  position: relative;
}

.fa-magnifying-glass:before,
.fa-search:before {
  position: absolute;
  top: 7px;
  left: 24px;
}

.divqutions p:first-child {
  background-color: #3ec4b5;
  color: white;
}
.swiper-slide p {
  background-color: white;
  text-align: start;
  padding: 15px 30px 15px 41px;
  border-radius: 1.25rem !important;
  border: solid 1px #d6d6d6;
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBold";
  color: #392c23;
  cursor: pointer;
}

span.swiper-pagination-bullet {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #392c23;
  border-radius: 0;
  opacity: 1;
  background: white;
  align-items: center;
  justify-content: center;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 350px;
}
</style>
