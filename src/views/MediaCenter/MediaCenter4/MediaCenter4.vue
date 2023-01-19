<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>أرقام وإحصائيات</h3>
        </div>

        <div class="row">
          <div class="d-flex align-items-start flex-row mt-4">
            <div
              class="col-2 flex-column me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-section1-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-section1"
                type="button"
                role="tab"
                aria-controls="v-pills-section1"
                aria-selected="true"
              >
                تطور العمران
              </a>
              <a
                class="nav-link"
                id="v-pills-section2-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-section2"
                type="button"
                role="tab"
                aria-controls="v-pills-section2"
                aria-selected="false"
              >
                تطور السكان
              </a>
              <a
                class="nav-link"
                id="v-pills-section3-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-section3"
                type="button"
                role="tab"
                aria-controls="v-pills-section3"
                aria-selected="false"
              >
                تطور البنية التحتية
              </a>

              <a
                class="nav-link"
                id="v-pills-setion4-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-section4"
                type="button"
                role="tab"
                aria-controls="v-pills-section4"
                aria-selected="false"
              >
                تطور الانتاج
              </a>

              <a
                class="nav-link"
                id="v-pills-setion5-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-setion5"
                type="button"
                role="tab"
                aria-controls="v-pills-setion5"
                aria-selected="false"
              >
                تطور الزراعة
              </a>
              <a
                class="nav-link"
                id="v-pills-setion6-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-section6"
                type="button"
                role="tab"
                aria-controls="v-pills-section6"
                aria-selected="false"
              >
                تطور الصناعة
              </a>
            </div>
            <div
              class="col-10 tab-content"
              id="v-pills-tabContent"
              style="display: contents"
            >
              <section1 />
              <section2 />
              <section3 />
              <section4 />
              <section5 />
              <section6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import CanvasJSChart from "./assets/CanvasJSVueComponent.vue";

import section1 from "./section1/section1.vue";
import section2 from "./section2.vue";
import section3 from "./section3.vue";
import section4 from "./section4.vue";
import section5 from "./section5.vue";
import section6 from "./section6.vue";

export default {
  components: {
    CanvasJSChart,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
  },

  data() {
    return {
      options: {
        colorSet: "colors1",
        theme: "light2",
        title: {
          text: "Cow Milk Production in India",
        },
        axisY: {
          title: "In Million Tonne",
        },
        data: [
          {
            yValueFormatString: "### Mt",
            dataPoints: [
              { label: "2005-06", y: 37.344 },
              { label: "2006-07", y: 39.759 },
              { label: "2007-08", y: 41.148 },
              { label: "2008-09", y: 46.822 },
              { label: "2009-10", y: 49.81 },
              { label: "2010-11", y: 52.2 },
              { label: "2011-12", y: 54.903 },
              { label: "2012-13", y: 57.77 },
              { label: "2013-14", y: 62.195 },
              { label: "2014-15", y: 66.423 },
              { label: "2015-16", y: 73.646 },
            ],
          },
        ],
      },
      styleOptions: {
        width: "30%",
        height: "360px",
      },
    };
  },
};
</script>

<style scoped>
a {
  color: #848484c0;
  font-size: 14px;
  margin: 40px 0;
  position: relative;
  padding-right: 20px;
}
a::before {
  content: "";
  width: 11px;
  height: 2px;
  background: #848484c0;
  position: absolute;
  top: 50%;
  right: -17px;
  margin-left: 10px;
}

a.active {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBold";
}
a.active::before {
  content: "";
  width: 29px;
  height: 4px;
  background: #3ec4b5;
  position: absolute;
  top: 50%;
  right: -17px;
}
</style>
