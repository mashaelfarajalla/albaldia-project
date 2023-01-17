<template>
  <div
    class="tab-pane fade show active"
    id="our-see"
    role="tabpanel"
    aria-labelledby="pills-see-tab"
  >
    <div class="row">
      <div class="col-md-5">
        <div class="d-flex align-items-center">
          <img src="../../../public/image/svg1.svg" />
          <h5 class="divh5 mx-3">رؤيتنا</h5>
        </div>
        <div class="mt-4">
          <p class="divp">
            تسعى بلدية غزة إلى أن تكون مدينة غزة، مركزا اقتصاديا وحضاريا وثقافيا
            لقطاع غزة، وتقدم البلدية في سبيل الوصول إلى ذلك خدمات متميزة ضمن
            بيئة مستدامة ومشاركة مجتمعية واعية، يسود فيها الأمن والعدالة
            .الإجتماعية، وتفتخر بأصالتها وإرثها الحضاري الفلسطيني
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSection from "@/components/MainSection.vue";

export default {
  components: { MainSection },
};
</script>

<style>
.divh5 {
  color: #cf2a45;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 20px;
}

.divp {
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 16px;
  padding: 0 0px 0 2px;
}
</style>
