<template>
  <div class="row align-items-center">
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


.padding {
  padding: 65px 0px 32px 0;
}
.section {
  align-items: center;
  height: calc(100vh - 145px);
}

.bg2 {
  height: 293px;
  margin-top: 36px;
}

.divmagright p {
  margin-right: 40px;
}

.bg {
  background: url(../../../assets/image/Group.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.section {
  overflow-y: auto;
  position: fixed;
  left: 0;
}

.section div .carousel-caption span svg path {
  fill: white;
}

.container1 div.carousel-caption {
  top: 0;
  position: absolute;
  width: 100%;
  right: 0%;
  text-align: right;
  background: #12100e2e;
  z-index: 1;
  bottom: 0rem;
  left: 0%;
  padding: 22px 30px 0 64px;
}

.container1.section div .carousel-caption p {
  font-family: FFShamelFamily-SansOneBook;
  font-size: 18px;
  color: white;
}

.container1.section div .carousel-caption span {
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 14px;
  display: block;
  color: white;
}

div.carousel-indicators {
  bottom: -60px;
}

div.carousel-dark .carousel-indicators [data-bs-target] {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #392c23;
  opacity: 1;
}

div.carousel-dark .carousel-indicators .active {
  background-color: white;
  border: 1px solid #392c23;
  margin: auto 1px;
}

.line {
  height: 67px;
  width: 1px;
  background: #ffffff;
}

.divmag {
  margin-right: -9px;
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

.Ddiv {
  /* padding: 12px 13px 20px 13px; */
  padding: 9px 13px 2px 13px;
  background: white;
}

.round {
  border-radius: 1.25rem !important;
}

.section .Ddiv p {
  font-size: 16px;
  color: #392c23;
  font-family: FFShamelFamily-SansOneBook;
  padding: 7px 0 0px 0px;
}

.section .Ddiv span {
  color: #cf2a45;
  font-size: 12px;
}

.Ddiv span a {
  text-decoration: none;
  color: #392c23;
  font-size: 10px;
}

.bg2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  right: 0%;
  text-align: right;
  z-index: 1;
  bottom: 0rem;
  left: 0%;
}

.section .h5 {
  color: #cf2a45;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 20px;
}

.container1 .section .p {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 18px;
}

.container1.section button,
.container3.section button {
  border: 1px solid;
  background-color: #cf2a45;
  color: white;
  font-size: 15px;
  width: 124px;
  height: 47px;
  border-radius: 13px;
}

.section button svg path {
  fill: white;
}
</style>
