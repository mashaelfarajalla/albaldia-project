<template>
  <div class="bg section index container1 padding">
    <div class="container">
      <div class="row justify-content-evenly">
        <Section1 />
        <Section2 />
      </div>
    </div>
  </div>
</template>

<script>
import Section1 from "@/components/ConnectUs/Section1.vue";
import Section2 from "@/components/ConnectUs/Section2.vue";

export default {
  name: "ConnectUs",
  components: { Section1, Section2 },
};
</script>

<style></style>
