<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <AlBaladia />
      </div>
    </div>
  </MainSection>
</template>

<script>
import AlBaladia from "@/components/AlBaladia.vue";
import MainSection from "@/components/MainSection.vue";

export default {
  name: "alBaladia",
  components: { AlBaladia, MainSection },
};
</script>

<style></style>
