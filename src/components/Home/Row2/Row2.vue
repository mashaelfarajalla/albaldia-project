<template>
  <div class="row justify-content-center text-center">
    <div style="margin-top: 117px">
      <h4 class="h4 animate__animated animate__fadeInUpBig animate__delay-2s">
        الوصول السريع
      </h4>
    </div>
    <div class="row justify-content-center mt-4">
      <div
        v-for="item in data"
        :key="item.id"
        class="col-6 col-md-3 col-lg-2 animate__animated animate__fadeInRight animate__delay-2s"
      >
        <div class="row">
          <div class="col-1">
            <div class="circle">
              <img :src="item.icon" />
              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.681"
                height="19.681"
                viewBox="0 0 19.681 19.681"
              >
                <path
                  id="icons8_more_info"
                  d="M11.946,2a5.367,5.367,0,1,0,5.367,5.367A5.378,5.378,0,0,0,11.946,2Zm0,10.735A8.963,8.963,0,0,0,3,21.681H4.789a7.157,7.157,0,1,1,14.313,0h1.789A8.963,8.963,0,0,0,11.946,12.735ZM20.892,2V3.789h1.789V2ZM11.946,3.789A3.578,3.578,0,1,1,8.367,7.367,3.567,3.567,0,0,1,11.946,3.789Zm8.946,1.789v5.367h1.789V5.578Z"
                  transform="translate(-3 -2)"
                  fill="#fff"
                />
              </svg> -->
            </div>
          </div>
          <div class="col-1 divmagright">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Row2",
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/HomeServers");
    this.data = result.data;
  },
};
</script>

<style>
.circle {
  height: 50px;
  width: 50px;
  background-color: #3ec4b5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle img {
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(143deg) brightness(100%)
    contrast(102%);
}

.col-1 svg {
  margin: 12px;
}
</style>
