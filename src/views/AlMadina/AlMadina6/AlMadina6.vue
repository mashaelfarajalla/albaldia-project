<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h3>المتحف الإلكتروني</h3>
            <p>
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
          <div v-for="item in data" :key="item.id" class="col-4">
            <div class="card shadow-sm" style="position: relative">
              <img :src="item.image" />
              <div class="card-body body">
                <router-link :to="'/detailsAlmadina/' + item.id">
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
    this.data = result.data;
  },
};
</script>

<style scoped>
.body {
  border-radius: 20px;
  position: absolute;
  /* bottom: -17px; */
  /* left: 12px; */
  height: 92%;
  width: 94%;
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
