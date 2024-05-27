<template>
  <div class="container section-pad fontbold">
    <div class="row">
      <div class="col-md-6 col-6 mb-3">
        <NuxtLink to="/" class="category-section position-relative">
          <img src="@/assets/imgs/her.png" alt="img" />
          <div class="text-cat">{{ $t("Home.forher") }}</div>
        </NuxtLink>
      </div>
      <div class="col-md-6 col-6 mb-3">
        <NuxtLink to="/" class="category-section position-relative">
          <img src="@/assets/imgs/him.png" alt="img" />
          <div class="text-cat">{{ $t("Home.forhim") }}</div>
        </NuxtLink>
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
