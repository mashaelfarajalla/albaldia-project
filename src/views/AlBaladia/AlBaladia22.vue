<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3
            class="animate__animated animate__fadeInUp"
            style="animation-duration: 1s; animation-delay: 0.1s"
          >
            الخلفية التاريخية
          </h3>
        </div>

        <div
          class="row animate__animated animate__fadeInLeftBig"
          style="animation-duration: 1s; animation-delay: 0.3s"
        >
          <div class="swiper-container gallery-top2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 1</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 2</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 3</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 4</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 5</div>
              </div>
            </div>
            <!-- Add Arrows -->
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
          </div>
        </div>
        <div
          class="row mt-5 animate__animated animate__fadeInLeftBig"
          style="animation-duration: 1s; animation-delay: 0.5s"
        >
          <div class="swiper-container gallery-thumbs2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 1</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 2</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 3</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 4</div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-slide-container">Slide 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";

export default {
  components: {
    MainSection,
  },
  mounted() {
    var galleryTop2 = new Swiper(".gallery-top2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      loopedSlides: 4,
    });
    var galleryThumbs2 = new Swiper(".gallery-thumbs2", {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: "auto",
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 4,
    });
    galleryTop2.controller.control = galleryThumbs2;
    galleryThumbs2.controller.control = galleryTop2;
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 300px;
  margin: 20px auto;
}

.swiper-slide-container {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 100%;
  max-width: 600px;
  margin: auto;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.gallery-top2 {
  height: 80%;
  width: 100%;
}
.gallery-thumbs2 {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs2 .swiper-slide {
  width: 20%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs2 .swiper-slide-active {
  opacity: 1;
}
</style>
