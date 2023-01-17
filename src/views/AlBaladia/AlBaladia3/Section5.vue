<template>
  <div
    class="tab-pane fade show"
    id="our-Biology"
    role="tabpanel"
    aria-labelledby="pills-Biology-committees-tab"
  >
    <div class="row">
      <div class="col-4 backround">
        <h3>لجان الأحياء</h3>
        <div class="backgroubdcolorwhite">
          <div class="verticl-menu mt-3">
            <a
              v-for="item in data"
              :key="item.id"
              class="mb-4 d-flex"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span class="circle">{{ item.id }}</span>
              <div class="me-2">
                <span class="spantitle1">{{ item.title }}</span>
                <span class="d-block mt-2 spanp">
                  {{ item.phone }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.865"
                    height="11.875"
                    viewBox="0 0 12.865 11.875"
                  >
                    <path
                      id="icons8_telephone"
                      d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                      transform="translate(-1 -2)"
                      fill="#392c23"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-8">
        <img src="/image/Map.png" class="w-100" style="height: 100%" />
      </div>
    </div>
  </div>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import axios from "axios";

export default {
  components: { MainSection },
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/Albaladia7");
    this.data = result.data;
  },
};
</script>

<style scoped>
.backround {
  border-left: 1px solid rgb(255 254 254);
  background-color: rgb(230, 230, 230);
  padding: 60px 55px 0 0;
}

.verticl-menu a {
  cursor: pointer;
  text-decoration: none;
}
.verticl-menu a .spantitle1 {
  color: #392c23;
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBold";
}
.circle {
  background-color: #cf2a45;
  width: 31px;
  height: 31px;
  display: inline;
  border-radius: 50%;
  text-align: center;
  color: white;
  line-height: 31px;
  padding-top: 2px;
  font-family: boldH;
}
.spanp {
  color: #848484;
  font-size: 12px;
  font-family: "FFShamelFamily-SansOneBook";
}

.verticl-menu a:hover .spantitle1,
.verticl-menu a:hover .spanp,
.verticl-menu a:hover svg path {
  color: #3ec4b5;
  fill: #3ec4b5;
}
.verticl-menu a:hover .circle {
  background-color: #3ec4b5;
}
</style>
