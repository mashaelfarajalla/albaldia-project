<template>
  <MainSection>
    <div class="bg section index container1" style="padding-top: 65px">
      <div class="container">
        <div class="row">
          <h3
            class="animate__animated animate__fadeInUp"
            style="
              animation-duration: 1s;
              animation-delay: 0.1s;
              padding-right: 45px;
            "
          >
            أنظمة وأدلة
          </h3>
          <div class="row rowchalidren mt-5">
            <ul class="nav mb-3" id="pills-tab" role="tablist">
              <li
                v-for="item in data"
                :key="item.id"
                class=""
                role="presentation"
              >
                <a
                  class="col-sm-6 col-md-4 col-lg-auto"
                  :class="item.active"
                  :id="item.id"
                  data-bs-toggle="pill"
                  :data-bs-target="'#' + item.target"
                  type="button"
                  role="tab"
                  :aria-controls="item.target"
                  aria-selected="true"
                >
                  <div class="row justify-content-around align-items-center">
                    <div class="col-2">
                      <div class="circle7">
                        <img :src="item.icon" />
                      </div>
                    </div>
                    <div class="col-sm-5 col-md-7 col-lg-4 title">
                      {{ item.title }}
                    </div>
                  </div>
                </a>
              </li>
              <!-- <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li> -->
            </ul>
          </div>
          <div class="row mt-3 rowchalider2">
            <div class="tab-content" id="pills-tabContent">
              <div
                v-for="item in data"
                :key="item.id"
                class="tab-pane fade show"
                :class="item.active"
                :id="item.target"
                role="tabpanel"
                :aria-labelledby="item.id"
              >
                <swiper
                style="background-color: #f3f2f2"
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
                      slidesPerView: 7,
                      spaceBetween: 20,
                    },
                  }"
                  :spaceBetween="20"
                  :freeMode="true"
                  :pagination="{
                    clickable: true,
                  }"
                  :modules="modules"
                  class="mySwiper"
                >
                  <swiper-slide v-for="item in body" :key="item.id">
                    <div class="col bg-white2">
                      <p>{{ item.p }}</p>
                    </div>
                  </swiper-slide>
                  <!-- <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="col bg-white2">
                      <p>اشتراك مياه جديد</p>
                    </div>
                  </swiper-slide> -->
                </swiper>

                 <div class="row rowchild mt-5" style="padding-right: 45px">
            <div class="col-auto" style="padding: 0 25px">
              <p class="pperant">الوثائق المطلوبة</p>
              <p class="pchild">
                الفاتورة<span> | </span> سند ملكية <span> | </span> صورة الهوية
              </p>
            </div>
            <div class="col-auto " style="padding: 0 25px">
              <p class="pperant">مدة التنفيذ / يوم</p>
              <p class="pchild">فورا</p>
            </div>
            <div class="col-auto " style="padding: 0 25px">
              <p class="pperant">جهة التنفيذ</p>
              <p class="pchild">حسابات المشتركين</p>
            </div>
            <div class="col-auto" style="padding: 0 25px">
              <p class="pperant">الرسوم المطلوبة بالشيكل</p>
              <p class="pchild">115</p>
            </div>
          </div>
          <div class="row mt-5" style="padding-right: 45px">
            <p class="pperant">تسلسل إجراءات التقديم</p>
            <p class="pchild">
              يرجى تتبع التسلسل التالي لتقديم طلب الحصول على الخدمة المطلوبة
            </p>
            <div  class="d-flex flex-child">
              <p class="d-flex ms-5 ">
                <div class="circlespan mx-2">1</div>
                <span class="pcolor">دائرة خدمات الجمهور</span>
              </p>
              <p class="d-flex">
                <div class="circlespan mx-2">2</div>
                <span class="pcolor">  قسم التخطيط الحضر</span>
              </p>
            </div>
          </div>
              </div>
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { FreeMode, Pagination } from "swiper";
export default {
  components: { MainSection, Swiper, SwiperSlide },
  data() {
    return {
      data: [],
      data2: [],
      body:[
        {id:1 , p:"اشتراك مياه جديد"},
        {id:2 , p:"اشتراك مياه جديد"},
        {id:3 , p:"اشتراك مياه جديد"},
        {id:4 , p:"اشتراك مياه جديد"},
        {id:5 , p:"اشتراك مياه جديد"},
        {id:6 , p:"اشتراك مياه جديد"},
        {id:7 , p:"اشتراك مياه جديد"},
        {id:8 , p:"اشتراك مياه جديد"},
        {id:9 , p:"اشتراك مياه جديد"},
        {id:10 , p:"اشتراك مياه جديد"},
        {id:11 , p:"اشتراك مياه جديد"},
        {id:12 , p:"اشتراك مياه جديد"},
        {id:13 , p:"اشتراك مياه جديد"},
        {id:14 , p:"اشتراك مياه جديد"},
        {id:15 , p:"اشتراك مياه جديد"},
        {id:16 , p:"اشتراك مياه جديد"},
        {id:17 , p:"اشتراك مياه جديد"}

      ]
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
    console.log(this.data);
  },
};
</script>

<style scoped>
.rowchild .col-auto:last-child {
  border-left: 0px;
}

ul li a {
  text-decoration: none;
  color: #392c23;
}
ul li a.active .circle7 {
  background-color: #3ec4b5;
}

ul li a.active .title {
  color: #3ec4b5;
}

ul li a.active .circle7 img {
  filter: invert(92%) sepia(100%) saturate(1%) hue-rotate(36deg)
    brightness(104%) contrast(102%);
}
.rowchalider2 .swiper-slide:nth-child(3) .bg-white2 {
  background-color: #3ec4b5;
  color: white;
}
.bg-white2:hover {
  cursor: pointer;
  background-color: #3ec4b5;
  color: white;
}
.rowchalider2 .swiper-slide:nth-child(3)::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #3ec4b5;
  z-index: 1;
  left: 50%;
}
.swiper-wrapper {
    padding-top: 20px;
}
@media screen and (min-width: 992px) {
  .col-auto {
    border-left: 2px solid #d6d6d6;
  }
  .m {
    justify-content: space-around;
  }
  .swiper {
    overflow: scroll;
    height: 132px;
  }
  .row.mt-5.rowchalider2 {
    padding: 35px 0 0;
  }
  .rowchalider2 .swiper-slide:nth-child(3)::after {
    top: 71%;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .col-auto {
    border-left: 2px solid #d6d6d6;
  }
  .swiper {
    height: 110px;
  }
  .rowchalider2 .swiper-slide:nth-child(3)::after {
    top: 76%;
  }
}
@media screen and (max-width: 767px) {
  .flex-child {
    flex-direction: column;
  }
  .swiper {
    height: 110px;
  }
  .rowchalider2 .swiper-slide:nth-child(3)::after {
    bottom: 5px;
  }
  .m {
    justify-content: space-around;
  }
}
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
.circlespan {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  background: white;
  border-radius: 50%;
  border: 1px solid;
}
.col .row div div:first-child .circle7.active {
  background-color: #3ec4b5;
}

.bg-white2 {
  background: white;
  padding: 25px 15px 25px 15px;
  border-radius: 20px;
  border: 1px solid #f3f2f2;
}
.pperant {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOneBold";
  color: #392c23;
}
.pchild {
  font-size: 14px;
  color: #392c23;
}
.pcolor {
  color: #cf2a45;
  font-size: 14px;
}
.circle7:hover {
  background-color: #e9e8e8;
}
</style>
