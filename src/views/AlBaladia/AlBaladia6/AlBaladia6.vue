<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>الميزانية والموازنة</h3>

          <ul class="" id="myTab" role="tablist">
            <li class="" role="presentation">
              <a
                class="nav-link active"
                id="section1-tab"
                data-bs-toggle="tab"
                data-bs-target="#section1"
                type="button"
                role="tab"
                aria-controls="section1"
                aria-selected="true"
              >
                الموازنة المقروءة
              </a>
            </li>
            <li class="" role="presentation">
              <a
                class="nav-link"
                id="section2-tab"
                data-bs-toggle="tab"
                data-bs-target="#section2"
                type="button"
                role="tab"
                aria-controls="section2"
                aria-selected="false"
              >
                الموازنة والميزانية
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <Section1 />
            <Section2 />
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
export default {
  components: { MainSection, Section1, Section2 },
};
</script>

<style scoped>
ul li {
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
}
ul li a {
  color: #392c23;
  font-size: 16px;
  text-decoration: none;
  margin: 0 5px;
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
