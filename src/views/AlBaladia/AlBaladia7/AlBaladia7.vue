<template>
  <MainSection>
     <div class="bg section index container1 padding">
      <div class="container">
    <div class="row">
      <Section1 />
      <Section2 />
      </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  components: { MainSection, Section1, Section2 },
};
</script>

<style></style>
