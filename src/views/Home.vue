<template>
  
      <Row1 />
      <Row2 />
   
</template>

<script>
// @ is an alias to /src
import Row1 from "@/components/Home/Row1/Row1.vue";
import Row2 from "@/components/Home/Row2/Row2.vue";

export default {
  name: "Home",
  components: {
    Row1,
    Row2,
  },
};
</script>
