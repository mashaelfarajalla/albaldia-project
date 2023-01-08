<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-12 col-lg-6 animate__animated animate__bounceInDown animate__delay-.5s"
          >
            <h3>الخدمات العامة</h3>
            <p>
              تقدم بلدية غزة نحو 30 خدمة أساسية لسكان مدينة غزة البالغ تعدادهم
              قرابة ‏670 الف نسمة في نهاية عام 2018م بما يشكل 13% من سكان دولة
              فلسطين حيث تبلغ مساحة المدينة 56كم2، مما يجعلها من أكثر المدن
              كثافة سكانية
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
                <img :src="item.image" />
              </div>
              <div class="card-body py-4">
                <h5>{{ item.title }}</h5>
                <p class="card-text">
                  {{ item.details }}
                </p>
                <router-link
                  :to="'/detailsAlKhadmat/' + item.id"
                  class="d-flex align-items-center"
                >
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
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import axios from "axios";
import MainSection from "@/components/MainSection.vue";

export default {
  data() {
    return {
      data: [],
    };
  },
  components: { MainSection },

  async mounted() {
    let result = await axios.get("http://localhost:3000/AlKhadamat");
    this.data = result.data;
  },
};
</script>

<style scoped>
.card-body {
  padding: 1rem 0rem;
}
.col p {
  padding-left: 0px;
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBook";
  color: #392c23;
}

a {
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

.card-body a {
  text-decoration: none;
}
</style>
