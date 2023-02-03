<template>
  <div
    class="tab-pane fade show"
    id="our-Civilization"
    role="tabpanel"
    aria-labelledby="pills-GazaCivilization-tab"
  >
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-3 g-3">
      <div
        v-for="item in data"
        :key="item.id"
        class="col animate__animated animate__fadeInUp"
        style="animation-duration: 1s"
        :style="`animation-delay:${item.time}s`"
      >
        <div class="card shadow-sm">
          <img :src="item.image" />
          <div class="card-body">
            <h6>{{ item.title }}</h6>
            <small class="text-muted">{{ item.details }}</small>
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
    let result = await axios.get("http://localhost:3000/AlMadina2");
    this.data = result.data[0].Civilization;
  },
};
</script>

<style></style>
