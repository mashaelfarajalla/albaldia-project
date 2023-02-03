<template>
  <MainSection>
    <div class="bg section index container1">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-12 col-lg-6 p-0 animate__animated animate__fadeInUp"
            style="animation-duration: 1s; animation-delay: 0.1s"
          >
            <div
              id="carouselExampleControls"
              class="sliderpage carousel slide"
              data-bs-ride="carousel"
              style="position: sticky"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="/image/group6.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/image/MaskGroup 1.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/image/MaskGroup 1.png"
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
          <div class="col-sm-12 col-lg-6">
            <div class="divpadding2">
              <div class="">
                <h3
                  class="animate__animated animate__fadeInUp"
                  style="animation-duration: 1s; animation-delay: 0.1s"
                >
                  الأحياء
                </h3>
              </div>
              <div
                v-for="item in data"
                :key="item.id"
                class="mt-2 animate__animated animate__fadeInUp"
                style="animation-duration: 1s"
                :style="`animation-delay: ${item.time}s`"
              >
                <div class="d-flex align-items-center mb-3">
                  <h5
                    class="ms-3 animate__animated animate__fadeInUp"
                    style="animation-duration: 1s; animation-delay: 0.2s"
                  >
                    {{ item.title }}
                  </h5>
                  <button
                    type="button"
                    class="btn button animate__animated animate__fadeInUp"
                    style="animation-duration: 1s; animation-delay: 0.3s"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.83"
                      height="23.213"
                      viewBox="0 0 16.83 23.213"
                    >
                      <path
                        id="icons8_marker"
                        d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                        transform="translate(-3 -1)"
                        fill="#392c23"
                      />
                    </svg>
                    استكشاف
                  </button>
                </div>
                <p
                  class="p animate__animated animate__fadeInUp"
                  style="animation-duration: 1s; animation-delay: 0.3s"
                >
                  {{ item.details }}
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
    let result = await axios.get("http://localhost:3000/AlMadina3");
    this.data = result.data;
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .divpadding2 {
    padding: 57px 52px 0 0;
  }
  .sliderpage {
    position: sticky;
    top: -75px;
    height: calc(100vh - 145px);
  }

  .carousel-control-prev,
  .carousel-control-next {
    top: 50% !important;
  }
}

@media screen and (max-width: 767px) {
  .carousel-control-prev,
  .carousel-control-next {
    top: 33% !important;
  }
  .divpadding2 {
    margin-top: 35px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .carousel-control-prev,
  .carousel-control-next {
    top: 33% !important;
  }
  .divpadding2 {
    margin-top: 35px;
  }
}
div .p {
  font-size: 16px;
  color: #392c23;
}

.carousel-control-prev,
.carousel-control-next {
  width: 57px !important;
  height: 140px !important;
  background: black !important;
}
</style>
