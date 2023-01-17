<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <MobileApp />
      </div>
    </div>
  </MainSection>
</template>
<script>
import MobileApp from "@/components/MobileApplication/MobileApp";
import MainSection from "@/components/MainSection.vue";

export default {
  name: "MobileApplication",
  components: { MobileApp, MainSection },

  data() {
    return {};
  },
};
</script>
