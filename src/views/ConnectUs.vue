<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row justify-content-between">
          <Section1 />
          <Section2 />
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";

import Section1 from "@/components/ConnectUs/Section1.vue";
import Section2 from "@/components/ConnectUs/Section2.vue";

export default {
  name: "ConnectUs",
  components: { MainSection, Section1, Section2 },
};
</script>

<style scoped></style>
