<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div>
          <h3
            class="animate__animated animate__fadeInUp"
            style="animation-duration: 1s; animation-delay: 0.1s"
          >
            بلدية غزة
          </h3>
        </div>
        <ul
          class="animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.1s"
          id="myTab"
          role="tablist"
        >
          <li class="" role="presentation">
            <a
              class="nav-link active"
              id="pills-see-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-see"
              role="tab"
              aria-controls="our-see"
              aria-selected="true"
            >
              رؤية البلدية
            </a>
          </li>
          <li class="" role="presentation">
            <a
              class="nav-link"
              id="pills-goal-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-goal"
              type="button"
              role="tab"
              aria-controls="our-goal"
              aria-selected="false"
            >
              أهداف البلدية
            </a>
          </li>
          <li class="" role="presentation">
            <a
              class="nav-link"
              id="#pills-policy-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-policy"
              type="button"
              role="tab"
              aria-controls="our-policy"
              aria-selected="false"
            >
              سياسة البلدية
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <Vision />
          <SiasatAlbaladia />
          <Alahdaf />
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import Vision from "./Vision.vue";
import SiasatAlbaladia from "./SiasatAlbaladia.vue";
import Alahdaf from "./Alahdaf.vue";

export default {
  components: { MainSection, Vision, SiasatAlbaladia, Alahdaf },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  ul li a {
    margin: 0 10px;
  }
}
@media screen and (max-width: 767px) {
  ul li a {
    margin: 0 5px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  ul li a {
    margin: 0 10px;
  }
}
ul li {
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
}
ul li a {
  color: #392c23;
  font-size: 16px;
  text-decoration: none;
}

ul {
  border-bottom: 1px solid #d6d6d6;
  margin-top: 15px;
  padding-right: 0;
}

ul li a:hover,
ul li a.active {
  color: #392c23;
  padding: 0 0 13px 0;
  font-weight: bold;
  border-bottom: 2px solid #cf2a45;
}
</style>
