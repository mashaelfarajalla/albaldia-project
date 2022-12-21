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

        <!-- <div class="col-sm-12 col-md">
          <p>رقم الشكاوي :<span>021542354</span></p>
        </div> -->
      </div>
      <!-- <div class="row">
        <div class="col-sm-12 col-md">
          <p>رقم الهاتف :<span>2844055</span></p>
        </div>
        <div class="col-sm-12 col-md">
          <P> رقم الفاكس :<span>2824400</span></P>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md">
          <p>الرمز البريدي :<span>16</span></p>
        </div>
        <div class="col-sm-12 col-md">
          <p>عنوان البريد :<span>16</span></p>
        </div>
      </div> -->
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
        <!-- 
        <div class="circle3">
          <svg
            id="svgexport-6_6_"
            data-name="svgexport-6 (6)"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15.672"
            viewBox="0 0 18 15.672"
          >
            <g id="XMLID_496_">
              <path
                id="XMLID_497_"
                d="M.318,26.915l4.148,1.548,1.605,5.163a.488.488,0,0,0,.775.233l2.312-1.885A.69.69,0,0,1,10,31.951l4.17,3.027a.489.489,0,0,0,.766-.3L17.99,19.99a.489.489,0,0,0-.655-.556L.313,26A.489.489,0,0,0,.318,26.915Zm5.494.724,8.106-4.992a.141.141,0,0,1,.17.224L7.4,29.089a1.387,1.387,0,0,0-.43.83l-.228,1.689a.209.209,0,0,1-.409.03l-.876-3.08A.816.816,0,0,1,5.812,27.639Z"
                transform="translate(0 -19.401)"
                fill="#392c23"
              />
            </g>
          </svg>
        </div>

        <div class="circle3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17.892"
            viewBox="0 0 18 17.892"
          >
            <g
              id="Group_54706"
              data-name="Group 54706"
              transform="translate(-690.5 -5385.5)"
            >
              <path
                id="Path_203"
                data-name="Path 203"
                d="M699.5,5385.5a9,9,0,0,0-1.406,17.892V5397.1h-2.285v-2.6h2.285v-1.979a3.178,3.178,0,0,1,3.4-3.5,13.543,13.543,0,0,1,2.015.18v2.208h-1.134a1.3,1.3,0,0,0-1.468,1.4v1.691h2.5l-.4,2.6h-2.1v6.288A9,9,0,0,0,699.5,5385.5Z"
                fill="#231f20"
              />
            </g>
          </svg>
        </div>
        <div class="circle3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <g
              id="Group_54683"
              data-name="Group 54683"
              transform="translate(-734.5 -5385.5)"
            >
              <path
                id="Path_204"
                data-name="Path 204"
                d="M743.5,5391.8a2.7,2.7,0,1,0,1.909.792A2.709,2.709,0,0,0,743.5,5391.8Zm0-1.8a4.5,4.5,0,1,1-3.182,1.32A4.518,4.518,0,0,1,743.5,5390Zm5.85-.228a1.125,1.125,0,1,1-2.25,0,1.125,1.125,0,0,1,.33-.792,1.109,1.109,0,0,1,1.59,0A1.125,1.125,0,0,1,749.35,5389.772Zm-5.85-2.473c-2.227,0-2.59.012-3.626.049a5,5,0,0,0-1.618.3,2.658,2.658,0,0,0-.972.635,2.6,2.6,0,0,0-.634.972,4.878,4.878,0,0,0-.3,1.62c-.047,1-.053,1.344-.053,3.624,0,2.232.006,2.592.053,3.625a4.909,4.909,0,0,0,.3,1.62,2.593,2.593,0,0,0,.631.972,2.733,2.733,0,0,0,.972.635,5.08,5.08,0,0,0,1.62.3c.994.049,1.342.049,3.626.049,2.227,0,2.59-.012,3.626-.049a5.03,5.03,0,0,0,1.618-.3,2.67,2.67,0,0,0,.972-.635,2.627,2.627,0,0,0,.634-.972,4.909,4.909,0,0,0,.3-1.62c.047-1,.053-1.344.053-3.625,0-2.231-.006-2.591-.053-3.624a4.909,4.909,0,0,0-.3-1.62,2.624,2.624,0,0,0-.634-.972,2.477,2.477,0,0,0-.972-.635,5.018,5.018,0,0,0-1.618-.3C746.133,5387.3,745.785,5387.3,743.5,5387.3Zm0-1.8c2.446,0,2.75.012,3.709.048a6.894,6.894,0,0,1,2.185.42,4.612,4.612,0,0,1,2.633,2.64,6.609,6.609,0,0,1,.419,2.185c.042.959.054,1.26.054,3.707s-.008,2.749-.054,3.708a6.6,6.6,0,0,1-.419,2.184,4.354,4.354,0,0,1-1.037,1.6,4.494,4.494,0,0,1-1.6,1.044,6.6,6.6,0,0,1-2.185.408c-.959.049-1.264.06-3.709.06s-2.75-.011-3.71-.06a6.619,6.619,0,0,1-2.185-.408,4.49,4.49,0,0,1-1.595-1.044,4.37,4.37,0,0,1-1.037-1.6,6.6,6.6,0,0,1-.419-2.184c-.042-.959-.054-1.26-.054-3.708s.008-2.748.054-3.707a6.611,6.611,0,0,1,.419-2.185,4.371,4.371,0,0,1,1.037-1.6,4.506,4.506,0,0,1,1.595-1.043,6.9,6.9,0,0,1,2.185-.42C740.75,5385.512,741.054,5385.5,743.5,5385.5Z"
                fill="#392c23"
              />
            </g>
          </svg>
        </div>
        <div class="circle3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.814"
            height="18"
            viewBox="0 0 15.814 18"
          >
            <g
              id="svgexport-6_7_"
              data-name="svgexport-6 (7)"
              transform="translate(-31.423 -0.39)"
            >
              <g
                id="Group_54684"
                data-name="Group 54684"
                transform="translate(31.423 0.39)"
              >
                <path
                  id="Path_25754"
                  data-name="Path 25754"
                  d="M47.229,4.9a4.535,4.535,0,0,1-2.74-.916A4.536,4.536,0,0,1,42.677.39H39.738V8.421l0,4.4A2.664,2.664,0,1,1,37.907,10.3V7.311a5.783,5.783,0,0,0-.848-.063,5.636,5.636,0,0,0-4.235,1.894,5.523,5.523,0,0,0,.249,7.616,5.734,5.734,0,0,0,.531.464,5.636,5.636,0,0,0,3.455,1.168,5.783,5.783,0,0,0,.848-.062,5.617,5.617,0,0,0,3.138-1.569A5.5,5.5,0,0,0,42.7,12.843L42.68,6.274a7.447,7.447,0,0,0,4.557,1.549V4.9h-.008Z"
                  transform="translate(-31.423 -0.39)"
                  fill="#392c23"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="circle3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16.884"
            viewBox="0 0 18 16.884"
          >
            <g
              id="svgexport-6_8_"
              data-name="svgexport-6 (8)"
              transform="translate(0 -15.988)"
            >
              <g
                id="Group_54686"
                data-name="Group 54686"
                transform="translate(0 15.988)"
              >
                <g
                  id="Group_54685"
                  data-name="Group 54685"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_25755"
                    data-name="Path 25755"
                    d="M17.647,28.6a5.2,5.2,0,0,1-3.535-2.967.17.17,0,0,0-.01-.02A.745.745,0,0,1,14.018,25c.132-.308.636-.468.969-.574.1-.03.188-.06.263-.089a2.037,2.037,0,0,0,.718-.429.682.682,0,0,0,.218-.491.772.772,0,0,0-.578-.67,1.045,1.045,0,0,0-.392-.074.871.871,0,0,0-.365.074,2.045,2.045,0,0,1-.75.214.689.689,0,0,1-.249-.054c.007-.113.014-.228.021-.348l0-.052a8.919,8.919,0,0,0-.23-3.636,4.891,4.891,0,0,0-1.1-1.577,4.606,4.606,0,0,0-1.317-.869,5.2,5.2,0,0,0-2.055-.434H9.128l-.309,0a5.223,5.223,0,0,0-2.058.434,4.58,4.58,0,0,0-1.313.868,4.907,4.907,0,0,0-1.1,1.574A8.927,8.927,0,0,0,4.121,22.5v0c.008.131.017.267.025.4a.721.721,0,0,1-.295.055,1.951,1.951,0,0,1-.8-.215.72.72,0,0,0-.3-.063,1.077,1.077,0,0,0-.539.151.746.746,0,0,0-.381.487.673.673,0,0,0,.257.631,2.212,2.212,0,0,0,.671.384c.077.03.168.059.263.089.333.106.838.266.97.574a.75.75,0,0,1-.086.612.16.16,0,0,0-.009.02,5.961,5.961,0,0,1-.907,1.4A5.089,5.089,0,0,1,1.889,28a4.023,4.023,0,0,1-1.536.6A.42.42,0,0,0,0,29.034a.533.533,0,0,0,.044.183h0a1.125,1.125,0,0,0,.61.521,6.961,6.961,0,0,0,1.761.458,2.138,2.138,0,0,1,.108.387c.029.135.06.275.1.422a.461.461,0,0,0,.483.351,2.349,2.349,0,0,0,.414-.057,4.706,4.706,0,0,1,.944-.107,4.1,4.1,0,0,1,.675.057A3.206,3.206,0,0,1,6.4,31.9a4.082,4.082,0,0,0,2.486.969q.046,0,.091,0c.036,0,.082,0,.129,0A4.088,4.088,0,0,0,11.6,31.9h0a3.217,3.217,0,0,1,1.261-.651,4.1,4.1,0,0,1,.675-.057,4.728,4.728,0,0,1,.944.1,2.28,2.28,0,0,0,.414.051h.02A.456.456,0,0,0,15.375,31c.043-.145.073-.28.1-.419a2.212,2.212,0,0,1,.107-.385,7.009,7.009,0,0,0,1.761-.458,1.129,1.129,0,0,0,.609-.52A.535.535,0,0,0,18,29.033.419.419,0,0,0,17.647,28.6Z"
                    transform="translate(0 -15.988)"
                    fill="#392c23"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div> -->
      </div>
    </div>
    <div class="mt-5" style="position: relative">
      <img src="../../assets/image/Image5.png" class="w-100" />
      <div class="bg3">
        <h5 class="h5">مرافق البلدية</h5>
        <p class="p">للوصول إلى مرافق البلدية استخدم الخريطة التفاعلية</p>
        <button type="button" class="btn rounded">
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
</template>

