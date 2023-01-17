<template>
  <div class="row align-items-center justify-content-between">
    <div class="col-sm col-md-6 col-lg-6 animate__animated animate__fadeIn">
      <div class="">
        <h3>تطبيق مصمم خصيصًا لك</h3>
        <p class="p">
          من خلال التطبيق الخاص بنا, يمكنك اجراء العديد من الخدمات التي تساعدك
          .وتسهل عليك الكثير من الوقت والجهد
        </p>
      </div>

      <div class="d-flex flex-column">
        <div v-for="item in data" :key="item.id" class="hover d-flex my-3">
          <div class="circle2">
            <img :src="item.icon" />
          </div>
          <div class="divinline">
            <h5>{{ item.title }}</h5>
            <p>
              {{ item.paragraph }}
            </p>
          </div>
        </div>
      </div>

      <div class="noneimg img mt-4">
        <a href="#" class="mx-3"
          ><img src="../../assets/image/googleplay1.jpg"
        /></a>
        <a href="#"><img src="../../assets/image/app.jpg" /></a>
      </div>
    </div>

    <div class="col-sm col-md-6 col-lg-6 text-center">
      <img class="imagephone" src="../../assets/image/Group1.png" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MobileApp",
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/MobileApplication");
    this.data = result.data;
  },
};
</script>

<style>
/* :root {
  --animate-delay: 2s;
} */
@media screen and (min-width: 992px) {
  .circle2 {
    width: 56px;
  }
}

@media screen and (max-width: 767px) {
  .circle2 {
    width: 88px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .circle2 {
    width: 95px;
  }
}

p.p {
  padding-left: 30px;
}

.imagephone {
  height: 630px;
}
.circle2 {
  height: 56px;
  background-color: #ffffff;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 svg path {
  fill: #392c23;
}

.hover h5 {
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBold";
}

.hover:hover h5 {
  color: #cf2a45;
}
.hover .circle2 img {
  filter: invert(15%) sepia(45%) saturate(320%) hue-rotate(342deg)
    brightness(95%) contrast(94%);
}

.hover:hover img {
  /* filter: invert(100%) sepia(0%) saturate(7485%) hue-rotate(230deg)
    brightness(113%) contrast(103%); */
  filter: invert(100%) sepia(252%) saturate(0%) hue-rotate(0) brightness(100%)
    contrast(100%);
}

.hover:hover .circle2 {
  background-color: #cf2a45;
}

.divinline {
  margin-right: 16px;
}

.img2 img {
  height: 68vh;
}

.img img {
  width: 23%;
}
</style>
