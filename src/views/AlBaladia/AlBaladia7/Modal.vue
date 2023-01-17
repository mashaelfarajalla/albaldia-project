<template>
  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-between">
            <div class="col-6">
              <h5 class="modal-title">
                مبنى الهندسة والتخطيط
                <!-- {{ data.title }} -->
              </h5>
              <p>
                يعتبر مبنى الهندسة والتخطيط في مدينة غزه أول مركز ثقافي يبني في
                فلسطين, و قد تم إتمام الـعمل في المبني عام 1988م, هذا وبعد مرور
                عشرة سـنوات مـنذ البدء في البــناء وذلـك نتيجة للعراقيل و
                الصـعوبات الجمة التي وضعتها إدارة الاحتلال الإســرائيلـية لعرقلة
                تكملة هذا المشروع وبعد مجهود جبار تخطي كل العقبات من اجـل تحقيق
                هذا الحـلم
                <!-- {{ data.p1 }} -->
              </p>
              <p>
                وقد رشح المبني في عام 1992م للحصول علي جائزة ( الأغا خان للإبداع
                في الهندسة المعمارية ) يتكون مبنى مركز رشاد الشوا الثقافي من
                ثلاثة طوابق حيث يوجد في الطابق الأول ثلاث قاعات متعددة الاستخدام
                و قاعة معرض تستخدم هذه القاعات
                <!-- {{ data.p2 }} -->
              </p>
            </div>
            <div class="col-4">
              <!-- <img :src="data.iamge" class="img-fluid" /> -->
              <img src="/image/image35.png" class="img-fluid" />
            </div>
          </div>
          <div class="row">
            <p>
              لإقامة الفعاليات الثقافية المختلفة في المركز منها المعارض الفنية
              ومعارض المنتجات التجارية و المؤتمرات الدولية و المحلية و المسرحيات
              و ورشات العمل و غيرها من الأنشطة الثقافية و الفنية المختلفة, أما
              في الطابق الثاني فيوجد مكتبة عامة مع قاعة للمطالعة, حيث أن المكتبة
              تلبي جميع احتياجات الباحثين لشتى المعلومات في كافة المجالات و تخدم
              جميع المهتمين من(أساتذة الجامعات، الطلاب، الباحثين و المتخصصين
              وغيرهم) يعتبر مركز رشاد الشوا الثقافي في مدينة غزة أول مركز ثقافي
              يتم بناؤه في فلسطين
              <!-- {{ data.p3 }} -->
            </p>
          </div>
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/Albaladia7");
    this.data = result.data;
  },
};
</script>

<style>
.modal-header {
  border-bottom: 0 !important;
}
.modal-backdrop.show {
  z-index: -1;
}

.modal-backdrop {
  background-color: transparent !important;
}
</style>
