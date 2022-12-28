<template>
  <h1>{{ store.name }}</h1>
  <h1>{{ store.routes }}</h1>
</template>

<script setup>
import { useStore } from "./index";
const store = useStore();
console.log(store.name);
</script>

<style></style>
