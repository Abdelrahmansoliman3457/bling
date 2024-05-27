<template>
  <div class="header-main">
    <div
      class="nav-layer"
      :class="{ slideto: sideBar }"
      @click="hideSideBar"
    ></div>
    <div class="top-header">
      <div class="container top">
        <div class="top-lang">
          <div
            class="flex-sm-gap pointer-click"
            v-if="$i18n.locale == 'ar'"
            @click="setEnglish"
          >
            <div class="fontbold">En</div>
            <img src="@/assets/imgs/Vector.png" class="img-lang" alt="img" />
          </div>
          <div
            class="flex-sm-gap pointer-click"
            v-if="$i18n.locale == 'en'"
            @click="setArabic"
          >
            <div class="fontbold">العربية</div>
            <img src="@/assets/imgs/saudi.png" class="img-lang" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <div class="container middle">
      <div class="middle-header">
        <NuxtLink to="/">
          <img src="@/assets/imgs/logo.png" alt="logo" class="logo-img" />
        </NuxtLink>
        <div class="left-meddle-header">
          <NuxtLink to="/" class="round-div">
            <i class="pi pi-user"></i>
          </NuxtLink>
          <NuxtLink to="/" class="round-div">
            <i class="pi pi-star"></i>
          </NuxtLink>
          <NuxtLink to="/" class="round-div">
            <i class="pi pi-shopping-bag"></i>
          </NuxtLink>
          <NuxtLink to="/" class="round-div">
            <i class="pi pi-bell"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="bottom-header-bg">
      <div class="container bottom">
        <div class="bottom-header-main">
          <ul class="links fontbold" :class="{ slideto: sideBar }">
            <NuxtLink to="/" class="mobile">
              <img src="@/assets/imgs/logo.png" alt="logo" class="logo-img" />
            </NuxtLink>
            <li>
              <NuxtLink to="/">{{ $t("Home.home") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{ $t("Home.orders") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/globalRoutes/terms">{{ $t("Home.terms") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/globalRoutes/contactus">{{ $t("Home.contact") }}</NuxtLink>
            </li>
          </ul>
          <div class="flex-sm-gap header-btns">
            <button class="main-btn up lg web">{{ $t("Home.loginpro") }}</button>
            <button class="main-btn up lg mobile">{{ $t("Home.loginpromob") }}</button>
            <NuxtLink to="/auth/login" class="main-btn up d-block">{{ $t("Home.signin") }}</NuxtLink>
            <span
              class="coll-icon"
              @click="showSideBar"
              :class="{ active: sideBar }"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
const route = useRoute();
import { useRoute } from "vue-router";

// reactive states
const sideBar = ref(false);

// functions
function showSideBar() {
  sideBar.value = true;
}
function hideSideBar() {
  sideBar.value = false;
}
function setEnglish() {
  if (!process.server) {
    localStorage.setItem("locale", "en");
  }
  location.reload();
}
function setArabic() {
  if (!process.server) {
    localStorage.setItem("locale", "ar");
  }

  location.reload();
}

watch(
  route,
  (value) => {
    sideBar.value = false;
  },
  { deep: true, immediate: true }
);

// lifecycle hooks
onMounted(() => {
  if (localStorage.getItem("locale") == "en") {
    document.querySelector("body").classList.add("ltr");
  } else {
    document.querySelector("body").classList.remove("ltr");
  }
  if (localStorage.getItem("locale") == null) {
    localStorage.setItem("locale", "ar");
  }
});
</script>
