<template>
  <div
    class="col-sm-12 col-md-12 col-lg-4 mtcol12 animate__animated animate__backInUp animate__delay-1s"
  >
    <div class="d-flex justify-content-between">
      <h3>إعلانات البلدية</h3>
      <span><a href="#">المزيد...</a> </span>
    </div>
    <div
      id="carouselExampleDark2"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark2"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark2"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark2"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark2"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="list in data"
          :key="list.id"
          class="carousel-item active"
          data-bs-interval="10000"
        >
          <div v-for="item in list" :key="item.id" class="Ddiv round mb-3">
            <p>
              {{ item.paragraph }}
            </p>
            <div class="d-flex justify-content-between">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.164"
                  height="20.158"
                  viewBox="0 0 17.164 20.158"
                >
                  <path
                    id="icons8_time"
                    d="M8.978,1a.775.775,0,0,0-.678.382.765.765,0,0,0,0,.787.775.775,0,0,0,.678.382h.775V4.138a8.528,8.528,0,1,0,1.551,0V2.551h.775a.775.775,0,0,0,.678-.382.765.765,0,0,0,0-.787A.775.775,0,0,0,12.079,1Zm7.747,3.089A.778.778,0,0,0,16,4.58a.765.765,0,0,0,.176.842l1.647,1.647a.775.775,0,1,0,1.1-1.09L17.282,4.331A.8.8,0,0,0,16.724,4.089Zm-6.2,1.563a6.978,6.978,0,1,1-6.978,6.978A6.964,6.964,0,0,1,10.528,5.652ZM7.415,8.741a.776.776,0,0,0-.715.491.757.757,0,0,0,.182.842l3.1,3.1a.772.772,0,0,0,.751.218.785.785,0,0,0,.557-.557.772.772,0,0,0-.218-.751l-3.1-3.1A.775.775,0,0,0,7.415,8.741Z"
                    transform="translate(-2 -1)"
                    fill="#cf2a45"
                  />
                </svg>
                <span class="me-1">ينتهي الإعلان بتاريخ {{ item.data }}</span>
              </span>

              <span>
                <a href="#" class="hvr-icon-wobble-horizontal"
                  >قراءة المزيد
                  <i class="fa-solid fa-angles-left hvr-icon"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Section2",
  data() {
    return {
      data: [],
    };
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/Section2");
    this.data = result.data[0];
    console.log(result.data[0]);
  },
};
</script>

<style></style>
