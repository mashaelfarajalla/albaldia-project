<template>
  <div
    class="tab-pane fade show active"
    :id="sectiondata.target"
    role="tabpanel"
    :aria-labelledby="sectiondata.id"
  >
    <div class="row">
      <div class="col-lg-6">
        <CanvasJSChart :options="options" />
      </div>
      <div class="col-lg-6">
        <h3 class="h3title">{{ sectiondata.title }}</h3>
        <p class="mt-3">
          {{ sectiondata.p1 }}
        </p>
        <p>
          {{ sectiondata.p2 }}
        </p>
        <p>
          {{ sectiondata.p3 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasJSChart, { CanvasJS } from "../assets/CanvasJSVueComponent.vue";

CanvasJS.addColorSet("colors1", ["#3EC4B5"]);
export default {
  components: { CanvasJSChart },
  props: { sectiondata: Object },
  data() {
    return {
      chart: null,
      options: {
        colorSet: "colors1",
        animationEnabled: true,
        title: {
          text: "",
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "2020", y: 75.759 },
              { label: "2010", y: 65.148 },
              { label: "2009", y: 50.822 },
              { label: "1990", y: 40.81 },
              { label: "1980", y: 38.344 },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style>
.col-lg-6 p {
  line-height: 2;
}
@media screen and (max-width: 767px) {
  .col-lg-6 .h3title {
    margin-top: 45px;
  }
}
</style>
