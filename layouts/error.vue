<template>
  <div class="">
    <div class="error">
      <div class="title">{{ message }}</div>
      <p v-if="statusCode === 404" class="description">
        <a v-if="typeof $route === 'undefined'" class="error-link" href="/"></a>
        <NuxtLink v-else class="error-link" to="/">volte pra homePage</NuxtLink>
      </p>

      <p class="description" v-else>pagina nao pode ser renderizada</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtError",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || "erro , aqui";
    },
  },
};
</script>
