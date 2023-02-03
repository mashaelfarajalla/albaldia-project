<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row mb-5">
          <div class="d-flex align-items-center">
            <h3
              class="ms-4 animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.1s"
            >
              المشاريع التطويرية
            </h3>

            <div
              class="ms-4 animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.3s"
            >
              <a
                class="dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                فرز
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">الاحدث أولا</a></li>
                <li><a class="dropdown-item" href="#">الاقدم أولا</a></li>
              </ul>
            </div>

            <div
              class="animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.3s"
            >
              <a
                class="dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                التقويم
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">الاحدث أولا</a></li>
                <li><a class="dropdown-item" href="#">الاقدم أولا</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <swiper
            :slidesPerView="1"
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
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }"
            :spaceBetween="30"
            :modules="modules"
            :navigation="true"
            :pagination="true"
            class="mySwiper"
          >
            <swiper-slide
              class="animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.4s"
              v-for="item in data"
              :key="item.id"
            >
              <div class="bg-white text-center py-5">
                <span class="square2">
                  <img :src="item.icon" />
                </span>
                <p class="ptitle mt-3">{{ item.title }}</p>
                <p class="ploctaion mt-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.83"
                      height="23.213"
                      viewBox="0 0 16.83 23.213"
                    >
                      <path
                        id="icons8_marker"
                        d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                        transform="translate(-3 -1)"
                        fill="#392c23"
                      />
                    </svg>
                  </span>
                  {{ item.location }}
                </p>
                <p class="ptime mt-2">مدة التنفيذ: {{ item.time }}</p>

                <div class="d-flex">
                  <div class="line"></div>
                  <p class="ptitle">التكلفة :{{ item.price }}</p>
                  <div class="line"></div>
                </div>
                <P class="p">نسبة الإنجاز</P>

                <div class="progress cs-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: item.rate }"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <router-link
                  :to="'/detailsAlKhadmat/' + item.id"
                  class="d-flex align-items-center justify-content-center my-3"
                >
                  <small class="">عرض التفاصيل</small>
                  <div class="me-2 circle5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8.996"
                      viewBox="0 0 14 8.996"
                    >
                      <path
                        id="Path_382"
                        data-name="Path 382"
                        d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                        transform="translate(-737 -1483.002)"
                        fill="#3ec4b5"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                </router-link>
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
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "./style2.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
    MainSection,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },

  data() {
    return {
      data: [],
    };
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/AlMasharie2");
    this.data = result.data;
  },
};
</script>

<style scoped>
.bg-white {
  padding: 0 23px;

  border-radius: 5px;
  border: 1px solid #d6d6d6;
}
.square2 {
  width: 80px;
  height: 80px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d6d6d6;
  border-radius: 10%;
  margin: 0 auto;
}

.ptitle {
  font-size: 12px;
  font-family: "FFShamelFamily-SansOneBold";
  color: #392c23;
  margin-bottom: 0;
}

.ploctaion {
  font-size: 12px;
  color: #392c23;
}

a {
  text-decoration: none;
}

.ptime {
  font-size: 14px;
  color: #cf2a45;
}

.p {
  font-family: "FFShamelFamily-SansOneBold";

  font-size: 14px;
  color: #cf2a45;
}

.cs-progress {
  background-color: #f2f2f2;
  border: 0.5px solid #e3e3e3;
  height: 17px;
}

.cs-progress,
.cs-progress .progress-bar {
  border-radius: 50px;
}

.cs-progress .progress-bar {
  border-radius: 50px;

  background-color: #3ec4b5;
}
.line {
  border: none;
  border-top: 1px solid #d6d6d6;
  width: 32px;
  margin: auto;
  display: inline-block;
  line-height: 8px;
}
</style>
