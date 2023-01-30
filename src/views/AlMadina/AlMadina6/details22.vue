<template>
  <MainSection>
    <div class="bg section index container1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 p-0">
            <div
              id="carouselExampleControls"
              class="sliderpage carousel slide"
              data-bs-ride="carousel"
              style="position: sticky"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="/image/iamge336.png"
                    class="d-block w-100"
                    alt="..."
                  />
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
          <div class="col-lg-6">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="divpadding2">
              <div class="">
                <h3>{{ datadetalis }}</h3>
              </div>
              <div class="mt-2">
                <div class="d-flex align-items-center mb-3 border-bottom"></div>
                <p class="p"></p>
                <p class="p"></p>
                <p class="p"></p>
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
  name: "datadetalis",
  props: {
    datadetalis: Object,
  },
  data() {
    return {
      data: [],
    };
  },
  //   props: ["datadetalis"],
  components: { MainSection },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/AlMadina6/" + this.$route.params.id
    );
    this.data = result.data;
    console.log(this.data);
  },
};
</script>

<style></style>
