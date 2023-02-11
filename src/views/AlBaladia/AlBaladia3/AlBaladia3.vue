<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3
            class="animate__animated animate__fadeInUp"
            style="animation-duration: 1s; animation-delay: 0.1s"
          >
            المجلس البلدي
          </h3>
        </div>
        <ul
          class="animate__animated animate__fadeInUp"
          style="animation-duration: 1s; animation-delay: 0.2s"
          id="myTab"
          role="tablist"
        >
          <li class="" role="presentation">
            <a
              class="nav-link active"
              id="pills-Mayorspeech-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-word"
              role="tab"
              aria-controls="our-word"
              aria-selected="true"
            >
              كلمة رئيس البلدية
            </a>
          </li>
          <li class="" role="presentation">
            <a
              class="nav-link"
              id="pills-members-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-members"
              type="button"
              role="tab"
              aria-controls="our-members"
              aria-selected="false"
            >
              أعضاء المجلس البلدي
            </a>
          </li>
          <li class="" role="presentation">
            <a
              class="nav-link"
              id="#pills-sessions-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-sessions"
              type="button"
              role="tab"
              aria-controls="our-sessions"
              aria-selected="false"
            >
              جلسات المجلس
            </a>
          </li>
          <li class="" role="presentation">
            <a
              class="nav-link"
              id="#pills-Organizing-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-Organizing"
              type="button"
              role="tab"
              aria-controls="our-Organizing"
              aria-selected="false"
            >
              جلسات لجنة التنظيم
            </a>
          </li>
          <li class="" role="presentation">
            <a
              class="nav-link"
              id="#pills-Biology-committees-tab"
              data-bs-toggle="tab"
              data-bs-target="#our-Biology"
              type="button"
              role="tab"
              aria-controls="our-Biology"
              aria-selected="false"
            >
              لجان الأحياء
            </a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import Section5 from "./Section5.vue";

export default {
  components: { MainSection, Section1, Section2, Section3, Section4, Section5 },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  ul li a {
    margin: 0 10px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  ul li a {
    margin: 0 5px;
  }
}
@media screen and (max-width: 767px) {
  ul li {
    margin: 9px;
  }
  ul li a {
    margin: 0 5px;
  }
}
ul li {
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
}
ul li a {
  color: #392c23;
  font-size: 16px;
  text-decoration: none;
  /* margin: 0 10px; */
}

ul {
  border-bottom: 1px solid #d6d6d6;
  padding-left: 0;
  margin-top: 15px;
  padding-right: 0;
}

ul li a:hover,
ul li a.active {
  color: #392c23;
  padding: 0 0 13px 0;
  font-weight: bold;
  border-bottom: 2px solid #cf2a45;
}
</style>
