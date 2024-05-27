import axios from "axios";

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    proxy: true,
    baseURL: "https://apptheblackcar.co/api/v1",
    withCredentials: false,
    "Access-Control-Allow-Origin" : "*/*"
  });
  const instanceAait = axios.create({
    proxy: true,
    baseURL: "https://dashboard.black-car.aait-sa.com/api",
  });

  return {
    provide: {
      axios: axios,
      instance: instance,
      instanceAait: instanceAait,
    },
  };
});
