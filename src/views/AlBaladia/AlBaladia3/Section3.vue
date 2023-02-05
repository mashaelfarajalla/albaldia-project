<template>
  <div
    class="tab-pane fade show"
    id="our-sessions"
    role="tabpanel"
    aria-labelledby="pills-sessions-tab"
  >
    <div class="row justify-content-between">
      <div class="col-sm-12 col-lg-7">
        <div class="row">
          <form
            class="animate__animated animate__fadeInUp"
            style="animation-duration: 1s; animation-delay: 0.3s"
          >
            <div class="row justify-content-start mt-4">
              <div
                class="form-group col-10 col-md-6 col-lg-8"
                style="position: relative"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="ابحث برقم الجلسة ..."
                />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </form>
        </div>
        <div class="row">
          <div class="col-12">
            <span
              class="animate__animated animate__fadeInUp"
              style="
                animation-duration: 1s;
                animation-delay: 0.4s;
                color: #cf2a45;
              "
              >ديسمبر 26, 2021</span
            >
            <p
              class="animate__animated animate__fadeInUp"
              style="
                animation-duration: 1s;
                animation-delay: 0.4s;
                color: #392c23;
                font-size: 16px;
                font-family: FFShamelFamily-SansOneBold;
              "
            >
              مجلس بلدية غزة يناقش مع نشطاء شباب جهود دعم المبادرات الشبابية
              (عنوان القرار الصادر يوضع هنا)
            </p>
            <div
              class="d-flex align-items-center animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.6s"
            >
              <button type="button" class="btn button1 ms-3">عرض الجلسة</button>

              <button type="button" class="btn button2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                  >
                    <path
                      id="icons8_print"
                      d="M6.969,0a3.016,3.016,0,0,0-3,3V8H3a3,3,0,0,0-3,3v6a3,3,0,0,0,3,3h.969v3a3.016,3.016,0,0,0,3,3h12a3.016,3.016,0,0,0,3-3V20H23a3,3,0,0,0,3-3V11a3,3,0,0,0-3-3H21.969V3a3.016,3.016,0,0,0-3-3Zm0,2h12a.987.987,0,0,1,1,1V8h-14V3A.987.987,0,0,1,6.969,2ZM21.5,10A1.5,1.5,0,1,1,20,11.5,1.5,1.5,0,0,1,21.5,10ZM5.969,15h14v8a.987.987,0,0,1-1,1h-12a.987.987,0,0,1-1-1ZM8,17v2H18V17Zm0,3v2h7V20Z"
                      fill="#392c23"
                    />
                  </svg>
                </span>
                طباعة الجلسة
              </button>
            </div>
          </div>
          <div class="row mt-5">
            <div
              class="d-flex align-items-center animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.7s"
            >
              <h3>القرارات الصادرة عن الجلسة</h3>
            </div>
            <div
              v-for="item in data"
              :key="item.id"
              class="col-sm-12 col-md-6 d-inline-block animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.9s"
            >
              <p>
                <span class="span">{{ item.id }}</span
                >{{ item.body }}
              </p>
            </div>
          </div>

          <div class="row center">
            <h3
              class="animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.9s"
            >
              الأعضاء الحاضرين
            </h3>
            <div class="flex">
              <div
                class="col-sm-5 col-md disinline animate__animated animate__fadeInUp"
                style="animation-duration: 1s; animation-delay: 0.1s"
                v-for="item in data2"
                :key="item.id"
              >
                <img :src="item.image" />
                <h5 class="mt-2 text-center">{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-sm-12 col-lg-4 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.4s"
      >
        <DatePicker
          class="cs-datepicker"
          v-model="date"
          :attributes="attrs"
          locale="ar"
        ></DatePicker>

        <!-- <VCalendar :attributes="attributes" />
        <v-date-picker v-model="date" />-->
        <div class="row mt-4">
          <div class="col d-flex">
            <div class="circlecalendar circlecalendar1"></div>
            <p class="mx-2">الحالية</p>
          </div>
          <div class="col d-flex">
            <div class="circlecalendar circlecalendar2"></div>
            <p class="mx-2">السابقة</p>
          </div>
          <div class="col d-flex">
            <div class="circlecalendar circlecalendar3"></div>
            <p class="mx-2">القادمة</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <button class="btncalendar">عرض جميع الجلسات</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import axios from "axios";
import { Calendar, DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
import "./style.css";

export default {
  components: { MainSection, Calendar, DatePicker },
  data() {
    var date = new Date();
    return {
      data: [],
      data2: [],

      date: new Date(),
      attrs: [
        {
          highlight: {
            color: "white",
            class: "next-session",
          },
          dates: [
            new Date(date.getFullYear(), date.getMonth(), 26),
            new Date(date.getFullYear(), date.getMonth(), 25),
          ],
        },
        {
          highlight: {
            color: "white",
            class: "prev-session",
          },
          dates: [
            new Date(date.getFullYear(), date.getMonth(), 13),
            new Date(date.getFullYear(), date.getMonth(), 15),
          ],
        },
      ],
    };
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/section3");
    this.data = result.data;

    let result2 = await axios.get("http://localhost:3000/section32");
    this.data2 = result2.data;
  },
};
</script>

<style scoped>
.vc-container.vc-blue {
  width: 100%;
  height: 400px;
  /* height: calc(100vh - 100px); */
  margin-top: 55px;
}
.circlecalendar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.circlecalendar1 {
  background-color: #3ec4b5;
}
.circlecalendar2 {
  background-color: #cf2a45;
}

.circlecalendar3 {
  background-color: #32c33a;
}
.btncalendar {
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  color: #392c23;
  font-size: 16px;
}
@media screen and (min-width: 992px) {
  .flex {
    display: flex;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .flex {
    display: flex;
  }
}
@media screen and (max-width: 767px) {
  .disinline {
    display: inline-block;
    margin: 0 10px;
  }

  .center {
    text-align: center;
  }
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
.button1 {
  width: 200px;
  height: 50px;
  background-color: #3ec4b5;
  color: white;
}
.button1:hover {
  background-color: #f2f2f2;
  color: #3ec4b5;
  border: 1px solid #3ec4b5;
}

.button2 {
  width: 200px;
  height: 50px;
  background-color: #f2f2f2;
  color: #392c23;
}
.button2:hover {
  background-color: #3ec4b5;
  color: white;
  border: 1px solid #f2f2f2;
}
.button2 span svg path {
  fill: #392c23;
}

.span {
  width: 24px;
  height: 24px;
  line-height: 24px;
  padding-top: 2px;
  margin-left: 5px;
  display: inline-block;
  border: solid 1px #d6d6d6;
  text-align: center;
  border-radius: 50%;
}
</style>
