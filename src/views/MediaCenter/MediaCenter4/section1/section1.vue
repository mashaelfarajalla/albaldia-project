<template>
  <div
    class="show active"
    :id="sectiondata.target"
    role="tabpanel"
    :aria-labelledby="sectiondata.id"
  >
    <div class="row">
      <div
        class="col-lg-6 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.2s"
      >
        <CanvasJSChart
          class="animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.2s"
          :options="options"
        />
      </div>
      <div
        class="col-lg-6 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.2s"
      >
        <h3
          class="h3title animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.2s"
        >
          {{ sectiondata.title }}
        </h3>
        <p
          class="mt-3 animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.3s"
        >
          {{ sectiondata.p1 }}
        </p>
        <p
          class="animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.4s"
        >
          {{ sectiondata.p2 }}
        </p>
        <p
          class="animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.5s"
        >
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
        backgroundColor: "transparent",
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
  .h3title {
    margin-top: 45px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .h3title {
    margin-top: 45px;
  }
  /* .{
    background-color: transparent;
  } */
}
</style>
