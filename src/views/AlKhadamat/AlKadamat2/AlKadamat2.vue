<template>
  <MainSection>
    <div class="bg section index container1" style="padding-top: 65px">
      <div class="container">
        <div class="row">
          <h3 style="padding-right: 45px">أنظمة وأدلة</h3>
          <div class="row mt-5">
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
          <div
            class="row mt-5"
            style="background-color: #f3f2f2; padding: 35px 0"
          >
            <swiper
              :slidesPerView="7"
              :spaceBetween="20"
              :freeMode="true"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper"
            >
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
            </swiper>
          </div>

          <div class="row mt-5" style="padding-right: 45px">
            <div class="col-auto border-start border-2" style="padding: 0 25px">
              <p class="pperant">الوثائق المطلوبة</p>
              <p class="pchild">
                الفاتورة<span> | </span> سند ملكية <span> | </span> صورة الهوية
              </p>
            </div>
            <div class="col-auto border-start border-2" style="padding: 0 25px">
              <p class="pperant">مدة التنفيذ / يوم</p>
              <p class="pchild">فورا</p>
            </div>
            <div class="col-auto border-start border-2" style="padding: 0 25px">
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
            <div  class="d-flex">
              <p class="d-flex ms-5 ">
                <div class="circlespan mx-2">1</div>
                <span class="pcolor">دائرة خدمات الجمهور</span>
              </p>
              <p class="d-flex ">
                <div class="circlespan mx-2">2</div>
                <span class="pcolor">  قسم التخطيط الحضر</span>
              </p>
            </div>
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
    console.log(this.data);
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
.circlespan {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  background: white;
  border-radius: 50%;
  border :1px solid 
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
.pcolor{
  color: #CF2A45;
   font-size: 14px;
}
</style>
