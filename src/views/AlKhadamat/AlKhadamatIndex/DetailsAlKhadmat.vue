<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4">
            <h3
              class="animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.1s"
            >
              {{ data.title }}
            </h3>
            <div>
              <p
                class="animate__animated animate__fadeInUp"
                style="animation-duration: 1s; animation-delay: 0.2s"
              >
                تقدم بلدية غزة خدمة توفير المياه بشكل مناسب وبأسعار معقولة لسد
                احتياجات المواطنين، إذ تضخ يوميًا 100,000 كوب من المياه في
                الشبكات من مصادر متعددة أبرزها؛ الآبار ومحطة التحلية والمياه
                الواردة من شركة ميكروت. وتعمل
              </p>
              <p
                class="animate__animated animate__fadeInUp"
                style="animation-duration: 1s; animation-delay: 0.3s"
              >
                البلدية على إدارة مصادر المياه المختلفة وتنميتها وتطويرها وتخطيط
                استخدامها، ناهيك عن توظف التكنولوجيا في عملية تشغيل آبار المياه
                والتحكم بها عن بعد. وتوظف البلدية التكنولوجيا في عملية تشغيل 52
                بئرًا للمياه بحيث يتم
              </p>
              <p
                class="animate__animated animate__fadeInUp"
                style="animation-duration: 1s; animation-delay: 0.4s"
              >
                تشغيلها عن بعد من خلال تفعيل نظام سكادا للتحكم عن بعد، وتسعى
                جاهدة إلى تشغيل وحدة التحكم عن بعد بشكل كامل، لمتابعة الآبار
                والشبكات والتعرف على الأعطال وصيانتها بشكل مباشر وضمان وصول
                المياه لمنازل المواطنين في .أوقات الطوارئ، إلا أن الحصار أعاق
                إدخال بعض القطع اللازمة لذلك
              </p>

              <bottom
                class="btn buttom animate__animated animate__fadeInUp"
                style="animation-duration: 1s; animation-delay: 0.5s"
              >
                تقديم للخدمة</bottom
              >
            </div>
          </div>
          <div class="col-lg-7">
            <div class="row masonry" data-masonry='{"percentPosition":true}'>
              <div
                v-for="item in data.children"
                :key="item.id"
                class="col-md-6 animate__animated animate__fadeInUp"
                style="animation-duration: 1s"
                :style="`animation-delay:${item.time}s`"
              >
                <div class="divcol-6">
                  <span>{{ item.number }}</span>
                  <div>
                    <h2 class="ptitle">{{ item.title }}</h2>
                    <p>{{ item.details }}</p>
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
import axios from "axios";
import MainSection from "@/components/MainSection.vue";
import { bottom } from "@popperjs/core";

export default {
  data() {
    return {
      data: [],
    };
  },
  components: { MainSection, bottom },
  async mounted() {
    setTimeout(function () {
      new Masonry(".masonry");
    }, 1000);
    let result = await axios.get(
      "http://localhost:3000/AlKhadamat/" + this.$route.params.id
    );
    this.data = result.data;
  },
};
</script>

<style scoped>
.divcol-6 {
  background-color: #fff;
  border: 1px dashed #d6d6d6;
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 24px;
  /* border: 1px dashed #d6d6d6;
  padding: 32px;
  height: min-content;
  border-radius: 20px;
  margin-bottom: 20px;
  break-inside: avoid; */
  /* margin-right: 5px; */
  /* height: 300px; */
  /* width: 48%; */
}

span {
  border: 0.5px solid #d6d6d6;
  color: #3ec4b5;
  font-family: boldH;
  font-size: 24px;
  width: 72px;
  height: 56px;
  border-radius: 100px;
  text-align: center;
  line-height: 56px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 13px;
  background-color: #fafafa;
}
.ptitle {
  color: #cf2a45;
  font-size: 18px;
}
.pbody {
  color: #392c23;
  font-size: 14px;
}
.buttom {
  height: 72px;
  line-height: 62px;
  width: 279px;
  background-color: #3ec4b5;
  color: white;
}

.buttom:hover {
  background-color: white;
  color: #3ec4b5;
  border: 1px solid #3ec4b5;
}
</style>
