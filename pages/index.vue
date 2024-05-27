<template>
  <div>
    <homeSlider />
    <categorySection />
    <classicSection />
    <classicSection />
  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";
import homeSlider from "@/components/home/homeSlider.vue";
import categorySection from "@/components/home/categorySection.vue";
import classicSection from "@/components/home/classicSection.vue";

// lifecycle hooks
onMounted(() => {});
</script>
