<template>
  <div class="row">
    <div
      class="tab-pane fade show active"
      id="v-pills-section1"
      role="tabpanel"
      aria-labelledby="v-pills-section1-tab"
    >
      <div class="row">
        <div class="col-6">
          <CanvasJSChart :options="options" />
        </div>
        <div class="col-6">
          <h3>تطور العمران</h3>
          <p>
            مدينة ساحلية فلسطينية، وأكبر مدن قطاع غزة وتقع في شماله، في الطرف
            الجنوبي للساحل الشرقي من البحر المتوسط. تبعد عن مدينة القدس مسافة 78
            كم إلى الجنوب الغربي، وهي مركز محافظة غزة وأكبر مدن السلطة
            الفلسطينية من حيث تعداد السكان، حيث بلغ عدد سكان محافظة غزة 700 ألف
            نسمة في عام 2013، ما يجعلها أكبر تجمع للفلسطينيين في فلسطين
          </p>
          <p>
            تبلغ مساحتها 56 كم2، مما يجعلها من أكثر المدن كثافة بالسكان في
            العالم
          </p>
          <p>
            تعتبر مدينة غزة من أهم المدن الفلسطينية، لأهمية موقعها الاستراتيجي
            والأهمية الاقتصادية والعمرانية للمدينة، بالإضافة إلى كونها المقر
            المؤقت للسلطة الوطنية الفلسطينية، ووجود الكثير من مقراتها ووزارتها
            فيها
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasJSChart, { CanvasJS } from "../assets/CanvasJSVueComponent.vue";

import Box from "./box.vue";
import chart from "./chart.vue";
CanvasJS.addColorSet("colors1", ["#3EC4B5"]);
export default {
  components: { chart, Box, CanvasJSChart },
  data() {
    return {
      chart: null,
      options: {
        colorSet: "colors1",
        animationEnabled: true,
        title: {
          text: "Vue.js Basic Column Chart",
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "2020", y: 39.759 },
              { label: "2010", y: 41.148 },
              { label: "2009", y: 46.822 },
              { label: "1990", y: 49.81 },
              { label: "1980", y: 37.344 },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style></style>
