<template>
  <div class="col-md-12 col-lg-5">
    <div class="">
      <h3>جاهزون لنسمع مقترحاتك</h3>
      <p>أهلا بك .. يمكنك التواصل معنا مباشرة على أرقامنا التالية</p>
    </div>
    <div class="div">
      <h4>تواصل معنا</h4>
      <div class="row">
        <div v-for="item in conntect" :key="item.id" class="col-sm-12 col-md-6">
          <p>
            {{ item.ask }} :<span>{{ item.answer }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <h5>الشبكات الاجتماعية</h5>

      <div class="d-flex align-items-center">
        <div v-for="item in socialmedai" :key="item.id" class="circle3">
          <svg
            id="Group_54563"
            data-name="Group 54563"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              id="Path_6916"
              data-name="Path 6916"
              d="M9,0H9A8.994,8.994,0,0,0,1.713,14.275L.592,17.619l3.459-1.106A9,9,0,1,0,9,0Z"
              transform="translate(0)"
              fill="#392c23"
            />
            <path
              id="Path_6917"
              data-name="Path 6917"
              d="M117.768,125.716A2.548,2.548,0,0,1,116,126.991c-.472.1-1.088.181-3.163-.68a11.316,11.316,0,0,1-4.5-3.974,5.163,5.163,0,0,1-1.072-2.726,2.886,2.886,0,0,1,.923-2.2,1.312,1.312,0,0,1,.923-.324c.112,0,.212.006.3.01.265.011.4.027.573.446.218.525.748,1.822.812,1.955a.538.538,0,0,1,.038.489,1.562,1.562,0,0,1-.292.415c-.133.154-.26.271-.393.436-.122.143-.26.3-.106.563a8.019,8.019,0,0,0,1.465,1.822,6.638,6.638,0,0,0,2.118,1.307.571.571,0,0,0,.637-.1,10.932,10.932,0,0,0,.706-.935.5.5,0,0,1,.648-.2c.244.085,1.534.723,1.8.855s.44.2.5.308A2.252,2.252,0,0,1,117.768,125.716Z"
              transform="translate(-103.512 -112.992)"
              fill="#fff"
            />
          </svg>
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
.div p {
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

.circle3:hover svg path {
  fill: #ffffff;
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
