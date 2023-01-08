<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <Row1 />
        <Row2 />
      </div>
    </div>
  </MainSection>
</template>

<script>
// @ is an alias to /src
import Row1 from "@/components/Home/Row1/Row1.vue";
import Row2 from "@/components/Home/Row2/Row2.vue";
import MainSection from "@/components/MainSection.vue";

export default {
  name: "Home",
  components: {
    Row1,
    Row2,
    MainSection,
  },
};
</script>
