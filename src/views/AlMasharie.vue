<template>
  <div class="d-flex align-items-center">
    <h3 class="ms-4">المشاريع القائمة</h3>

    <div class="ms-4">
      <a
        class="dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        فرز
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="#">الاحدث أولا</a></li>
        <li><a class="dropdown-item" href="#">الاقدم أولا</a></li>
      </ul>
    </div>

    <div class="">
      <a
        class="dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        التقويم
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <div class="calendar"></div>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="swiper">
      <div class="swiper-wrapper" style="position: relative">
        <div v-for="item in data" :key="item.id" class="swiper-slide">
          <img src="../assets/image/imageScro1.jpg" class="img-fluid" />
          <div class="carousel-caption d-none d-md-block">
            <button type="button" class="btn btn-outline-light">
              {{ item.category }}
            </button>
            <button type="button" class="btn btn-danger">
              {{ item.price }}
            </button>

            <h4 class="mt-3">{{ item.title }}</h4>
            <p>الممول: {{ item.details }}</p>
            <div class="d-flex align-items-baseline justify-content-start">
              <span class="ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.83"
                  height="23.213"
                  viewBox="0 0 16.83 23.213"
                >
                  <path
                    id="icons8_marker"
                    d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                    transform="translate(-3 -1)"
                    fill="#392c23"
                  />
                </svg>
              </span>
              <p>{{ item.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

export default {
  name: "AlMasharie",
  async mounted() {
    let result = await axios.get("http://localhost:3000/AlMasharie");
    this.data = result.data;
    console.log(result.data);

    const swiper = new Swiper(".swiper", {
      loop: true,
      modules: [Navigation, Pagination],

      Pagination: {
        el: ".swiper-pagination",
      },

      Navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },

      slidesPerView: 1,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  },

  data() {
    return {
      data: [],
    };
  },
};
</script>

<style>
.padding3 {
  padding: 89px 0px 32px 0;
}

.container8 .swiper-button-next:after,
.container8 .swiper-button-prev:after {
  top: -34px;
}

.container8 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container8 .swiper-rtl .swiper-button-prev:after {
  position: fixed;
  left: 96px;
}

.swiper-slide img.img-fluid {
  min-height: 287px;
  object-fit: cover;
}

.container8 .swiper-rtl .swiper-button-next {
  left: 20px;
}

.container8 .swiper-button-next:after,
.container8 .swiper-button-prev:after {
  color: #a5a5a5;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 1rem;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1px solid #a5a5a5;
}

.container8 div.carousel-caption {
  top: 0;
  position: absolute;
  width: 100%;
  text-align: right;
  background: #12100e7a;
  z-index: 1;
  bottom: 0rem;
  right: 0%;
  border-radius: 3%;
  padding: 130px 21px 0 0px;
}

.swiper-slide img {
  border-radius: 3%;
}

.container8 div.carousel-caption h4 {
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBold";
}

.container8 div.carousel-caption p {
  font-size: 12px;
  font-family: "FFShamelFamily-SansOneBook";
}

.container8 div.carousel-caption button {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOneBook";
}

.container8 a.dropdown-toggle {
  text-decoration: none;
  color: #392c23;
  font-size: 14px;
  font-family: "FFShamelFamily-SansOneBook";
}
</style>
