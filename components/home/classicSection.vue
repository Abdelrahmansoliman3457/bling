<template>
  <div class="container section-pad pt-0">
    <div class="flex-bet-main mb-3">
      <h6 class="title-sec fontbold">{{ $t("Home.classic") }}</h6>
      <NuxtLink to="/" class="decore-link fontbold">{{
        $t("Home.showall")
      }}</NuxtLink>
    </div>

    <div class="cards-all">
      <mainCard />
      <mainCard />
      <mainCard />
    </div>
  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";
import mainCard from "@/components/home/mainCard.vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}

//reactive states

// functions

// lifecycle hooks
onMounted(() => {});
</script>
