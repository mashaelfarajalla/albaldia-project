<template>
  <div class="col-lg-6">
    <div class="d-flex align-items-center">
      <h3 class="ms-4 divtitle">
        ..لعرض أو تحميل الخطة الاستراتيجية، يرجى اختيار الخطة أدناه
      </h3>
    </div>
    <div class="row mt-5">
      <div v-for="item in data" :key="item.id" class="col-md-6 divbg2">
        <div class="row">
          <div class="col d-flex mb-3">
            <span>
              <img :src="`${item.icon}`" />
            </span>
            <div class="mx-3 border-bottom">
              <h5>{{ item.title }}</h5>
              <p>({{ item.date1 }} - {{ item.date2 }})</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-8 d-flex">
            <p>{{ item.size }} ك. ب</p>
            <span>|</span>
            <p class="mousep">
              تحميل
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.586"
                  height="14.114"
                  viewBox="0 0 10.586 14.114"
                >
                  <path
                    id="icons8_download_1"
                    d="M7.7,2v8.578L4.59,7.467l-.827.827,4.53,4.535,4.535-4.535-.836-.827-3.11,3.11V2ZM3,14.938v1.176H13.586V14.938Z"
                    transform="translate(-3 -2)"
                    fill="#3ec4b5"
                  />
                </svg>
              </span>
            </p>
          </div>
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
    let result = await axios.get("http://localhost:3000/albaladia42");
    this.data = result.data;
  },
};
</script>

<style>
.divbg2 {
  background-color: white;
  padding: 28px 25px 15px 0;
  border: 1px solid #d6d6d6;
  border-radius: 20px;
}
.mousep {
  cursor: pointer;
}
</style>
