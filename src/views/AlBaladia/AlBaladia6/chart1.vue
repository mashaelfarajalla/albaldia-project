<template>
  <CanvasJSChart :options="options" :styles="styleOptions" />
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
          text: "من أين تأتي أمول بلدية غزة؟",
        },
        subtitles: [
          {
            text: "الإيرادات",
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
              { label: "رسوم الرخص والاجازات", y: 25000, color: "#72d2c8" },
              {
                label: "إيرادات الموازنة التطويرية (المشاريع)",
                y: 492453,
                color: "#63cec2",
              },
              { label: "إيرادات متنوعة", y: 25000, color: "#e6f4f2" },
              { label: "إيرادات غرامات", y: 170000, color: "#d3efeb" },
              {
                label: " إيرادات استخدام ممتلكات وأموال",
                y: 545000,
                color: "#c0e9e4",
              },
              { label: "إيرادات من الخدمات", y: 550000, color: "#aee4de" },
              { label: "ضرائب على الممتلكات", y: 585000, color: "#aee4de" },
              {
                label: "ضرائب ورسوم محلية",
                y: 918000,
                color: "#9bded7",
              },
              {
                label: "إيرادات تشغيلية نفايات صلبة",
                y: 25000,
                color: "#88d9d0",
              },
              {
                label: "منح وهبات مقيدة الاستخدام",
                y: 25000,
                color: "#92dcd3",
              },
              {
                label: "إيرادات الموازنة ذات الطبيعة التجارية",
                y: 25000,
                color: "#7fd6cc",
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
<style></style>
