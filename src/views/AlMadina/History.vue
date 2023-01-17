<template>
  <div
    class="tab-pane fade show active"
    id="our-history"
    role="tabpanel"
    aria-labelledby="pills-Gazahistory-tab"
  >
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div v-for="item in data" :key="item.id" class="col">
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
    this.data = result.data[0].Histroy;
  },
};
</script>

<style>
.card:hover {
  cursor: pointer;
}
</style>
