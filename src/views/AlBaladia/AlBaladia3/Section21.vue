<template>
  <div
    class="show active"
    :id="store.datasercction.target"
    role="tabpanel"
    :aria-labelledby="store.datasercction.id"
  >
    <div class="paddingrow">
      <img
        class="animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.6s"
        :src="store.datasercction.image"
      />
      <h5
        class="mt-4 animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.7s; color: #cf2a45"
      >
        {{ store.datasercction.title }}
      </h5>
      <div
        class="d-flex my-4 justify-content-center align-items-center animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.8s"
      >
        <div class="line"></div>
        <p>{{ store.datasercction.details }}</p>
        <div class="line"></div>
      </div>
      <p
        class="pbody animate__animated animate__fadeInUp"
        style="animation-duration: 1s; animation-delay: 0.9s"
      >
        {{ store.datasercction.p }}
      </p>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/store/data";

export default {
  props: { sectiondata: Object, getdata: Object },

  setup() {
    const store = useStore();

    return { store };
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .line {
    margin: auto 30px;
    width: 110px;
  }
}
@media screen and (max-width: 767px) {
  .line {
    margin: auto 10px;
    width: 90px;
  }
  .paddingrow {
    padding: 15px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .line {
    margin: auto 30px;
    width: 110px;
  }

  .paddingrow {
    padding: 45px;
  }
}

.line {
  border: none;
  border-top: 2px solid #c8c8c8;
  display: inline-block;
  line-height: 8px;
}
.paddingrow img {
  border-radius: 50%;
  border: 10px solid #392c23;
}
.tab-content > .active {
  display: block !important;
}

/* .tab-content > .tab-pane {
  display: none;
} */
.fade {
  transition: opacity 0.15s linear;
}
</style>
