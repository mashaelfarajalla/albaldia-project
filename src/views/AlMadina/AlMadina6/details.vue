<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3>{{ data.title }}</h3>
        </div>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 align-items-center"
        >
          <div v-for="item in data.children" :key="item.id" class="col">
            <div class="card shadow-sm">
              <img :src="item.image" />
              <div class="card-body">
                <h5>{{ item.title }}</h5>
                <a
                  class="d-flex align-items-center"
                  data-bs-toggle="modal"
                  :id="item.id"
                  :data-bs-target="'#' + item.target"
                  type="button"
                  role="tab"
                  :aria-controls="item.target"
                  aria-selected="true"
                >
                  <details2 :datadetalis="item" />
                  <small class="text-muted">عرض التفاصيل</small>
                  <div class="circle5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8.996"
                      viewBox="0 0 14 8.996"
                    >
                      <path
                        id="Path_382"
                        data-name="Path 382"
                        d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                        transform="translate(-737 -1483.002)"
                        fill="#3ec4b5"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
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
import MainSection from "@/components/MainSection.vue";
import details2 from "./details2.vue";

export default {
  data() {
    return {
      data: [],
    };
  },
  components: { MainSection, details2 },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/AlMadina6/" + this.$route.params.id
    );
    this.data = result.data;
  },
};
</script>
<style></style>
