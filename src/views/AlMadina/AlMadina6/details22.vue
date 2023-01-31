<template>
  <MainSection>
    <MainDetails>
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
                  <div
                    v-for="item in store.pathid.child"
                    :key="item.id"
                    class="carousel-item active"
                  >
                    <img
                      :src="item.imagedetials"
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
              <div class="divpadding2">
                <router-link
                  :to="
                    '/SideBar/almadinaindex/almadina6/' + store.datadetails.name
                  "
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></router-link>
                <div class="">
                  <h2>{{ store.pathid.title }}</h2>
                </div>
                <div class="mt-2">
                  <div class="d-flex align-items-center mb-3 border-bottom">
                    <p>{{ store.pathid.address }}</p>
                  </div>
                  <p class="p">{{ store.pathid.body1 }}</p>
                  <p class="p">{{ store.pathid.body2 }}</p>
                  <p class="p">{{ store.pathid.body3 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDetails>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import axios from "axios";
import MainDetails from "./MainDetails.vue";
import { useStore } from "@/store/data";

export default {
  name: "datadetalis",
  // props: {
  //   datadetalis: Object,
  // },
  setup() {
    const store = useStore();

    return { store };
  },
  data() {
    return {
      data: [],
    };
  },
  components: { MainSection, MainDetails },
  async mounted() {
    // let result = await axios.get(
    //   "http://localhost:3000/AlMadina6//" + this.$route.params.id
    // );
    // this.data = result.data;
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .divpadding2 {
    padding: 57px 52px 0 0;
  }
  .carousel-control-prev,
  .carousel-control-next {
    top: 50% !important;
  }
  .modal-fullscreen {
    margin-left: 0 !important;
    margin-right: auto !important;
    margin-top: 90px !important;
    width: 93.5% !important;
    height: calc(100vh - 145px) !important;
  }
  .btn-close {
    /* margin: calc(3.5 * var(--bs-modal-header-padding-y))
      calc(3 * var(--bs-modal-header-padding-x))
      calc(-0.5 * var(--bs-modal-header-padding-y)) 0; */
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 767px) {
  .divpadding2 {
    padding: 57px 0px 0 0;
  }
  .carousel-control-prev,
  .carousel-control-next {
    top: 30% !important;
  }
  .modal-fullscreen {
    margin: 0 auto;
    margin-top: 72px !important;
    width: 100% !important;
    height: calc(100vh - 136px) !important;
  }
  .modal-body .row {
    flex-direction: column-reverse;
  }
  .btn-close {
    margin: calc(1.5 * var(--bs-modal-header-padding-y))
      calc(0 * var(--bs-modal-header-padding-x))
      calc(-0.5 * var(--bs-modal-header-padding-y)) 0;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .carousel-control-prev,
  .carousel-control-next {
    top: 44% !important;
  }
  .divpadding2 {
    padding: 57px 0px 0 0;
  }

  .modal-fullscreen {
    margin: 0 auto;
    margin-top: 90px !important;
    width: 100% !important;
    height: calc(100vh - 145px) !important;
  }
  .modal-body .row {
    flex-direction: column-reverse;
  }
  .btn-close {
    margin: calc(0.5 * var(--bs-modal-header-padding-y))
      calc(3 * var(--bs-modal-header-padding-x))
      calc(-0.5 * var(--bs-modal-header-padding-y)) 0;
  }
}

.w-100 {
  height: calc(100vh - 145px);
}

.sliderpage {
  position: sticky;
  top: -75px;
  height: calc(100vh - 145px);
}

.carousel-control-prev,
.carousel-control-next {
  width: 57px !important;
  height: 140px !important;
  background: black !important;
}
</style>
