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
              v-for="item in data"
              :key="item.id"
              :id="item.id"
              data-bs-toggle="pill"
              :data-bs-target="'#' + item.target"
              type="button"
              role="tab"
              :aria-controls="item.target"
              aria-selected="true"
              @click="getdata(item.id)"
            >
              {{ item.title }}
            </a>
          </div>
          <div class="tab-content col-lg-10" id="v-pills-tabContent">
            <section1 :sectiondata="data2" />
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import axios from "axios";
import section1 from "./section1/section1.vue";

export default {
  components: {
    MainSection,
    section1,
  },
  data() {
    return {
      data: [],
      data2: [],
    };
  },
  methods: {
    async getdata(id) {
      console.log(id);
      this.data2 = await this.data[id - 1];
      console.log(this.data2);
    },
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/MediaCenetr4");
    this.data = result.data;
    // console.log(this.data);
    this.getdata(1);
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
