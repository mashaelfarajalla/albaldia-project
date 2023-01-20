<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <div class="d-flex align-items-center">
            <h3 class="ms-4">الألبومات</h3>

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
                <li><a class="dropdown-item" href="#">الاحدث أولا</a></li>
                <li><a class="dropdown-item" href="#">الاقدم أولا</a></li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="" id="myTab" role="tablist">
          <li class="" role="presentation">
            <a
              class="nav-link active"
              id="pills-phote-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-phote"
              role="tab"
              aria-controls="our-phote"
              aria-selected="true"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.89"
                  height="16.191"
                  viewBox="0 0 18.89 16.191"
                >
                  <path
                    id="icons8_image"
                    d="M3.024,2A2.031,2.031,0,0,0,1,4.024V16.167a2.031,2.031,0,0,0,2.024,2.024H17.866a2.031,2.031,0,0,0,2.024-2.024V4.024A2.031,2.031,0,0,0,17.866,2Zm0,1.349H17.866a.666.666,0,0,1,.675.675v9.8L13.813,8.836,11.177,11.8,7.114,7.518,2.349,12.884V4.024A.666.666,0,0,1,3.024,3.349ZM14.493,4.7a1.349,1.349,0,1,0,1.349,1.349A1.352,1.352,0,0,0,14.493,4.7ZM7.145,9.511,14.1,16.842H3.024a.666.666,0,0,1-.675-.675V14.918Zm6.694,1.323,4.7,4.954v.379a.666.666,0,0,1-.675.675H15.953L12.11,12.784Z"
                    transform="translate(-1 -2)"
                    fill="#392c23"
                  />
                </svg>
              </span>
              الصور
            </a>
          </li>
          <li class="" role="presentation">
            <a
              class="nav-link"
              id="pills-video-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-video"
              role="tab"
              aria-controls="our-video"
              aria-selected="false"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.882"
                  height="16.191"
                  viewBox="0 0 22.882 16.191"
                >
                  <path
                    id="icons8_video_call"
                    d="M21.882,3.505l-5.5,3.118V3.129a2.072,2.072,0,0,0-2.064-2.064H1.064A2.072,2.072,0,0,0-1,3.129V15.192a2.072,2.072,0,0,0,2.064,2.064H14.313a2.072,2.072,0,0,0,2.064-2.064V11.7l5.5,3.118ZM1.064,2.441H14.313A.679.679,0,0,1,15,3.129V15.192a.679.679,0,0,1-.688.688H1.064a.679.679,0,0,1-.688-.688V3.129A.679.679,0,0,1,1.064,2.441Zm19.442,3.43v6.58l-4.128-2.338v-1.9Z"
                    transform="translate(1 -1.065)"
                    fill="#392c23"
                  />
                </svg>
              </span>
              الفيديو
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <phote />
          <videosection />
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import phote from "./phote.vue";
import videosection from "./video.vue";

export default {
  components: { MainSection, phote, videosection },
};
</script>

<style scoped>
ul li {
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
}
ul li a {
  color: #392c23;
  font-size: 16px;
  text-decoration: none;
  margin: 0 5px;
}

.divborder {
  margin-top: 40px;
  border-bottom: 1px solid #d6d6d6;
}

ul {
  margin-top: 15px;
  padding-right: 0;
  border-bottom: 1px solid #d6d6d6;
}

ul li a:hover,
ul li a.active {
  color: #392c23;
  padding: 0 0 13px 0;
  font-weight: bold;
  border-bottom: 2px solid #cf2a45;
}
</style>
