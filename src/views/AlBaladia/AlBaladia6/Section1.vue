<template>
  <div
    class="tab-pane fade show active"
    id="section1"
    role="tabpanel"
    aria-labelledby="section1-tab"
  >
    <div class="row">
      <div class="col-lg-6">
        <chart1 />
      </div>
      <div class="col-lg-6">
        <chart2 />
      </div>
    </div>
  </div>
</template>

<script>
import chart1 from "./chart1.vue";
import chart2 from "./chart2.vue";

export default {
  components: {
    chart1,
    chart2,
  },
};
</script>
<style></style>
