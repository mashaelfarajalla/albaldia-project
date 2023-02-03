<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3
              class="animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.1s"
            >
              المتحف الإلكتروني
            </h3>
            <p
              class="animate__animated animate__fadeInUp"
              style="animation-duration: 1s; animation-delay: 0.3s"
            >
              تزخر مدينة غزة الفلسطينية بتراث أثري وتاريخي يعود لآلاف السنين،
              ومنذ نشأتها في عام ثلاثة آلاف قبل الميلاد، تعتبر من أقدم المدن
              الأثرية والتاريخية، المعبرة عن تجذر الحضارة الفلسطينية العربية منذ
              أنشأها الكنعانيون، يضم المتحف مئات القطع الأثرية، من فخار، زجاج،
              عاج، أعمدة كورالثية، زينة نساء، وغيرها، وتعود تلك القطع إلى عدد من
              العصور، منها العصر اليوناني، الروماني، البيزنطي، والإسلامي بما
              يحتويه من العصر .الأيوبي والأموي والمملوكي والعثماني
            </p>
          </div>
        </div>
        <div class="row">
          <div
            v-for="item in data"
            :key="item.name"
            class="col-lg-4 animate__animated animate__fadeInUp"
            style="animation-duration: 1s"
            :style="`animation-delay:${item.time}s`"
          >
            <div class="card shadow-sm" style="position: relative">
              <img :src="item.image" />
              <div class="card-body body">
                <router-link
                  :to="'/SideBar/almadinaindex/almadina6/' + item.name"
                >
                  <h4>{{ item.title }}</h4>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>
<script>
import axios from "axios";
import MainSection from "@/components/MainSection.vue";

export default {
  data() {
    return {
      data: [],
    };
  },

  components: { MainSection },
  async mounted() {
    let result = await axios.get("http://localhost:3000/AlMadina6");
    this.data = result.data[0];
    console.log(this.data);
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .body {
    height: 91%;
    width: 93%;
  }
}
@media screen and (max-width: 767px) {
  .body {
    height: 88%;
    width: 91%;
  }
  .card {
    margin-top: 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .body {
    height: 94%;
    width: 96%;
  }
  .card {
    margin-top: 20px;
  }
}
.body {
  border-radius: 9px;
  position: absolute;
  /* bottom: -17px; */
  /* left: 12px; */

  background: #17171a75;
}
h4 {
  color: white;
  font-size: 18px;
  font-family: "FFShamelFamily-SansOneBold";
  position: absolute;
  bottom: 15px;
}
</style>
