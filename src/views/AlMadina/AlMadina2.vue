<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="divborder">
            <h3>غزة تاريخ وحضارة</h3>
            <ul class="">
              <li class="d-inline" data-class=".Gazahistory">
                <a class="active" href="#Gazahistory">غزة التاريخ</a>
              </li>
              <li class="d-inline" data-class=".GazaCivilization">
                <a href="#GazaCivilization">غزة الحضارة</a>
              </li>
            </ul>
          </div>

          <div class="shuffle-images mt-3">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div
                v-for="item in data"
                :key="item.id"
                class="all col Gazahistory"
              >
                <div class="card shadow-sm">
                  <img :src="item.image" />
                  <div class="card-body">
                    <h6>{{ item.title }}</h6>
                    <small class="text-muted">{{ item.details }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import axios from "axios";
import MainSection from "../../components/MainSection.vue";
export default {
  data() {
    return {
      data: [],
    };
  },
  components: { MainSection },
  async mounted() {
    let result = await axios.get("http://localhost:3000/AlMadina2");
    this.data = result.data;
  },
};
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}

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
