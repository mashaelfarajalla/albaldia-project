<template>
  <div
    class="tab-pane fade show active"
    id="section21"
    role="tabpanel"
    aria-labelledby="1"
  >
    <div class="paddingrow">
      <img :src="getdata.image" />
      <h5 class="mt-4" style="color: #cf2a45">{{ getdata.title }}</h5>
      <div class="d-flex my-4 justify-content-center align-items-center">
        <div class="line"></div>
        <p>{{ getdata.details }}</p>
        <div class="line"></div>
      </div>
      <p class="pbody">
        {{ getdata.p }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: { sectiondata: Object, getdata: Object },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .line {
    margin: auto 30px;
    width: 110px;
  }
}
@media screen and (max-width: 767px) {
  .line {
    margin: auto 10px;
    width: 90px;
  }
  .paddingrow {
    padding: 15px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .line {
    margin: auto 30px;
    width: 110px;
  }

  .paddingrow {
    padding: 45px;
  }
}

.line {
  border: none;
  border-top: 2px solid #c8c8c8;
  display: inline-block;
  line-height: 8px;
}
</style>
