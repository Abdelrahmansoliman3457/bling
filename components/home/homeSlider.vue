<template>
  <div class="our-slider position-relative">
    <div class="home-Carousel mb-spe">
      <Carousel
        :items-to-show="1"
        dir="rtl"
        :breakpoints="breakpoints"
        :autoplay="4000"
        :transition="1500"
        :wrapAround="true"
      >
        <Slide v-for="slide in 4" :key="slide">
          <img src="@/assets/imgs/slider.png" alt="img" class="slider-img" />
        </Slide>

        <template #addons>
          <!-- <Navigation /> -->
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";

//reactive states

const breakpoints = ref({
  // 700px and up
  300: {
    itemsToShow: 1,
  },
  1024: {
    itemsToShow: 1,
  },
});

// functions

// lifecycle hooks
onMounted(() => {});
</script>
