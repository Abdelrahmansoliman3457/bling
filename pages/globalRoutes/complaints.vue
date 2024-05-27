<template>
    <div class="height-main">
      <div class="container">
        <div class="col-md-7 col-12 margin-auto px-0">
          <div class="login-content">
            <div class="text-center fontbold font22 mb-3">الشكاوي والمقترحات</div>
            <p class="gray-col font15 text-center mb-5">
              من فضلك قم بادخال البيانات التالية
            </p>
            <div class="auth-box">
              <div class="main-input-cont mb-4">
                <h6 class="mb-2 requiredInputLabel">الاسم</h6>
                <input
                  class="main-input"
                  type="text"
                  autocomplete="off"
                  placeholder="قم بادخال الاسم"
                />
              </div>
              <div class="main-input-cont mb-4 tel-input-me">
                <h6 class="mb-2 requiredInputLabel">رقم الجوال</h6>
                <input
                  class="main-input"
                  type="number"
                  autocomplete="off"
                  oninput="this.value = 
     !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"
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
  
              <div class="main-input-cont mb-4">
                <h6 class="mb-2 requiredInputLabel">الرسالة</h6>
                <input
                  class="main-input"
                  type="text"
                  autocomplete="off"
                  placeholder="قم بادخال الرسالة"
                />
              </div>
  
              <div class="flex-group-me mt-5 pt-5 mb-5">
                <button type="submit" class="main-btn up">ارسال</button>
              </div>
              <div class="flex-group-me mt-3 mb-3">
                <div class="dont-have font15 gray-col">
                  او تواصل معنا عن طريق واتساب
                </div>
              </div>
              <div class="flex-group-me">
                <a
                  href="https://api.whatsapp.com/send?phone=9660533438858+&text=hello"
                  target="_blank"
                >
                  <img src="@/assets/imgs/whats.png" alt="img" />
                </a>
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
  
  // lifecycle hooks
  onMounted(() => {});
  </script>
  