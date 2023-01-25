<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>أرقام وإحصائيات</h3>
        </div>
        <div class="d-flex align-items-start">
          <div
            class="col-lg-2 d-flex"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="active"
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
              class=""
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
              class=""
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
              class=""
              id="v-pills-section4-tab"
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
              class=""
              id="v-pills-section5-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-section5"
              type="button"
              role="tab"
              aria-controls="v-pills-section5"
              aria-selected="false"
            >
              تطور الزراعة
            </a>
            <a
              class=""
              id="v-pills-section6-tab"
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
          <div class="tab-content col-lg-10" id="v-pills-tabContent">
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
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";

import section1 from "./section1/section1.vue";
import section2 from "./section2.vue";
import section3 from "./section3.vue";
import section4 from "./section4.vue";
import section5 from "./section5.vue";
import section6 from "./section6.vue";

export default {
  components: {
    MainSection,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  a {
    padding-right: 20px;
  }
  .col-lg-2.d-flex {
    flex-direction: column;
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
  a.active::before,
  a:hover::before {
    content: "";
    width: 29px;
    height: 4px;
    background: #3ec4b5;
    position: absolute;
    top: 50%;
    right: -17px;
  }
}
@media screen and (max-width: 767px) {
  .col-lg-2.d-flex {
    flex-direction: row;
  }

  .d-flex.align-items-start {
    flex-direction: column;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .col-lg-2.d-flex {
    flex-direction: row;
  }
  .d-flex.align-items-start {
    flex-direction: column;
  }
}

a {
  color: #848484c0;
  font-size: 14px;
  margin: 20px 0;
  position: relative;

  text-decoration: none;
}

a.active,
a:hover {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBold";
}
</style>
