<template>
  <div class="col-lg-8 p-0">
    <!-- <div id="map" style="width: 500px; height: 400px"></div> -->

    <iframe
      class="w-100"
      style="height: 100%; border: 0"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17144.822589732106!2d34.46148842959341!3d31.497680928967775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1672862146731!5m2!1sar!2s"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
// import "./map";
export default {};
</script>

<style scoped>
@media screen and (min-width: 768px) and (max-width: 991px) {
  .col-lg-8 {
    height: calc(100vh - 85px);
  }
}

@media screen and (max-width: 767px) {
  .col-lg-8 {
    height: calc(100vh - 85px);
  }
}
</style>
