<template>
    <div class="height-main">
      <div class="container">
        <div class="col-md-8 col-12 margin-auto px-0">
  
          <div class="login-content">
            <div class="auth-box">
              <p v-html="text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // imports
  import { onMounted } from "vue";
  
  //refs
  const text = ref('تم توليد هذا النص من مولد النص العربي هذ النص هو   تم توليد هذا النص من مولد النص العربي هذ النص هو تم توليد هذا النص من مولد النص العربي هذ النص هو')

  // functions
  
  // lifecycle hooks
  onMounted(() => {});
  </script>
  