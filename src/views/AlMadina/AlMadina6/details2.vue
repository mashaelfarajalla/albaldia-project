<template>
  <MainSection>
    <div class="bg section index container1">
      <div class="container">
        <div class="row">
          <div class="col-6 p-0">
            <div
              id="carouselExampleControls"
              class="sliderpage carousel slide"
              data-bs-ride="carousel"
              style="position: sticky"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img :src="data.image" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img :src="data.image" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img :src="data.image" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-6">
            <div class="divpadding2">
              <div class="">
                <h3>{{ data.title }}</h3>
              </div>
              <div class="mt-2">
                <div class="d-flex align-items-center mb-3">
                  <!-- <h5 class="ms-3">{{ item.title }}</h5> -->
                  <P>{{ data.address }}</P>
                </div>
                <p class="p">
                  {{ data.body }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  components: { MainSection },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/AlMadina6/" + this.$route.params.id
    );
    this.data = result.data.children[this.$route.params.id - 1];
    console.log(this.data);
  },
};
</script>

<style scope></style>
