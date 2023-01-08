<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div>
          <h3>بلدية غزة</h3>
          <Vision />
        </div>

        <ul class="">
          <li class="d-inline">
            <router-link class="active" :to="{ name: 'Vision' }"
              >رؤية البلدية</router-link
            >
          </li>
          <li class="d-inline">
            <router-link :to="{ name: 'Alahdaf' }">أهداف البلدية</router-link>
          </li>
          <li class="d-inline">
            <router-link :to="{ name: 'SiasatAlbaladia' }"
              >سياسة البلدية</router-link
            >
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
// import Vision from "./Vision.vue";
export default {
  components: { MainSection },
};
</script>

<style scoped>
ul li a {
  color: #392c23;
  font-size: 16px;
  text-decoration: none;
  margin: 0 5px;
}

.divborder {
  margin-top: 40px;
  border-bottom: 1px solid #d6d6d6;
}

ul {
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
