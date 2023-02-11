<template>
  <div id="exampleModelMap" class="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button
            id="closeModel"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-between">
            <div class="col-lg-7" style="padding-right: 40px">
              <!-- <h5 class="modal-title">{{ modeldata.title }}</h5> -->
              <h5 class="modal-title">مركز رشاد الشوا الثقافي</h5>
              <p>
                <!-- {{ modeldata.p1 }} -->
                يعتبر مبنى الهندسة والتخطيط في مدينة غزه أول مركز ثقافي يبني في
                فلسطين, و قد تم إتمام الـعمل في المبني عام 1988م, هذا وبعد مرور
                عشرة سـنوات مـنذ البدء في البــناء وذلـك نتيجة للعراقيل و
                الصـعوبات الجمة التي وضعتها إدارة الاحتلال الإســرائيلـية لعرقلة
                تكملة هذا المشروع وبعد مجهود جبار تخطي كل العقبات من اجـل تحقيق
                هذا الحـلم
              </p>
              <p>
                <!-- {{ modeldata.p2 }} -->
                وقد رشح المبني في عام 1992م للحصول علي جائزة ( الأغا خان للإبداع
                في الهندسة المعمارية ) يتكون مبنى مركز رشاد الشوا الثقافي من
                ثلاثة طوابق حيث يوجد في الطابق الأول ثلاث قاعات متعددة الاستخدام
                و قاعة معرض تستخدم هذه القاعات
              </p>
            </div>
            <div class="col-lg-5">
              <!-- <img :src="modeldata.iamge" class="img-fluid" /> -->
              <img src="/image/Image35.png" class="img-fluid" />
            </div>
            <div class="row colrow" style="padding-right: 40px">
              <div class="col-sm-12 col">
                <p>
                  <!-- {{ modeldata.p3 }} -->
                  وقد رشح المبني في عام 1992م للحصول علي جائزة ( الأغا خان
                  للإبداع في الهندسة المعمارية ) يتكون مبنى مركز رشاد الشوا
                  الثقافي من ثلاثة طوابق حيث يوجد في الطابق الأول ثلاث قاعات
                  متعددة الاستخدام و قاعة معرض تستخدم هذه القاعات
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "DataModel",
  props: {
    modeldata: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
.modal {
  --bs-modal-border-color: white !important;
}
.modal-header {
  border-bottom: 0 !important;
}
.modal-backdrop.show {
  z-index: -1;
}

.modal-backdrop {
  background-color: transparent !important;
}

.modal-body h5 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBold";
}

.modal-body p {
  font-size: 14px;
  color: #392c23;
}
@media screen and (max-width: 767px) {
  .colrow {
    margin-top: 20px !important;
    padding-left: 0 !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .colrow {
    margin-top: 20px !important;
    padding-left: 0 !important;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    --bs-modal-width: 934px !important;
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    margin-right: auto;
    margin-left: 30px !important;
  }
}
.modal-dialog-centered {
  min-height: calc(100% - var(--bs-modal-margin) * 1);
}
</style>
