<template>
  <div class="card-main">
    <div class="card-top">
      <img src="@/assets/imgs/slider.png" alt="img" />
    </div>
    <div class="card-body-main text-center">
      <div class="flex-bet-spe">
        <div class="for-style">
          <div class="fontbold mb-2 clamp-me-one">اسم المنتج</div>
          <p class="gray-col clamp-me mb-2">
            تم توليد هذا النص من مولد النص العربي هذ النص هو
          </p>
        </div>
        <div class="for-style">
          <div class="price fontbold font18 mb-2">80 sar</div>
          <NuxtLink to="/" class="decore-link font15">{{ $t("Home.prodetails") }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";

//reactive states

// functions

// lifecycle hooks
onMounted(() => {});
</script>
