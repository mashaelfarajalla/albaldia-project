<template>
  <MainSection>
    <div class="bg section index container1">
      <div class="container">
        <div class="row bg-white sub-header">
          <div class="col-lg-2 d-flex align-items-center">
            <img :src="data.Imagecover" />
            <h4 class="h4">{{ data.title }}</h4>
          </div>
          <div class="col-sm-12 col-lg">
            <ul class="ul">
              <li
                class=""
                :style="{ 'border-bottom': `2px solid ${data.color}` }"
              >
                <a
                  class="active"
                  :style="{ color: data.color }"
                  style="font-family: 'FFShamelFamily-SansOneBold'"
                  href=""
                  >الرؤية والأهداف</a
                >
              </li>
              <li class=""><a href="">خدمات المركز</a></li>
              <li class=""><a href="">أخبار وإعلانات</a></li>
              <li class=""><a href="">البومات الصور والفيديو</a></li>
              <li class="none"><a href="">مواعيد العمل</a></li>
              <li class="none"><a href="">بيانات الاتصال</a></li>
            </ul>
          </div>
        </div>

        <div class="padding2">
          <div class="row">
            <div
              id="carouselExampleControls"
              class="carousel slide px-0"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  v-for="item in data.images"
                  :key="item.id"
                  class="carousel-item active"
                >
                  <img :src="item.image" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 col-lg-4 divbg">
              <div class="d-flex align-items-center">
                <span>
                  <svg
                    id="svg5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                  >
                    <g
                      id="Rectangle_"
                      data-name="Rectangle "
                      fill="#fafafa"
                      stroke="#d6d6d6"
                      stroke-width="0.5"
                    >
                      <rect width="56" height="56" rx="28" stroke="none" />
                      <rect
                        x="0.25"
                        y="0.25"
                        width="55.5"
                        height="55.5"
                        rx="27.75"
                        :fill="none"
                      />
                    </g>
                    <g id="svgexport-10" transform="translate(13 -15.242)">
                      <g
                        id="Group_53059"
                        data-name="Group 53059"
                        transform="translate(0.001 30)"
                      >
                        <path
                          id="Path_30141"
                          data-name="Path 30141"
                          d="M29.782,126.026a26.4,26.4,0,0,0-4.29-3.724c-6.952-4.878-13.75-5.074-20.981,0a26.4,26.4,0,0,0-4.29,3.724.876.876,0,0,0,0,1.159,26.4,26.4,0,0,0,4.29,3.724c6.952,4.878,13.75,5.074,20.981,0a26.408,26.408,0,0,0,4.29-3.724A.876.876,0,0,0,29.782,126.026Zm-8.4.579A6.384,6.384,0,1,1,15,120.311,6.347,6.347,0,0,1,21.384,126.606Zm-19.289,0a25.061,25.061,0,0,1,6.177-4.527,7.955,7.955,0,0,0,0,9.054A25.069,25.069,0,0,1,2.1,126.606Zm19.634,4.527a7.955,7.955,0,0,0,0-9.054,25.069,25.069,0,0,1,6.177,4.527A25.064,25.064,0,0,1,21.729,131.132Z"
                          transform="translate(-0.001 -113.364)"
                          :fill="data.color"
                        />
                        <path
                          id="Path_30142"
                          data-name="Path 30142"
                          d="M186.509,212.764h.517l-1.4,1.4-1.142-1.142a.882.882,0,0,0-1.247,0l-1.748,1.749a.882.882,0,1,0,1.247,1.247l1.125-1.125L185,216.032a.882.882,0,0,0,1.247,0l2.022-2.022v.223a.882.882,0,0,0,1.764,0v-2.351a.882.882,0,0,0-.882-.882h-2.645a.882.882,0,1,0,0,1.764Z"
                          transform="translate(-170.627 -200.403)"
                          :fill="data.color"
                        />
                        <path
                          id="Path_30143"
                          data-name="Path 30143"
                          d="M241.882,33.527a.882.882,0,0,0,.882-.882V30.882a.882.882,0,1,0-1.764,0v1.764A.882.882,0,0,0,241.882,33.527Z"
                          transform="translate(-226.882 -30)"
                          :fill="data.color"
                        />
                        <path
                          id="Path_30144"
                          data-name="Path 30144"
                          d="M346.938,65.458a.882.882,0,0,0,1.2-.323l.882-1.527a.882.882,0,0,0-1.527-.882l-.882,1.527A.882.882,0,0,0,346.938,65.458Z"
                          transform="translate(-326.201 -60.388)"
                          :fill="data.color"
                        />
                        <path
                          id="Path_30145"
                          data-name="Path 30145"
                          d="M241.882,421a.882.882,0,0,0-.882.882V423.7a.882.882,0,0,0,1.764,0v-1.822A.882.882,0,0,0,241.882,421Z"
                          transform="translate(-226.882 -398.102)"
                          :fill="data.color"
                        />
                        <path
                          id="Path_30146"
                          data-name="Path 30146"
                          d="M347.643,393.3a.882.882,0,0,0-1.527.882l.911,1.578a.882.882,0,1,0,1.527-.882Z"
                          transform="translate(-325.73 -371.617)"
                          :fill="data.color"
                        />
                        <path
                          id="Path_30147"
                          data-name="Path 30147"
                          d="M121.5,65.136a.882.882,0,1,0,1.527-.882l-.882-1.527a.882.882,0,1,0-1.527.882Z"
                          transform="translate(-113.439 -60.388)"
                          :fill="data.color"
                        />
                        <path
                          id="Path_30148"
                          data-name="Path 30148"
                          d="M122.731,392.98a.882.882,0,0,0-1.2.323l-.911,1.578a.882.882,0,0,0,1.527.882l.911-1.578A.882.882,0,0,0,122.731,392.98Z"
                          transform="translate(-113.439 -371.617)"
                          :fill="data.color"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <h5 class="mx-3">رؤية المركز</h5>
              </div>
              <div class="mt-3">
                <p>
                  {{ data.body }}
                </p>
              </div>
            </div>
            <div class="col-md-12 col-lg-4 divbg">
              <div class="d-flex align-items-center">
                <span>
                  <svg
                    id="svg6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                  >
                    <g
                      id="Rectangle_"
                      data-name="Rectangle "
                      fill="#fafafa"
                      stroke="#d6d6d6"
                      stroke-width="0.5"
                    >
                      <rect width="56" height="56" rx="28" stroke="none" />
                      <rect
                        x="0.25"
                        y="0.25"
                        width="55.5"
                        height="55.5"
                        rx="27.75"
                        fill="none"
                      />
                    </g>
                    <g
                      id="svgexport-6_59_"
                      data-name="svgexport-6 (59)"
                      transform="translate(13 13)"
                    >
                      <path
                        id="Path_30140"
                        data-name="Path 30140"
                        d="M27.8,7.175,29.252,5.72a.879.879,0,0,0-.548-1.5L26,3.995l-.228-2.7a.879.879,0,0,0-1.5-.547L22.825,2.2a15,15,0,0,0-18.433,23.4A15,15,0,0,0,27.8,7.175ZM24.315,4.882a.879.879,0,0,0,.8.8l1.553.131-2.1,2.1-2.292-.193-.193-2.292,2.1-2.1ZM17.987,15A2.991,2.991,0,1,1,16.4,12.36l-2.019,2.019a.879.879,0,1,0,1.243,1.243L17.639,13.6a2.968,2.968,0,0,1,.348,1.4Zm-.313-3.918a4.751,4.751,0,1,0,1.243,1.243l2.509-2.509a8.271,8.271,0,1,1-1.243-1.243Zm6.689,13.282A13.242,13.242,0,1,1,5.635,5.637,13.248,13.248,0,0,1,21.542,3.486l-.991.991a.879.879,0,0,0-.257.6c0,.032,0,.064,0,.1l.118,1.4a10.028,10.028,0,1,0,3.01,3.01l1.4.118.074,0h.013l.035,0,.057,0,.035-.005.055-.011.035-.009.053-.016.034-.012.051-.022.032-.015.05-.028.029-.017c.017-.011.034-.024.051-.036l.023-.017a.871.871,0,0,0,.069-.062l.991-.991a13.248,13.248,0,0,1-2.151,15.907Zm0,0"
                        transform="translate(0.001 -0.001)"
                        :fill="data.color"
                      />
                    </g>
                  </svg>
                </span>
                <h5 class="mx-3">أهداف المركز</h5>
              </div>
              <div
                v-for="item in data.children"
                :key="item.id"
                class="mt-3 d-flex"
              >
                <span class="span2">{{ item.id }}</span>
                <P>
                  {{ item.body }}
                </P>
              </div>
            </div>
            <div class="col-md-12 col-lg-4 divbackround">
              <swiper :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="item in data.children2" :key="item.id">
                  <div class="div">
                    <div>
                      <h5>{{ item.title }}</h5>
                    </div>
                    <div class="divp">
                      <P style="line-height: 2">
                        {{ item.body }}
                      </P>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Navigation } from "swiper";
