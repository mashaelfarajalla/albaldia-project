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
            <h3>أعضاء المجلس البلدي الحاليين</h3>
            <p>
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
                class="col"
                role="presentation"
              >
                <a
                  class="nav-link active"
                  :id="item.id"
                  data-bs-toggle="pill"
                  :data-bs-target="'#' + item.target"
                  type="button"
                  role="tab"
                  :aria-controls="item.target"
                  aria-selected="true"
                  @click="getdata(item.id)"
                >
                  <div class="col">
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

      <div class="tab-content col-lg-5 bgdiv" id="pills-tabContent">
        <Section21 :getdata="data2" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Section21 from "./Section21";
export default {
  components: { Section21 },
  data() {
    return {
      data: [],
      data2: [
        {
          id: 1,
          target: "section21",
          image: "/image/image.png",
          title: "أ. د. يحيى  السراج",
          details: "رئيس بلدية غزة",
          p: " ماجستير إدارة تشييد، مدير عام شركة بالكون للمقاولات والتجارة العامة، عضو مجلس إدارة اتحاد المقاولين، أمين سر مركز التحكيم الهندسي، أمين سر مركز فض الخلافات",
        },
      ],
    };
  },
  methods: {
    getdata(id) {
      console.log(id);
      this.data2 = this.data[id - 1];
      console.log(this.data2);
    },
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/albaladia3");
    this.data = result.data[0].Section2;
    console.log(this.data);
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
.line {
  border: none;
  border-top: 2px solid #c8c8c8;
  display: inline-block;
  line-height: 8px;
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
