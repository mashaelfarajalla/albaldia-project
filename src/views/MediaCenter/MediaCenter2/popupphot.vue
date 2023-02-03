<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-2.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-2.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-3.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-4.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-5.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-6.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-7.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-8.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-9.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-10.jpg);
                "
              ></div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>

          <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-2.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-2.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-3.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-4.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-5.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-6.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-7.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-8.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-9.jpg);
                "
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url(https://swiperjs.com/demos/images/nature-10.jpg);
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataphot"],
  mounted() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  },
};
</script>

<style scoped>
div#exampleModal {
  background-color: rgba(0, 0, 0, 0.8) !important;
}

.modal-dialog.modal-dialog-centered {
  margin-left: auto !important;
  margin-right: auto !important;
}

.modal-content {
  background-color: transparent !important;
  border-color: transparent !important;
}

.modal-body {
  overflow: hidden;
  /* width: 700px; */
}
.modal-body iframe {
  width: 100%;
}
.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.gallery-top {
  height: 80%;
  width: 100%;
}

.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
  height: 100%;
  opacity: 0.4;
}

.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
