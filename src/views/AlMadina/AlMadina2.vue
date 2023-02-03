<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="divborder">
            <h3
              class="animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.1s"
            >
              غزة تاريخ وحضارة
            </h3>
          </div>
          <ul
            class="animate__animated animate__fadeInUp"
            style="animation-duration: 1s; animation-delay: 0.3s"
            id="myTab"
            role="tablist"
          >
            <li class="" role="presentation">
              <a
                class="nav-link active"
                id="pills-Gazahistory-tab"
                data-bs-toggle="tab"
                data-bs-target="#our-history"
                type="button"
                role="tab"
                aria-controls="our-history"
                aria-selected="true"
              >
                غزة التاريخ
              </a>
            </li>

            <li class="" role="presentation">
              <a
                class="nav-link"
                id="pills-GazaCivilization-tab"
                data-bs-toggle="tab"
                data-bs-target="#our-Civilization"
                role="tab"
                aria-controls="our-Civilization"
                aria-selected="false"
              >
                غزة الحضارة
              </a>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">
            <History />
            <Civilization />
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "../../components/MainSection.vue";
import History from "./History.vue";

import Civilization from "./Civilization.vue";
// import axios from "axios";

export default {
  components: { MainSection, History, Civilization },
  // data() {
  //   return {
  //     data: [],
  //   };
  // },
  // async mounted() {
  //   let result = await axios.get("http://localhost:3000/AlMadina2");
  //   this.data = result.data[0];
  //   console.log(this.data);
  // },
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
