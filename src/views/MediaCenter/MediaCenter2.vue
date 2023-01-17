<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <div class="d-flex align-items-center">
            <h3 class="ms-4">الألبومات</h3>

            <div class="ms-4">
              <a
                class="dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                فرز
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">الاحدث أولا</a></li>
                <li><a class="dropdown-item" href="#">الاقدم أولا</a></li>
              </ul>
            </div>

            <div class="">
              <a
                class="dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                التقويم
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">الاحدث أولا</a></li>
                <li><a class="dropdown-item" href="#">الاقدم أولا</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <ul class="">
            <li class="d-inline" data-class="">
              <a class="active" href="">
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
                الصور</a
              >
            </li>
            <li class="d-inline" data-class="">
              <a href="">
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
                الفيديو
              </a>
            </li>
          </ul>
        </div>

        <div class="row">
          <div class="col-4">
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
          <div class="col-4">
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
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls2"
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

          <div class="col-4">
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
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls3"
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
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import axios from "axios";
export default {
  components: { MainSection },
  data() {
    return {
      section1: [],
      section2: [],
      section3: [],
    };
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
</style>
