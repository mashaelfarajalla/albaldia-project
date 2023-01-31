<template>
  <div
    class="tab-pane fade show"
    id="our-members"
    role="tabpanel"
    aria-labelledby="pills-members-tab"
  >
    <div class="row">
      <div class="col-lg-7">
        <div class="row">
          <div class="col-11">
            <h4
              class="mt-4 animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.3s"
            >
              أعضاء المجلس البلدي الحاليين
            </h4>
            <p
              class="mt-3 animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.4s"
            >
              تسلم المجلس البلدي إدارة بلدية غزة مطلع آب/أغسطس 2016، في وقت
              تعاني فيه البلدية أزمة مالية كبيرة وترهلا إداريا وقلة في الموارد
              والإمكانات. ويضم المجلس البلدي 11 عضوا نشيطا يحملون شهادات ودرجات
              علمية عالية في تخصصات متنوعة، يمثلون أحياء ومناطق المدينة، ولديهم
              الرغبة والدافعية للنهوض بواقع مدينة غزة وبلديتها لتصبح البيت
              الحاضن للجميع. ويعمل المجلس البلدي على تحديد السياسات التي تحكم
              عمل البلدية، ويوفر الإشراف والمساءلة من خلال لجان متخصصة للمجلس
              إلى جانب الإجتماعات الدورية مع كوادر البلدية
            </p>
          </div>
        </div>
        <div class="row center">
          <div class="col-12">
            <ul class="mb-3" id="pills-tab" role="tablist">
              <li
                v-for="item in data"
                :key="item.id"
                class="col animate__animated animate__fadeInUp"
                style="animation-duration: 1s; animation-delay: 0.5s"
                role="presentation"
              >
                <a
                  class="nav-link"
                  :id="item.id"
                  data-bs-toggle="pill"
                  :data-bs-target="'#' + item.target"
                  type="button"
                  role="tab"
                  :aria-controls="item.target"
                  aria-selected="true"
                  @click="store.getdata2(item)"
                >
                  <div class="col text-center">
                    <img :src="item.image" />
                    <h5 class="mt-2" style="color: #cf2a45">
                      {{ item.title }}
                    </h5>
                    <p>{{ item.details }}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="tab-content col-lg-5 bgdiv animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.5s"
        id="pills-tabContent"
      >
        <Section21 />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Section21 from "./Section21";
import { useStore } from "@/store/data";

export default {
  components: { Section21 },
  data() {
    return {
      data: [],
      data2: [],
    };
  },
  setup() {
    const store = useStore();

    return { store };
  },
  // methods: {
  //   async getdata(item) {
  //     this.data2 = await item;

  //     console.log(this.data2);
  //   },
  // },

  async mounted() {
    let result = await axios.get("http://localhost:3000/albaladia3");
    this.data = result.data[0].Section2;
    this.store.getdata2(result.data[0].Section2[0]);
  },
};
</script>

<style scoped>
li.col {
  display: inline-block;
  margin: 0 10px;
}
@media screen and (min-width: 992px) {
  .line {
    margin: auto 30px;
    width: 110px;
  }
}
@media screen and (max-width: 767px) {
  .center {
    text-align: center;
  }
  .line {
    margin: auto 10px;
    width: 90px;
  }
  .paddingrow {
    padding: 35px 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .line {
    margin: auto 30px;
    width: 110px;
  }
  .paddingrow {
    padding: 35px 0;
  }
}
h4 {
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBold";
  color: #392c23;
}
.line {
  border: none;
  border-top: 2px solid #c8c8c8;
  display: inline-block;
  line-height: 8px;
}

/* li a:first-child img {
  border-radius: 50%;
  border: 10px solid #3ec4b5;
} */
/* ul li:first-child img, */
a.active img {
  border-radius: 50%;
  border: 10px solid #3ec4b5;
}

.bgdiv {
  text-align: center;
  border-radius: 20px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ul li {
  list-style-type: none;
}
.pbody {
  font-size: 14px;
  color: #392c23;
  margin-bottom: 0;
}
</style>
