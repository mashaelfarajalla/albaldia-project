<template>
  <div class="col-md-12 col-lg-5">
    <div class="">
      <h3>جاهزون لنسمع مقترحاتك</h3>
      <p>أهلا بك .. يمكنك التواصل معنا مباشرة على أرقامنا التالية</p>
    </div>
    <div class="div1 mt-3">
      <h3 class="">تواصل معنا</h3>
      <div class="row">
        <div v-for="item in conntect" :key="item.id" class="col-sm-12 col-md-6">
          <p>
            {{ item.ask }} :<span>{{ item.answer }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h5>الشبكات الاجتماعية</h5>

      <div class="d-flex align-items-center mt-4">
        <div v-for="item in socialmedai" :key="item.id" class="circle3">
          <img :src="item.icon" />
        </div>
      </div>
    </div>
    <div class="row center">
      <div
        class="col-sm-12 col-md-10 col-lg-12"
        style="position: relative; margin-top: 33px"
      >
        <img src="../../assets/image/Image5.png" class="w-100" />
        <div class="bg3">
          <h5 class="h5">مرافق البلدية</h5>
          <p class="p">للوصول إلى مرافق البلدية استخدم الخريطة التفاعلية</p>
          <button type="button" class="btn button rounded">
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Section1",
  components: {},
  data() {
    return {
      conntect: [],
      socialmedai: [],
      loop: 3,
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/Connect-Us");
    this.conntect = result.data[0].ConnectUs;
    this.socialmedai = result.data[0].SocialMedai2;
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) and (max-width: 991px) {
  .center {
    justify-content: center;
  }
}

.div1 h3 {
  color: #392c23;
  font-size: 16px;
}
.div1 p {
  color: #707070;
  font-size: 14;
  font-family: "FFShamelFamily-SansOneBook";
}

p span {
  color: #392c23;
  font-size: 14;
  font-family: "FFShamelFamily-SansOneBook";
}

.circle3 {
  height: 40px;
  width: 40px;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #392c23;
  margin: 0 4px;
}

.circle3:hover {
  background-color: #cf2a45;
  border: 1px solid transparent;
}

.circle3 img {
  filter: invert(15%) sepia(45%) saturate(320%) hue-rotate(342deg)
    brightness(95%) contrast(94%);
}
.circle3:hover img {
  filter: invert(100%) sepia(252%) saturate(0%) hue-rotate(0) brightness(100%)
    contrast(100%);
}

.circle3:hover svg #Path_6917 {
  fill: #cf2a45;
}

.bg3 {
  position: absolute;
  top: 34%;
  right: 17%;
}
</style>
