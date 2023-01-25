<template>
  <CanvasJSChart :options="options" :styles="styleOptions"> 
  
  </CanvasJSChart>
</template>

<script>
import CanvasJSChart from "./assets/CanvasJSVueComponent.vue";

export default {
  components: {
    CanvasJSChart,
  },
  data() {
    return {
      options: {
        theme: "light2",
        animationEnabled: true,
        title: {
          text: "أين تذهب أموال بلدية غزة؟",
        },
        subtitles: [
          {
            text: "المصروفات",
          },
        ],
        data: [
          {
            type: "doughnut",
            startAngle: 500,
            indexLabel: "{label} {y}(#percent%)",
            yValueFormatString: "#,##0K",
            toolTipContent:
              "<span style='\"'color: {color};'\"'>{label}</span>, {y} tonnes",
            dataPoints: [
              { label: "مصاريف ضخ المياة", y: 25000, color: "#dd7283" },
              {
                label: "الرواتب ومحلقاتها",
                y: 492453,
                color: "#d75369",
              },
              {
                label: "مصاريف إدارة النفايات الصلبة",
                y: 25000,
                color: "#da6377",
              },
              { label: "مصاريف الأشغال العامة", y: 25000, color: "#e28796" },
              {
                label: " خصومات لصالح المواطنين",
                y: 25000,
                color: "#e07c8d",
              },
              { label: "خدمات حضارية وثقافية", y: 918000, color: "#e4919e" },
              { label: "الصحة والسلامة العامة", y: 585000, color: "#e8a6b1" },
              {
                label: "الصرف الصحي",
                y: 550000,
                color: "#ecbac2",
              },
              {
                label: " الأمن والإطفاء",
                y: 454000,
                color: "#f1cfd5",
              },
              {
                label: "مصاريف تقاعدية",
                y: 170000,
                color: "#f5e4e6",
              },
              {
                label: " مصاريف هندسية",
                y: 25000,
                color: "#f5e4e6",
              },
            ],
          },
        ],
      },
      styleOptions: {
        width: "100%",
        height: "360px",
      },
    };
  },
};
</script>
<style scoped>



</style>
