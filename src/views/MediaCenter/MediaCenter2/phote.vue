<template>
  <div
    class="tab-pane fade show active"
    id="our-phote"
    role="tabpanel"
    aria-labelledby="pills-phote-tab"
  >
    <div class="row">
      <div
        class="col-lg-4 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.4s"
      >
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              v-for="item in section1"
              :key="item.id"
              class="carousel-item active"
            >
              <div class="card">
                <img :src="item.image" class="card-img-top" alt="..." />
                <a
                  class="iconphto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getdata(section1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.688"
                    height="22.88"
                    viewBox="0 0 26.688 22.88"
                  >
                    <path
                      id="Path_1072"
                      data-name="Path 1072"
                      d="M20536.861-1251.122h17.156a2.865,2.865,0,0,0,2.863-2.859v-.955h.949a2.863,2.863,0,0,0,2.859-2.859v-13.344a2.865,2.865,0,0,0-2.859-2.864h-17.156a2.865,2.865,0,0,0-2.859,2.864v.949h-.953a2.863,2.863,0,0,0-2.859,2.859v13.349A2.863,2.863,0,0,0,20536.861-1251.122Zm18.111-3.814h0v.955a.942.942,0,0,1-.955.949h-17.156a.942.942,0,0,1-.955-.949v-13.349a.942.942,0,0,1,.955-.949h.953v10.485a2.863,2.863,0,0,0,2.859,2.859h14.3Zm-14.3-1.909a.942.942,0,0,1-.955-.949v-13.344a.945.945,0,0,1,.955-.955h17.156a.945.945,0,0,1,.955.955v13.344a.942.942,0,0,1-.955.949Z"
                      transform="translate(-20534.002 1274.002)"
                      fill="#392c23"
                    ></path>
                  </svg>
                </a>
                <div class="card-body">
                  <p class="card-text">
                    {{ item.p }}
                  </p>
                  <div class="divcountimg">
                    <span>{{ section1.length }}</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.89"
                        height="16.191"
                        viewBox="0 0 18.89 16.191"
                      >
                        <path
                          id="icons8_image"
                          d="M3.024,2A2.031,2.031,0,0,0,1,4.024V16.167a2.031,2.031,0,0,0,2.024,2.024H17.866a2.031,2.031,0,0,0,2.024-2.024V4.024A2.031,2.031,0,0,0,17.866,2Zm0,1.349H17.866a.666.666,0,0,1,.675.675v9.8L13.813,8.836,11.177,11.8,7.114,7.518,2.349,12.884V4.024A.666.666,0,0,1,3.024,3.349ZM14.493,4.7a1.349,1.349,0,1,0,1.349,1.349A1.352,1.352,0,0,0,14.493,4.7ZM7.145,9.511,14.1,16.842H3.024a.666.666,0,0,1-.675-.675V14.918Zm6.694,1.323,4.7,4.954v.379a.666.666,0,0,1-.675.675H15.953L12.11,12.784Z"
                          transform="translate(-1 -2)"
                          fill="#392c23"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        class="col-lg-4 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.5s"
      >
        <div
          id="carouselExampleControls2"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              v-for="item in section2"
              :key="item.id"
              class="carousel-item active"
            >
              <div class="card">
                <img :src="item.image" class="card-img-top" alt="..." />
                <a
                  class="iconphto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getdata(section2)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.688"
                    height="22.88"
                    viewBox="0 0 26.688 22.88"
                  >
                    <path
                      id="Path_1072"
                      data-name="Path 1072"
                      d="M20536.861-1251.122h17.156a2.865,2.865,0,0,0,2.863-2.859v-.955h.949a2.863,2.863,0,0,0,2.859-2.859v-13.344a2.865,2.865,0,0,0-2.859-2.864h-17.156a2.865,2.865,0,0,0-2.859,2.864v.949h-.953a2.863,2.863,0,0,0-2.859,2.859v13.349A2.863,2.863,0,0,0,20536.861-1251.122Zm18.111-3.814h0v.955a.942.942,0,0,1-.955.949h-17.156a.942.942,0,0,1-.955-.949v-13.349a.942.942,0,0,1,.955-.949h.953v10.485a2.863,2.863,0,0,0,2.859,2.859h14.3Zm-14.3-1.909a.942.942,0,0,1-.955-.949v-13.344a.945.945,0,0,1,.955-.955h17.156a.945.945,0,0,1,.955.955v13.344a.942.942,0,0,1-.955.949Z"
                      transform="translate(-20534.002 1274.002)"
                      fill="#392c23"
                    ></path>
                  </svg>
                </a>
                <div class="card-body">
                  <p class="card-text">
                    {{ item.p }}
                  </p>
                  <div class="divcountimg">
                    <span>{{ section2.length }}</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.89"
                        height="16.191"
                        viewBox="0 0 18.89 16.191"
                      >
                        <path
                          id="icons8_image"
                          d="M3.024,2A2.031,2.031,0,0,0,1,4.024V16.167a2.031,2.031,0,0,0,2.024,2.024H17.866a2.031,2.031,0,0,0,2.024-2.024V4.024A2.031,2.031,0,0,0,17.866,2Zm0,1.349H17.866a.666.666,0,0,1,.675.675v9.8L13.813,8.836,11.177,11.8,7.114,7.518,2.349,12.884V4.024A.666.666,0,0,1,3.024,3.349ZM14.493,4.7a1.349,1.349,0,1,0,1.349,1.349A1.352,1.352,0,0,0,14.493,4.7ZM7.145,9.511,14.1,16.842H3.024a.666.666,0,0,1-.675-.675V14.918Zm6.694,1.323,4.7,4.954v.379a.666.666,0,0,1-.675.675H15.953L12.11,12.784Z"
                          transform="translate(-1 -2)"
                          fill="#392c23"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        class="col-lg-4 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.6s"
      >
        <div
          id="carouselExampleControls3"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              v-for="item in section3"
              :key="item.id"
              class="carousel-item active"
            >
              <div class="card">
                <img :src="item.image" class="card-img-top" alt="..." />
                <a
                  class="iconphto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="getdata(section3)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.688"
                    height="22.88"
                    viewBox="0 0 26.688 22.88"
                  >
                    <path
                      id="Path_1072"
                      data-name="Path 1072"
                      d="M20536.861-1251.122h17.156a2.865,2.865,0,0,0,2.863-2.859v-.955h.949a2.863,2.863,0,0,0,2.859-2.859v-13.344a2.865,2.865,0,0,0-2.859-2.864h-17.156a2.865,2.865,0,0,0-2.859,2.864v.949h-.953a2.863,2.863,0,0,0-2.859,2.859v13.349A2.863,2.863,0,0,0,20536.861-1251.122Zm18.111-3.814h0v.955a.942.942,0,0,1-.955.949h-17.156a.942.942,0,0,1-.955-.949v-13.349a.942.942,0,0,1,.955-.949h.953v10.485a2.863,2.863,0,0,0,2.859,2.859h14.3Zm-14.3-1.909a.942.942,0,0,1-.955-.949v-13.344a.945.945,0,0,1,.955-.955h17.156a.945.945,0,0,1,.955.955v13.344a.942.942,0,0,1-.955.949Z"
                      transform="translate(-20534.002 1274.002)"
                      fill="#392c23"
                    ></path>
                  </svg>
                </a>
                <div class="card-body">
                  <p class="card-text">
                    {{ item.p }}
                  </p>
                  <div class="divcountimg">
                    <span>{{ section3.length }}</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.89"
                        height="16.191"
                        viewBox="0 0 18.89 16.191"
                      >
                        <path
                          id="icons8_image"
                          d="M3.024,2A2.031,2.031,0,0,0,1,4.024V16.167a2.031,2.031,0,0,0,2.024,2.024H17.866a2.031,2.031,0,0,0,2.024-2.024V4.024A2.031,2.031,0,0,0,17.866,2Zm0,1.349H17.866a.666.666,0,0,1,.675.675v9.8L13.813,8.836,11.177,11.8,7.114,7.518,2.349,12.884V4.024A.666.666,0,0,1,3.024,3.349ZM14.493,4.7a1.349,1.349,0,1,0,1.349,1.349A1.352,1.352,0,0,0,14.493,4.7ZM7.145,9.511,14.1,16.842H3.024a.666.666,0,0,1-.675-.675V14.918Zm6.694,1.323,4.7,4.954v.379a.666.666,0,0,1-.675.675H15.953L12.11,12.784Z"
                          transform="translate(-1 -2)"
                          fill="#392c23"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls3"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls3"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <popupphot :dataphot="data2" />
  </div>
