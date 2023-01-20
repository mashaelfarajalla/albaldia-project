<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="d-flex align-items-center">
          <h3 class="ms-4">أخبار واعلانات</h3>

          <div class="ms-4">
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

          <div class="">
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
        <div class="row mySwiper2 mt-5">
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }"
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <div>
                <img src="/image/Group 1.png" class="w-100" />
                <div class="carousel-caption round d-sm-block">
                  <div class="divmag">
                    <div style="position: absolute; top: 22px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                      >
                        <g
                          id="Icons8_share"
                          transform="translate(-1688.999 -326)"
                        >
                          <g
                            id="Rectangle_2289"
                            data-name="Rectangle 2289"
                            transform="translate(1688.999 326)"
                            fill="none"
                            stroke="#fff"
                            stroke-width="1.5"
                          >
                            <rect width="29" height="29" rx="3" stroke="none" />
                            <rect
                              x="0.75"
                              y="0.75"
                              width="27.5"
                              height="27.5"
                              rx="2.25"
                              fill="none"
                            />
                          </g>
                          <path
                            id="icons8_share-2"
                            data-name="icons8_share"
                            d="M12.5,1A2.507,2.507,0,0,0,10,3.5a2.643,2.643,0,0,0,.051.5L5.52,6.039a2.5,2.5,0,1,0,.008,2.91l4.535,2.016A2.415,2.415,0,0,0,10,11.5a2.521,2.521,0,1,0,.473-1.449L5.938,8.039A2.48,2.48,0,0,0,6,7.5a2.523,2.523,0,0,0-.062-.547l4.508-2.039A2.5,2.5,0,1,0,12.5,1Zm0,1A1.5,1.5,0,1,1,11,3.5,1.491,1.491,0,0,1,12.5,2Zm-9,4A1.5,1.5,0,1,1,2,7.5,1.49,1.49,0,0,1,3.5,6Zm9,4A1.5,1.5,0,1,1,11,11.5,1.491,1.491,0,0,1,12.5,10Z"
                            transform="translate(1695 333)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>09</span>
                    <span>08</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g id="icons8_clock" transform="translate(-2 -2)">
                          <path
                            id="Path_966"
                            data-name="Path 966"
                            d="M14.892,13.586,13.88,12.117a1.437,1.437,0,0,1-.287-.681L13.12,8.05A1.05,1.05,0,0,0,12.07,7h0a1.05,1.05,0,0,0-1.05,1.05L10.6,11.734a1.792,1.792,0,0,0,.623,1.57l2.181,1.767a1.049,1.049,0,0,0,1.485,0h0A1.052,1.052,0,0,0,14.892,13.586Z"
                            transform="translate(-0.121 -0.166)"
                            fill="#392c23"
                          />
                          <path
                            id="Path_967"
                            data-name="Path 967"
                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,17a7,7,0,1,1,7-7A7,7,0,0,1,12,19Z"
                            transform="translate(0 0)"
                            fill="#392c23"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div class="line"></div>
                  <span>13:27:03</span>
                  <p>بلدية غزة تفتتح بئر مياه في منطقة الشعف شرق حي التفاح</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img src="/image/Mask Group 1.png" class="w-100" />
                <div class="carousel-caption round d-sm-block">
                  <div class="divmag">
                    <div style="position: absolute; top: 22px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                      >
                        <g
                          id="Icons8_share"
                          transform="translate(-1688.999 -326)"
                        >
                          <g
                            id="Rectangle_2289"
                            data-name="Rectangle 2289"
                            transform="translate(1688.999 326)"
                            fill="none"
                            stroke="#fff"
                            stroke-width="1.5"
                          >
                            <rect width="29" height="29" rx="3" stroke="none" />
                            <rect
                              x="0.75"
                              y="0.75"
                              width="27.5"
                              height="27.5"
                              rx="2.25"
                              fill="none"
                            />
                          </g>
                          <path
                            id="icons8_share-2"
                            data-name="icons8_share"
                            d="M12.5,1A2.507,2.507,0,0,0,10,3.5a2.643,2.643,0,0,0,.051.5L5.52,6.039a2.5,2.5,0,1,0,.008,2.91l4.535,2.016A2.415,2.415,0,0,0,10,11.5a2.521,2.521,0,1,0,.473-1.449L5.938,8.039A2.48,2.48,0,0,0,6,7.5a2.523,2.523,0,0,0-.062-.547l4.508-2.039A2.5,2.5,0,1,0,12.5,1Zm0,1A1.5,1.5,0,1,1,11,3.5,1.491,1.491,0,0,1,12.5,2Zm-9,4A1.5,1.5,0,1,1,2,7.5,1.49,1.49,0,0,1,3.5,6Zm9,4A1.5,1.5,0,1,1,11,11.5,1.491,1.491,0,0,1,12.5,10Z"
                            transform="translate(1695 333)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>09</span>
                    <span>08</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g id="icons8_clock" transform="translate(-2 -2)">
                          <path
                            id="Path_966"
                            data-name="Path 966"
                            d="M14.892,13.586,13.88,12.117a1.437,1.437,0,0,1-.287-.681L13.12,8.05A1.05,1.05,0,0,0,12.07,7h0a1.05,1.05,0,0,0-1.05,1.05L10.6,11.734a1.792,1.792,0,0,0,.623,1.57l2.181,1.767a1.049,1.049,0,0,0,1.485,0h0A1.052,1.052,0,0,0,14.892,13.586Z"
                            transform="translate(-0.121 -0.166)"
                            fill="#392c23"
                          />
                          <path
                            id="Path_967"
                            data-name="Path 967"
                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,17a7,7,0,1,1,7-7A7,7,0,0,1,12,19Z"
                            transform="translate(0 0)"
                            fill="#392c23"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div class="line"></div>
                  <span>13:27:03</span>
                  <p>بلدية غزة تفتتح بئر مياه في منطقة الشعف شرق حي التفاح</p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div>
                <img src="/image/Group11.png" class="w-100" />
                <div class="carousel-caption round d-sm-block">
                  <div class="divmag">
                    <div style="position: absolute; top: 22px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                      >
                        <g
                          id="Icons8_share"
                          transform="translate(-1688.999 -326)"
                        >
                          <g
                            id="Rectangle_2289"
                            data-name="Rectangle 2289"
                            transform="translate(1688.999 326)"
                            fill="none"
                            stroke="#fff"
                            stroke-width="1.5"
                          >
                            <rect width="29" height="29" rx="3" stroke="none" />
                            <rect
                              x="0.75"
                              y="0.75"
                              width="27.5"
                              height="27.5"
                              rx="2.25"
                              fill="none"
                            />
                          </g>
                          <path
                            id="icons8_share-2"
                            data-name="icons8_share"
                            d="M12.5,1A2.507,2.507,0,0,0,10,3.5a2.643,2.643,0,0,0,.051.5L5.52,6.039a2.5,2.5,0,1,0,.008,2.91l4.535,2.016A2.415,2.415,0,0,0,10,11.5a2.521,2.521,0,1,0,.473-1.449L5.938,8.039A2.48,2.48,0,0,0,6,7.5a2.523,2.523,0,0,0-.062-.547l4.508-2.039A2.5,2.5,0,1,0,12.5,1Zm0,1A1.5,1.5,0,1,1,11,3.5,1.491,1.491,0,0,1,12.5,2Zm-9,4A1.5,1.5,0,1,1,2,7.5,1.49,1.49,0,0,1,3.5,6Zm9,4A1.5,1.5,0,1,1,11,11.5,1.491,1.491,0,0,1,12.5,10Z"
                            transform="translate(1695 333)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>09</span>
                    <span>08</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g id="icons8_clock" transform="translate(-2 -2)">
                          <path
                            id="Path_966"
                            data-name="Path 966"
                            d="M14.892,13.586,13.88,12.117a1.437,1.437,0,0,1-.287-.681L13.12,8.05A1.05,1.05,0,0,0,12.07,7h0a1.05,1.05,0,0,0-1.05,1.05L10.6,11.734a1.792,1.792,0,0,0,.623,1.57l2.181,1.767a1.049,1.049,0,0,0,1.485,0h0A1.052,1.052,0,0,0,14.892,13.586Z"
                            transform="translate(-0.121 -0.166)"
                            fill="#392c23"
                          />
                          <path
                            id="Path_967"
                            data-name="Path 967"
                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,17a7,7,0,1,1,7-7A7,7,0,0,1,12,19Z"
                            transform="translate(0 0)"
                            fill="#392c23"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div class="line"></div>
                  <span>13:27:03</span>
                  <p>بلدية غزة تفتتح بئر مياه في منطقة الشعف شرق حي التفاح</p>
                </div>
              </div> </swiper-slide
            ><swiper-slide>
              <div v-for="item in data" :key="item.id" class="divbackground">
                <p>{{ item.p }}</p>
              </div>
            </swiper-slide>
          </swiper>
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

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Pagination } from "swiper";
export default {
  components: { MainSection, Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/MediaCenetr");
    this.data = result.data;
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) and (max-width: 991px) {
   .container1 div.carousel-caption {
    height: 79%;
  }
}
@media screen and (min-width: 992px) {
  .container1 div.carousel-caption {
    height: 77%;
  }
}
@media screen and (max-width: 767px) {
   .container1 div.carousel-caption {
    height: 79%;
  }
}

.line {
  height: 67px;
  width: 1px;
  background: #ffffff;
  /* margin: auto !important; */
}

.container1 div.carousel-caption {
  top: 0;
  position: absolute;
  width: 100%;
  right: 0%;
  text-align: right;
  background: #12100e2e;
  z-index: 1;
  bottom: 0rem;
  left: 0%;
}

.container1.section div .carousel-caption p {
  font-family: FFShamelFamily-SansOneBook;
  font-size: 18px;
  color: white;
}

.container1.section div .carousel-caption span {
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 14px;
  display: block;
  color: white;
}

.container1 div.carousel-caption {
  padding: 165px 20px 0 20px;
}

.section div .carousel-caption span svg path {
  fill: white;
}
.divbackground {
  background-color: #f3f2f2;
  color: #cf2a45;
  font-size: 14px;
  border-radius: 5px;
  border-left: 4px solid #498973;
}
.divbackground p {
  padding: 20px 13px 20px 5px;
}
</style>
