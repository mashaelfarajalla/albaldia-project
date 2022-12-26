<template>
  <div class="y-answer yborder">
    <div class="row">
      <div class="y-answers" v-for="list in data" :key="list.id">
        <h3>الاجابة :</h3>
        <div
          class="col-12 d-flex"
          v-for="item in list[0].answer"
          :key="item.id"
        >
          <span>
            {{ item.id }}
          </span>
          <p class="col-11">
            {{ item.answer }}
            <!-- تحتاج لتجهيز الاوراق والمستندات المطلوبة حسب نوع المعاملة ثم التوجه
            الى دائرة خدمات الجمهور او .عن طريق نظام الخدمات الالكتروني لتدقيم
            المطلب -->
          </p>
        </div>
        <!-- <div class="col-12 d-flex">
            <span>2</span>
            <p class="col-11">
              يتم المطالبة بالمستحقات المتراكمة على الوالد في حال وفاته وان تكون
              المستحقات تخص المكان المراد الحصول على الخدمة فيه
            </p>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section2",
  props: ["data"],
  mounted() {},
};
</script>

<style>
.yborder {
  border: 2px solid #3ec4b5;
  padding: 13px;
  border-radius: 10px;
}

.y-answers p {
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 16px;
  color: #707070;
}

.y-answer .y-answers span {
  width: 24px;
  height: 24px;
  background-color: white;
  display: inline-block;
  border: solid 1px #d6d6d6;
  border-radius: 50%;
  line-height: 25px;
  text-align: center;
  margin-left: 5px;
}
</style>
