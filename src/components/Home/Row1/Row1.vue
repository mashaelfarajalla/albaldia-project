<template>
  <div class="row align-items-center center">
    <section-1 />
    <section-2 />
    <section-3 />
  </div>
</template>

<script>
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";

export default {
  components: { Section1, Section2, Section3 },
};
</script>

<style>
@media screen and (min-width: 992px) {
}

@media screen and (max-width: 767px) {
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .center {
    justify-content: center;
  }
}
div h3 {
  color: #cf2a45;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 20px;
  display: inline-block;
}

div span a {
  text-decoration: none;
  color: #848484;
  font-size: 14px;
  font-family: "FFShamelFamily-SansOneBook";
}

.section button svg path {
  fill: white;
}

.round {
  border-radius: 1.25rem !important;
}
</style>