import axios from "axios";
export default {
  components: {
    Swiper,
    SwiperSlide,
    MainSection,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/AlBaladia8/" + this.$route.params.id
    );
    this.data = result.data;
    console.log(this.data);
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .padding2 {
    padding: 0 3rem 32px;
  }
  .ul {
    margin-top: 62px;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 57px !important;
    height: 100px !important;
    background: black !important;
    top: 32% !important;
  }
  .divp {
    padding: 0 54px;
    text-align: center;
    margin-top: 40px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .padding2 {
    padding: 0 0rem 32px;
  }
  .ul {
    margin-top: 13px;
  }
  .none {
    display: none;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 40px !important;
    height: 60px !important;
    background: black !important;
    top: 29% !important;
  }
  .w-100 {
    height: 150px;
  }

  .divbackround,
  .divbg {
    margin-top: 40px;
  }
  .divp {
    padding: 0px 43px;
    text-align: center;
    margin-top: 40px;
  }
}

@media screen and (max-width: 767px) {
  .divbackround,
  .divbg {
    margin-top: 40px;
  }
  .padding2 {
    padding: 0 0rem 32px;
  }
  .ul {
    margin-top: 13px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px !important;
    height: 60px !important;
    background: black !important;
    top: 29% !important;
  }

  .w-100 {
    height: 150px;
  }
  .none {
    display: none;
  }
  .div {
    padding: 35px 0;
  }
  .divp {
    padding: 0px 43px;
    text-align: center;
    margin-top: 40px;
  }
}
.sub-header {
  justify-content: space-around;
  display: flex;
  align-items: center;
}
.ul {
  align-items: center;
  display: flex;
  justify-content: start;
}
.ul li {
  list-style-type: none;
  margin: 0 8px;
}
.ul li a {
  color: #392c23;
  text-decoration: none;
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBook";
}
.h4 {
  margin-right: 10px;
  text-align: start;
  font-size: 16px;
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBold";
}

.divbg {
  background-color: white;
}
.divp {
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBook";
  color: #392c23;
}
.span2 {
  width: 40px;
  height: 24px;
  line-height: 24px;
  padding-top: 2px;
  margin-left: 10px;
  display: inline-block;
  border: solid 1px #d6d6d6;
  text-align: center;
  border-radius: 50%;
}
.divbackround {
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  border-radius: 20px;
  /* margin-top: 40px; */
}
.div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
