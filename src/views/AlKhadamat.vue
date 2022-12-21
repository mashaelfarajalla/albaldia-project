<template>
  <div class="row">
    <div
      class="col-sm-12 col-lg-6 animate__animated animate__bounceInDown animate__delay-.5s"
    >
      <h3>الخدمات العامة</h3>
      <p>
        تقدم بلدية غزة نحو 30 خدمة أساسية لسكان مدينة غزة البالغ تعدادهم قرابة
        ‏670 الف نسمة في نهاية عام 2018م بما يشكل 13% من سكان دولة فلسطين حيث
        تبلغ مساحة المدينة 56كم2، مما يجعلها من أكثر المدن كثافة سكانية
      </p>
    </div>
  </div>
  <div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 align-items-center"
  >
    <div
      v-for="item in data"
      :key="item.id"
      class="col animate__animated animate__zoomInUp animate__delay-1s"
    >
      <div class="card p-3 hoverDiv shadow-sm">
        <div class="square2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44.498"
            height="44.416"
            viewBox="0 0 44.498 44.416"
          >
            <g id="sewer" transform="translate(-1082.502 -471.499)">
              <path
                id="sewer-2"
                data-name="sewer"
                d="M31.325,44.8Zm12.592-3.828a1.735,1.735,0,0,0-2.453,0,1.491,1.491,0,0,1-2.118,0,4.714,4.714,0,0,0-6.961,0,1.569,1.569,0,0,1-1.059.447,1.6,1.6,0,0,1-1.088-.448,5.034,5.034,0,0,0-3.479-1.548,5.038,5.038,0,0,0-3.482,1.548,1.567,1.567,0,0,1-1.059.448,1.609,1.609,0,0,1-1.088-.448,5.056,5.056,0,0,0-3.509-1.461,4.848,4.848,0,0,0-3.452,1.461,1.526,1.526,0,0,1-1.059.448,1.64,1.64,0,0,1-1.088-.448,4.978,4.978,0,0,0-3.51-1.461,4.84,4.84,0,0,0-3.472,1.467A1.461,1.461,0,0,1,4,41.417a1.481,1.481,0,0,1-1.03-.448A1.735,1.735,0,0,0,.52,43.426,4.918,4.918,0,0,0,7.5,43.42a1.434,1.434,0,0,1,2.069.006,5.017,5.017,0,0,0,7.048,0,1.418,1.418,0,0,1,2.06,0,5.014,5.014,0,0,0,7.048,0,1.633,1.633,0,0,1,1.032-.534,1.63,1.63,0,0,1,1.028.534,5.024,5.024,0,0,0,7.048,0,1.662,1.662,0,0,1,1.039-.534,1.626,1.626,0,0,1,1.021.534,5.046,5.046,0,0,0,3.538,1.461c1.868.083,5.306-1.794,3.483-3.914ZM21.089,16.348H7.21a7.208,7.208,0,0,0-7.2,7.2V34.564a1.735,1.735,0,0,0,3.47,0V23.548a3.734,3.734,0,0,1,3.73-3.73h.783a7.157,7.157,0,0,0-1.044,3.73V34.564a1.735,1.735,0,0,0,3.47,0V23.548a3.734,3.734,0,0,1,3.73-3.73h.783a7.157,7.157,0,0,0-1.043,3.73V34.564a1.735,1.735,0,1,0,3.47,0V23.548a3.734,3.734,0,0,1,3.73-3.73A1.735,1.735,0,0,0,21.089,16.348Z"
                transform="translate(1082.501 471.025)"
                fill="#3ec4b5"
              />
              <path
                id="sewer-3"
                data-name="sewer"
                d="M42.775,25.283H26.318a15.005,15.005,0,0,0-1.68-21.339H42.775a1.735,1.735,0,0,0,0-3.47H15.017A15,15,0,0,0,.3,12.638a1.735,1.735,0,1,0,3.408.654C6.568-.2,26.216,1.49,26.553,15.356a11.633,11.633,0,0,1-4.632,9.316,2.261,2.261,0,0,0,1.343,4.08h19.51a1.735,1.735,0,0,0,0-3.47Z"
                transform="translate(1082.501 471.025)"
                fill="#392c23"
              />
            </g>
          </svg>
        </div>

        <div class="card-body py-4">
          <h5>{{ item.title }}</h5>
          <p class="card-text">
            {{ item.body }}
          </p>
          <a href="#" class="d-flex align-items-center">
            <small class="">عرض التفاصيل</small>
            <div class="me-2 circle5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8.996"
                viewBox="0 0 14 8.996"
              >
                <path
                  id="Path_382"
                  data-name="Path 382"
                  d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                  transform="translate(-737 -1483.002)"
                  fill="#3ec4b5"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/AlKhadamat");
    this.data = result.data;
    console.log(result.data);
  },
};
</script>

<style>
.container7 .card-body {
  padding: 1rem 0rem;
}

container7 .animate__animated .animate__zoomInRight {
  --animate-duration: 1s;
}

.container7 .col p {
  padding-left: 0px;
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBook";
  color: #392c23;
}

.container7 a {
  text-decoration: none;
}

.square2 {
  width: 80px;
  height: 80px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d6d6d6;
  border-radius: 10%;
}

.hoverDiv:hover {
  transition: 0.5s;

  cursor: pointer;
  background: linear-gradient(to right, #7fd9cf 0%, #aeeae4 0%, #46c7b8 100%);
}

.hoverDiv:hover .card-body h5 {
  color: white;
}

.hoverDiv:hover .card-body p {
  color: white;
}

.hoverDiv:hover a div {
  transform: translate(-10px, 0);
}

small {
  --bs-text-opacity: 1;
  color: #6c757d;
}

.hoverDiv:hover .card-body small {
  color: white;
}
</style>
