<template>
  <div class="relative">
    <div
      class="absolute top-2 right-4 bg-gray-800 px-4 pt-2 pb-2 rounded-lg border-solid border-2 border-indigo-500 group hover:bg-blue-400"
    >
      <nuxt-link
        class="text-blue-400 font-bold group-hover:text-gray-800 transition delay-100 duration-300 ease-in-out"
        to="instagram"
        >Instagram</nuxt-link
      >
    </div>
    <div
      class="absolute top-2 right-32 mr-3 bg-gray-800 px-4 pt-2 pb-2 rounded-lg border-solid border-2 border-indigo-500 group hover:bg-blue-400"
    >
      <nuxt-link
        class="text-blue-400 font-bold group-hover:text-gray-800 transition delay-100 duration-300 ease-in-out"
        to="login"
        >Login</nuxt-link
      >
    </div>
    <div class="hero min-h-screen">
      <div class="card w-1/3 min-h-[70vh] bg-base-100 shadow-xl">
        <figure>
          <img
            class="w-full"
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
          />
        </figure>
        <div class="card-body relative">
          <div class="text-center">
            <form @submit.prevent="buscarCep">
              <input
                type="text"
                name="cepInput"
                placeholder="pesquisar cep"
                class="input border-b input-sm w-full max-w-sm border-b-4 border-t-0 border-indigo-500 text-center"
                v-model="api"
              />
            </form>
          </div>
          <div>
            <p class="bg-base-200 p-4 rounded-2xl mt-10">
              consumindo api
              <span class="badge badge-outline text-white">viacep</span> usando
              Vuex
            </p>
          </div>
          <div class="text-lg absolute bottom-5 left-2">
            <p class="badge text-2xl p-5">
              {{ this.$store.getters.baseCep.logradouro }}
            </p>
            <br />
            <p class="badge">{{ this.$store.getters.baseCep.localidade }}</p>
            <p class="badge">{{ this.$store.getters.baseCep.uf }}</p>
            <p class="badge">{{ this.$store.getters.baseCep.ddd }}</p>
            <p class="badge">api: {{ api }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: [],
    };
  },
  created() {
    this.$store.dispatch("fetchCep");
  },
  computed: {
    async baseCep() {
      return await this.$store.getters.baseCep;
    },
  },
};
</script>
