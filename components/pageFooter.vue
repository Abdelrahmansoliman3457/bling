<template>
  <div class="footer">
    <div class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-4">
            <div class="right-f">
              <img
                src="@/assets/imgs/logo.png"
                class="logo-footer mb-4"
                alt="img"
              />
              <p class="gray-col mb-4">
                تم توليد هذا النص من مولد النص العربي هذ النص هو تم توليد هذا
                النص من مولد النص العربي هذ النص هو
              </p>
              <div class="images-socials flex-sm-gap">
                <a href="#">
                  <img src="@/assets/imgs/Vector.png" alt="img" />
                </a>
                <a href="#">
                  <img src="@/assets/imgs/Vector.png" alt="img" />
                </a>
                <a href="#">
                  <img src="@/assets/imgs/Vector.png" alt="img" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="middle-f">
              <div class="foot-title fontbold font22 mb-5">{{ $t("Home.quiklink") }}</div>
              <div class="routers">
                <div class="mb-3">
                  <NuxtLink to="/" class="gray-col font19">{{ $t("Home.home") }}</NuxtLink>
                </div>
                <div class="mb-3">
                  <NuxtLink to="/" class="gray-col font19">{{ $t("Home.orders") }}</NuxtLink>
                </div>
                <div class="mb-3">
                  <NuxtLink to="/" class="gray-col font19">{{ $t("Home.cart") }}</NuxtLink>
                </div>
                <div class="mb-3">
                  <NuxtLink to="/" class="gray-col font19">{{ $t("Home.wallet") }}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="middle-f">
              <div class="foot-title fontbold font22 mb-5">{{ $t("Home.quiklink") }}</div>
              <div class="routers">
                <div class="mb-3">
                  <NuxtLink to="/globalRoutes/complaints" class="gray-col font19">{{ $t("Home.Complaints") }}</NuxtLink>
                </div>
                <div class="mb-3">
                  <NuxtLink to="/" class="gray-col font19">{{ $t("Home.settings") }}</NuxtLink>
                </div>
                <div class="mb-3">
                  <NuxtLink to="/" class="gray-col font19">{{ $t("Home.contact") }}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <div class="container">
        <div class="copy-cont">
          <div class="right-text">{{ $t("Home.footerright") }}</div>
          <div class="left-text">{{ $t("Home.footerleft") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports

// Functions

// lifecycle hooks
onMounted(() => {});
</script>
