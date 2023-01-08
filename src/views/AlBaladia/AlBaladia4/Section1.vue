<template>
  <div class="col-5">
    <div class="d-flex align-items-center">
      <h3 class="ms-4">الخطة الاستراتيجية لبلدية غزة</h3>

      <div class="ms-4">
        <a
          class="dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          الاصدار
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
    <div class="mt-4">
      <p class="divp2">
        نحرص في بلدية غزة على وضع خطط استراتيجية تستجيب لرؤيتنا وقيمنا، ونسعى في
        كل خطة إلى ترسيخ ثقافة الريادة والابتكار والاستثمار الأمثل في الموارد
        البشرية والمادية وتوفير بيئة داعمة ومحفزة تجعل من غزة مدينة صحية وآمنة
        ومستدامة تتوافر فيها مقومات النجاح
      </p>
    </div>

    <div>
      <p class="divtitle">
        لبلدية غزة عبر الآتي يمكنك الاطلاع على الخطط والأهداف الاستراتيجية :
      </p>
      <div v-for="item in data" :key="item.id" class="d-flex divbg mb-4">
        <span>
          <img :src="`${item.icon}`" />
        </span>
        <div class="mx-3">
          <h5>{{ item.title }}</h5>

          <p class="mt-3 divp3">
            {{ item.body }}
          </p>
        </div>
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
    let result = await axios.get("http://localhost:3000/albaladia4");
    this.data = result.data;
  },
};
</script>

<style></style>
