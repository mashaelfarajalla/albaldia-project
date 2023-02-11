<template>
  <div class="col-lg-8 p-0" style="position: relative">
    <div id="map" style="width: 100%; height: 100%"></div>

    <DataModel />
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        المقار والمرافق
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">1</a></li>
        <li><a class="dropdown-item" href="#">2</a></li>
        <li><a class="dropdown-item" href="#">3 </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import DataModel from "./Modal.vue";

import "./map";
export default {
  props: ["datasetion"],
  components: {
    DataModel,
  },
  data() {
    return {
      // markers: [
      //   {
      //     position: {
      //       lat: 31.5075659339788,
      //       lng: 34.464420823310356,
      //     },
      //     position: {
      //       lat: 31.5075659339788,
      //       lng: 34.464420823310356,
      //     },
      //   },
      // ],
      // center: { lat: 51.093048, lng: 6.84212 },
    };
  },
  // mounted() {
  //   function initMap() {
  //     const map = new google.maps.Map(document.getElementById("map"), {
  //       zoom: 10,
  //       center: { lat: -33.9, lng: 151.2 },
  //     });

  //     setMarkers(map);
  //   }
  //   const beaches = [
  //     ["Bondi Beach", 31.5075659339788, 34.464420823310356],
  //     ["Coogee Beach", -33.923036, 151.259052, 5],
  //     ["Cronulla Beach", -34.028249, 151.157507, 3],
  //     ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  //     ["Maroubra Beach", -33.950198, 151.259302, 1],
  //   ];

  //   function setMarkers(map) {
  //     const shape = {
  //       coords: [1, 1, 1, 20, 18, 20, 18, 1],
  //       type: "poly",
  //     };

  //     for (let i = 0; i < beaches.length; i++) {
  //       const beach = beaches[i];

  //       new google.maps.Marker({
  //         position: { lat: beach[1], lng: beach[2] },
  //         map,
  //         // icon: image,
  //         shape: shape,
  //         title: beach[0],
  //         zIndex: beach[3],
  //       });
  //     }
  //   }

  //   window.initMap = initMap;
  //   setTimeout(() => {
  //     initMap();
  //   }, 1000);
  // },
};
</script>

<style scoped>
.dropdown .dropdown-toggle {
  background-color: #3ec4b5 !important;
  color: white;
  font-size: 16px;
  padding: 16px 32px 8px;
  font-family: "FFShamelFamily-SansOneBold";
}
.dropdown {
  position: absolute;
  bottom: 50px;
  right: 66px;
}
#map {
  height: 100%;
  width: 100%;
}
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
