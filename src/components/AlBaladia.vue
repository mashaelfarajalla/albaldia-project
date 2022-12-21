<template>
  <div class="mt-5">
    <h3>المراكز</h3>
  </div>
  <div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 align-items-center"
  >
    <div v-for="item in card" :key="item.id" class="col">
      <div class="card shadow-sm">
        <img src="../assets/image/atrafplace-1092x614.png" />
        <div class="divabsolute">
          <img src="../assets/image/mmmmm.png" />
        </div>

        <div class="card-body mt-5">
          <h5>{{ item.title }}</h5>
          <p class="card-text">
            {{ item.body }}
          </p>

          <div class="d-flex align-items-center">
            <small class="text-muted">عرض التفاصيل</small>
            <div class="circle5">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AlBaladia",
  data() {
    return {
      card: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/AlBaladia");
    this.card = result.data;
    console.log(result.data);
  },
};
</script>

<style>
.card {
  padding: 15px;
}

h3 {
  color: #cf2a45;
  font-size: 20px;
  font-family: "FFShamelFamily-SansOneBold";
}

div h5 {
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 16px;
  color: #392c23;
}

.container5 p {
  font-family: "FFShamelFamily-SansOnebook";
  font-size: 14px;
  color: #392c23;
}

small {
  font-family: "FFShamelFamily-SansOnebook";
  font-size: 14px;
  color: #392c23;
}

.divabsolute {
  position: absolute;
  left: 37%;
}

.circle5 {
  height: 30px;
  width: 30px;
  background-color: #f3f2f2;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-cols-md-3 > .col {
  padding: 0 9px;
}

.padding2 {
  padding: 38px 0px 32px 0;
}
.divabsolute {
  top: 35%;
}

.container5 .card-body {
  padding: 1rem 0rem;
}
</style>
