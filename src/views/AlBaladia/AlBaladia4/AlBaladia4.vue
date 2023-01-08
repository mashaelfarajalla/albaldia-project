<template>
  <div class="bg section index container1 padding">
    <div class="container">
      <div class="row justify-content-between">
        <Section1 />
        <Section2 />
      </div>
    </div>
  </div>
</template>

<script>
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  components: { Section1, Section2 },
};
</script>

<style>
a.dropdown-toggle {
  text-decoration: none;
  color: #392c23;
  font-size: 14px;
  font-family: "FFShamelFamily-SansOneBook";
}
.divp2 {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 16px;
  padding: 0 0px 0 0;
}

.divtitle {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 16px;
}
.divbg {
  background-color: white;
  padding: 28px 25px 15px 62px;
  border: 1px dashed #d6d6d6;
  border-radius: 20px;
}

.divp3 {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 16px;
  /* padding: 0 0px 0 55px; */
}
</style>
