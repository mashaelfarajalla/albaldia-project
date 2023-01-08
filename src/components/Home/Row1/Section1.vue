<template>
  <div
    class="col-sm-12 col-md-10 col-lg-4 animate__animated animate__backInRight animate__delay-1s"
  >
    <div class="d-flex justify-content-between">
      <h3>أخبار اليوم</h3>
      <span><a href="#">المزيد...</a> </span>
    </div>
    <div
      id="carouselExampleDark1"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner mt-3">
        <div
          v-for="item in data"
          :key="item.id"
          class="carousel-item active"
          data-bs-interval="10000"
        >
          <!-- <img
            src="@/assets/image/imag1.jpg"
            class="d-block w-100 round"
            alt="..."
          /> -->
          <img :src="item.image" class="d-block w-100 round" />
          <div class="carousel-caption round d-sm-block">
            <div class="divmag">
              <span>{{ item.data1 }}</span>
              <span>{{ item.data2 }}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g id="icons8_clock" transform="translate(-2 -2)">
                    <path
                      id="Path_966"
                      data-name="Path 966"
                      d="M14.892,13.586,13.88,12.117a1.437,1.437,0,0,1-.287-.681L13.12,8.05A1.05,1.05,0,0,0,12.07,7h0a1.05,1.05,0,0,0-1.05,1.05L10.6,11.734a1.792,1.792,0,0,0,.623,1.57l2.181,1.767a1.049,1.049,0,0,0,1.485,0h0A1.052,1.052,0,0,0,14.892,13.586Z"
                      transform="translate(-0.121 -0.166)"
                      fill="#392c23"
                    />
                    <path
                      id="Path_967"
                      data-name="Path 967"
                      d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,17a7,7,0,1,1,7-7A7,7,0,0,1,12,19Z"
                      transform="translate(0 0)"
                      fill="#392c23"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <div class="line"></div>
            <span>{{ item.time }}</span>
            <p>{{ item.paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Section1",
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/HomeSection1");
    this.data = result.data;
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .container1 div.carousel-caption {
    padding: 22px 30px 0 64px;
  }
}
@media screen and (max-width: 767px) {
  .container1 div.carousel-caption {
    padding: 22px 30px 0 64px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .container1 div.carousel-caption {
    padding: 100px 48px 0 106px;
  }
}

.section div .carousel-caption span svg path {
  fill: white;
}

.container1 div.carousel-caption {
  top: 0;
  position: absolute;
  width: 100%;
  right: 0%;
  text-align: right;
  background: #12100e2e;
  z-index: 1;
  bottom: 0rem;
  left: 0%;
}

.container1.section div .carousel-caption p {
  font-family: FFShamelFamily-SansOneBook;
  font-size: 18px;
  color: white;
}

.container1.section div .carousel-caption span {
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 14px;
  display: block;
  color: white;
}

.line {
  height: 67px;
  width: 1px;
  background: #ffffff;
}

.divmag {
  margin-right: -9px;
}

.bg2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  right: 0%;
  text-align: right;
  z-index: 1;
  bottom: 0rem;
  left: 0%;
}
.round {
  border-radius: 1.25rem !important;
}
</style>
