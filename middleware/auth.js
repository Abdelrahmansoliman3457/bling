export default defineNuxtRouteMiddleware((to, from) => {
  if (to.meta.authIsRequired) {
    if (process.client) {
      if (!localStorage.getItem("user_id")) {
        return navigateTo("/login");
      }
    }
  }
});
