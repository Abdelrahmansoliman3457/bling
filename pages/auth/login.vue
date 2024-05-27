<template>
  <div class="height-main">
    <div class="container">
      <div class="col-md-7 col-12 margin-auto px-0">
        <div class="tabs-log px-5">
          <div
            class="main-tap fontbold"
            :class="{ active: phoneshow }"
            @click="showPhone"
          >
            رقم الجوال
          </div>
          <div
            class="main-tap fontbold"
            :class="{ active: emailShow }"
            @click="showEmail"
          >
            الايميل
          </div>
        </div>
        <div class="login-content">
          <div class="text-center fontbold font22 mb-3">تسجيل الدخول</div>
          <p class="gray-col font15 text-center mb-5">
            من فضلك قم بادخال البيانات التالية
          </p>
          <div class="auth-box">
            <div class="main-input-cont tel-input-me" v-if="phoneshow">
              <h6 class="mb-2 requiredInputLabel">رقم الجوال</h6>
              <input
                v-model="phone"
                class="main-input"
                type="number"
                autocomplete="off"
                min="0"
                placeholder="قم بادخال رقم الجوال"
              />
              <div class="drop-countries loginCountry showMe">
                <Dropdown
                  v-model="selectedCountry"
                  :options="countries"
                  filter
                  :emptyMessage="$t('auth.no_available_options')"
                  optionLabel="name"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex-group-me">
                      <img
                        :src="slotProps.value.image"
                        class="mr-2 flag"
                        style="width: 24px"
                      />
                      <div>{{ slotProps.value.phone_code }}</div>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex-group-me">
                      <img
                        :src="slotProps.option.image"
                        :class="`mr-2 flag `"
                        style="width: 24px"
                      />
                      <div>{{ slotProps.option.name }}</div>
                      <div>{{ slotProps.option.phone_code }}</div>
                    </div>
                  </template>
                </Dropdown>
              </div>
            </div>
            <div class="main-input-cont" v-if="emailShow">
              <h6 class="mb-2 requiredInputLabel">الايميل</h6>
              <input
                v-model="email"
                class="main-input"
                type="email"
                autocomplete="off"
                placeholder="قم بادخال الايميل"
              />
            </div>
            <div class="flex-group-me mt-5 pt-5 mb-5">
              <button type="submit" class="main-btn up">تسجيل</button>
            </div>
            <div class="flex-group-me mt-3">
              <div class="dont-have font14 gray-col">
                {{ $t("auth.have") }}
                <NuxtLink to="/auth/register" class="decore-link font15">{{
                  $t("auth.sign")
                }}</NuxtLink>
              </div>
            </div>
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
const phoneshow = ref(true);
const phone = ref('');
const emailShow = ref(false);
const selectedCountry = ref({
  image:
    "https://backend.maak-lancer.com/public/storage/images/countries/1701785725_8987.png",
  phone_code: 966,
});
const countries = ref([
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701785725_8987.png",
    name: "المملكة العربية السعودية",
    phone_code: 966,
  },
  {
    image:
      "https://backend.maak-lancer.com/public/storage/images/countries/1701785725_8987.png",
    name: "مصر",
    phone_code: 20,
  },
]);

// functions
function showEmail() {
  emailShow.value = true;
  phoneshow.value = false;
}
function showPhone() {
  emailShow.value = false;
  phoneshow.value = true;
}

// lifecycle hooks
onMounted(() => {});
</script>