</template>

<script>
import axios from "axios";
import popupphot from "./popupphot.vue";
export default {
  data() {
    return {
      section1: [],
      section2: [],
      section3: [],
      data2: [],
    };
  },
  components: {
    popupphot,
  },
  methods: {
    getdata(item) {
      this.data2 = item;
      console.log("image");
      console.log(this.data2);
    },
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/MediaCenter2");
    this.section1 = result.data[0].section1;
    this.section2 = result.data[0].section2;
    this.section3 = result.data[0].section3;
  },
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .card {
    margin-top: 25px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .card {
    margin-top: 25px;
  }
}
.card {
  padding: 0;
}
.card-body {
  position: relative;
  background-color: #f1f1f1;
}
.card-body p {
  padding-left: 135px;
}
.carousel-control-prev,
.carousel-control-next {
  width: 40px !important;
  height: 80px !important;
  background: black !important;
  top: 28% !important;
}

.divcountimg {
  position: absolute;
  top: 20px;
  left: 15px;
  display: flex;
  flex-direction: column;
}
.iconphto {
  left: 50%;
  position: absolute;
  width: 93px;
  height: 93px;
  border-radius: 50%;
  background: white;
  display: none;
  align-items: center;
  justify-content: center;
  top: 29%;
}
.carousel:hover .iconphto {
  display: flex;
}
</style>
