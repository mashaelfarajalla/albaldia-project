<template>
  <div
    v-for="item in data"
    :key="item.id"
    style="position: relative"
    class="col-sm-12 col-md-10 col-lg-4 round mtcol12 animate__animated animate__backInLeft animate__delay-1s"
  >
    <img :src="`${item.image}`" class="w-100" />
    <div class="box">
      <h3 class="h5">{{ item.title }}</h3>
      <p class="p paddingp">{{ item.body }}</p>
      <button type="button" class="btn button">
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
        {{ item.titlebtn }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Section3",
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/HomeSection3");
    this.data = result.data;
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .mtcol12 {
    margin-top: 38px;
  }
}

@media screen and (max-width: 767px) {
  .mtcol12 {
    margin-top: 70px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .mtcol12 {
    margin-top: 70px;
  }
}
.box {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30%;
  right: 6%;
  align-items: center;
  justify-content: center;
}

.h5 {
  color: #cf2a45;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 20px;
}

.section .p {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 18px;
}
</style>
