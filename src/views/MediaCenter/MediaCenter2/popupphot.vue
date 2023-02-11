<template>
  <div
    class="modal fade"
    id="exampleModalphoto"
    tabindex="-1"
    aria-labelledby="exampleModalLabelphoto"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="swiper-container gallery-top btnswipercontainer">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                style="background-image: url('/image/img33.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/img22.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/MaskGroup1.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/img33.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/Map.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/img22.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/img22.png')"
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
                style="background-image: url('/image/img33.png')"
              ></div>
              <div
                class="swiper-slide"
                style="
                  background-image: url('/image/img22.png'));
                "
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/MaskGroup1.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/img33.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/Map.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/img22.png')"
              ></div>
              <div
                class="swiper-slide"
                style="background-image: url('/image/img22.png')"
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
import "./stylebtn.css";
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
      // spaceBetween: 10,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 1,
          spaceBetween: 500,
        },
      },

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
@media screen and (min-width: 992px) {
  .gallery-top .swiper-slide.swiper-slide-active {
    width: 690px !important;
    margin: 0 447px !important;
  }

  .swiper-wrapper {
    align-items: end;
  }
}
@media screen and (max-width: 767px) {
}

i.fa-regular.fa-circle-xmark {
  font-size: 35px;
  color: white;
}
.modal-body {
  padding-bottom: 0;
}
.gallery-thumbs .swiper-slide.swiper-slide {
  height: 100px !important;
  width: 110.5px !important;
}

div#exampleModalphoto {
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