<script>
import axios from "axios";
export default {
  name: "Section1",
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
    console.log(result.data[0].ConnectUs);
  },
};
</script>

<style>
.container3 .div p {
  color: #707070;
  font-size: 14;
  font-family: "FFShamelFamily-SansOneBook";
}

.container3 p span {
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

.form-control {
  padding: 12px 15px;
  border-radius: 13px;
}

.form-select {
  padding: 12px 15px;
  border-radius: 13px;
  background-position: left 0.75rem center;
}

form label {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOnebook";
  color: #392c23;
}

form label span {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOnebook";
  color: #c8c8c8;
}

form {
  position: relative;
}

input::placeholder,
.form-select {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOnebook";

  color: #c8c8c8 !important;
  background-color: white;
}

.dropZoneContainer {
  cursor: pointer;
  position: relative;
}

.dropZoneOverlay {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #e2e2e2;
  border-radius: 13px;
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 14px;
  color: #c8c8c8;
  position: absolute;
  top: 25px;
  text-align: center;
  background-color: white;
}

.dropZoneOverlay p span {
  font-family: "FFShamelFamily-SansOneBold";
  color: #cf2a45;
  font-size: 14px;
}

.FileUpload {
  opacity: 0;
  position: relative;
  z-index: 1;
}

textarea.form-control {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOneBook";
  color: #848484;
  min-height: 100px;
  height: 135px;
}

div .send {
  position: absolute;
  bottom: 0;
  display: inline-block;
  left: 0;
}

input[type="submit"] {
  width: 46px;
  background-color: #3ec4b5;
}

.container3 .fa-solid,
.container3 .fas {
  right: 17px;
  position: absolute;
  bottom: 15px;
  color: white;
}

.paddingy {
  padding: 113px 0 41px 0;
}

.dropZoneOverlay,
.FileUpload {
  width: 97%;
  height: 105px;
}

.bg3 {
  position: absolute;
  top: 34%;
  right: 17%;
}
</style>
