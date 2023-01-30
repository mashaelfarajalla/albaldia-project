<template>
  <MainSection>
    <!-- Modal -->
    <div
      class="modal fade"
      :id="datadetalis.target"
      tabindex="-1"
      :aria-labelledby="datadetalis.id"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="datadetalis.id"></h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
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
                      v-for="item in datadetalis.child"
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
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="divpadding2">
                  <div class="">
                    <h3>{{ datadetalis.title }}</h3>
                  </div>
                  <div class="mt-2">
                    <div class="d-flex align-items-center mb-3 border-bottom">
                      <P>{{ datadetalis.address }}</P>
                    </div>
                    <p class="p">
                      {{ datadetalis.body1 }}
                    </p>
                    <p class="p">
                      {{ datadetalis.body2 }}
                    </p>
                    <p class="p">
                      {{ datadetalis.body3 }}
                    </p>
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
import MainSection from "@/components/MainSection.vue";
export default {
  props: {
    datadetalis: Object,
  },
  data() {
    return {
      data: [],
    };
  },
  components: { MainSection },
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
    margin: calc(3.5 * var(--bs-modal-header-padding-y))
      calc(3 * var(--bs-modal-header-padding-x))
      calc(-0.5 * var(--bs-modal-header-padding-y)) 0;
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

.modal-header {
  width: 50%;
  position: absolute;
  left: 22%;
  z-index: 1;
}

.modal-content {
  /* background: url(/image/Group.png); */
  background: url(../../../assets/image/Group.png);

  background-size: cover;
  background-repeat: no-repeat;
}
.modal-body {
  padding-top: 0;
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
