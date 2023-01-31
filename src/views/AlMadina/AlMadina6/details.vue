<template>
  <MainSection>
    <MainDetails>
      <div class="bg section index container1 padding">
        <div class="container">
          <div class="row">
            <h3>{{ store.datadetails.title }}</h3>
          </div>
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 align-items-center"
          >
            <div
              v-for="item in store.datadetails.children"
              :key="item.id"
              class="col"
            >
              <div class="card shadow-sm">
                <img :src="item.image" />
                <div class="card-body">
                  <h5>{{ item.title }}</h5>

                  <router-link
                    @click="store.getdata(item)"
                    :to="
                      `/SideBar/almadinaindex/almadina6/${store.datadetails.name}/` +
                      item.id
                    "
                    class="d-flex align-items-center"
                  >
                    <small class="text-muted">عرض التفاصيل {{ item.id }}</small>
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
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- <detailsdata v-if="false" :datadetalis="data2" /> -->
        </div>
      </div>
    </MainDetails>
  </MainSection>
</template>

<script>
import axios from "axios";
import MainSection from "@/components/MainSection.vue";
import detailsdata from "./details22.vue";
import MainDetails from "./MainDetails.vue";
import { useStore } from "@/store/data";

export default {
  setup() {
    const store = useStore();

    return { store };
  },

  data() {
    return {
      data: [],
      data2: [],
    };
  },
  components: { MainSection, detailsdata, MainDetails },
  async mounted() {
    console.log(this.store.datadetails);
    // this.getdata(this.store.detailsdata);
  },
};
</script>
<style></style>
