<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <Section1 />
      </div>
    </div>
  </MainSection>
</template>

<script>
import Section1 from "../components/FrequentlyQuestions/Section1.vue";
import MainSection from "@/components/MainSection.vue";

export default {
  name: "FrequentlyQuestions",
  components: { Section1, MainSection },
};
</script>

<style></style>
