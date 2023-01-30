<template>
  <div
    class="tab-pane fade animate__animated animate__fadeInUp"
    style="animation-duration: 1s; animation-delay: 0.2s"
    id="our-goal"
    role="tabpanel"
    aria-labelledby="pills-goal-tab"
  >
    <div class="row">
      <div class="col-lg-5">
        <div class="d-flex align-items-center">
          <img src="../../../public/image/svg2.svg" />
          <h5 class="divh5 mx-3">أهدافنا</h5>
        </div>
        <div class="mt-4">
          <div class="d-flex" v-for="item in data" :key="item.id">
            <span class="span">{{ item.id }}</span>
            <p>{{ item.alhdaf }}</p>
          </div>
        </div>
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
    let result = await axios.get("http://localhost:3000/SiasatAlbaladia");
    this.data = result.data;
  },
};
</script>

<style scoped>
.span {
  width: 24px;
  height: 24px;
  line-height: 24px;
  padding-top: 2px;
  margin-left: 10px;
  display: inline-block;
  border: solid 1px #d6d6d6;
  text-align: center;
  border-radius: 50%;
}
</style>
