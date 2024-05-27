<template>
  <div class="height-main">
    <div class="container">
      <div class="col-md-7 col-12 margin-auto px-0">
        <div class="login-content">
          <div class="text-center fontbold font22 mb-3">انشاء حساب</div>
          <p class="gray-col font15 text-center mb-5">
            من فضلك قم بادخال البيانات التالية
          </p>
          <div class="auth-box">
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
              <h6 class="mb-2 requiredInputLabel">اسم العميل</h6>
              <input
                class="main-input"
                type="text"
                autocomplete="off"
                placeholder="قم بادخال اسم العميل"
              />
            </div>
            <div class="main-input-cont mb-4">
              <h6 class="mb-2 requiredInputLabel">البريد الالكتروني</h6>
              <input
                class="main-input"
                type="email"
                autocomplete="off"
                placeholder="قم بادخال البريد الالكتروني"
              />
            </div>
            <div class="main-input-cont mb-4" @click="openMapModal">
              <h6 class="mb-2 requiredInputLabel">العنوان</h6>
              <input
                v-model="address"
                readonly
                class="main-input loc-input"
                type="email"
                autocomplete="off"
                placeholder="قم بادخال العنوان"
              />
              <div class="abs-ico"><i class="pi pi-map-marker"></i></div>
            </div>
            <div class="flex-sm-gap main-check">
              <div class="check-style">
                <div class="icon">
                  <i class="pi pi-check"></i>
                </div>
                <input
                  type="checkbox"
                  id="agree"
                  class="main-checkbox"
                  name="agree"
                />
              </div>
              <label for="agree"
                >الموافقة على
                <NuxtLink
                  target="_blank"
                  class="decore-link font17"
                  to="/globalRoutes/terms"
                  >الشروط والاحكام</NuxtLink
                ></label
              >
            </div>
            <div class="flex-group-me mt-5 pt-5 mb-5">
              <button type="submit" class="main-btn up">تسجيل</button>
            </div>
            <div class="flex-group-me mt-3">
              <div class="dont-have font14 gray-col">
                {{ $t("auth.havemain") }}
                <NuxtLink to="/auth/login" class="decore-link font15">{{
                  $t("auth.loginm")
                }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="visible" modal :style="{ width: '800px' }">
      <div class="modal-body-main modal-pad">
        <div class="text-center fontbold font22 mb-4">العنوان</div>
        <div class="dirmain flex-sm-gap">
          <GMapAutocomplete placeholder="ابحث هنا" @place_changed="setPlace">
          </GMapAutocomplete>
          <button class="main-btn up" @click="getCurrentLocatoin">
            موقعك الحالي
          </button>
        </div>
        <GMapMap
          :center="center"
          :zoom="13"
          map-type-id="terrain"
          style="width: 100%; height: 400px"
        >
          <GMapMarker
            @dragend="getPositionmarker($event)"
            :position="center"
            :draggable="true"
          />
        </GMapMap>
        <div class="flex-group-me mt-4">
          <button type="button" class="main-btn up" @click="visible = false">
            تاكيد
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";

//refs
const lat = ref(null);
const lng = ref(null);
const address = ref("");
const center = ref({ lat: 24.7135517, lng: 46.6752957 });
const visible = ref(false);
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
function openMapModal() {
  visible.value = true;
  // use this function to use current location
  setTimeout(() => {
    getCurrentLocatoin();
  }, 500);
}
function setPlace(e) {
  // sended data to backend
  address.value = e.formatted_address;
  lat.value = e.geometry.location.lat();
  lng.value = e.geometry.location.lng();
  // change marker pos
  center.value.lat = e.geometry.location.lat();
  center.value.lng = e.geometry.location.lng();
}

function getPositionmarker(e) {
  center.value.lat = e.latLng.lat();
  center.value.lng = e.latLng.lng();
  getaddressfromlatlng();
}
// getaddress from latlng
function getaddressfromlatlng() {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: center.value }, (results, status) => {
    if (status === "OK") {
      if (results[0]) {
        address.value = results[0].formatted_address;
       
          document.querySelector(".pac-target-input").value =
            results[0].formatted_address;
      
      } else {
        address.value = "No results found";
      }
    } else {
      address.value = "Geocoder failed due to: " + status;
    }
  });
}
// get current location
function getCurrentLocatoin() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        center.value.lat = position.coords.latitude;
        center.value.lng = position.coords.longitude;
        lat.value = position.coords.longitude;
        lng.value = position.coords.longitude;
        getaddressfromlatlng();
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

// lifecycle hooks
onMounted(() => {});
</script>
