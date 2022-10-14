<template>
  <div class="relative">
    <div>
      <div
        class="absolute top-2 right-4 bg-gray-800 px-4 pt-2 pb-2 rounded-lg border-solid border-2 border-indigo-500 group hover:bg-blue-400"
      >
        <nuxt-link
          class="text-blue-400 font-bold group-hover:text-gray-800 transition delay-100 duration-300 ease-in-out"
          to="/instagram"
          >Instagram</nuxt-link
        >
      </div>
      <div
        class="absolute top-2 right-32 mr-3 bg-gray-800 px-4 pt-2 pb-2 rounded-lg border-solid border-2 border-indigo-500 group hover:bg-blue-400"
      >
        <nuxt-link
          class="text-blue-400 font-bold group-hover:text-gray-800 transition delay-100 duration-300 ease-in-out"
          to="/formas"
          >Formas</nuxt-link
        >
      </div>
    </div>
    <div class="hero min-h-screen bg-base-200">
      <div
        class="hero-content flex-col lg:flex-row-reverse max-w-[60vw] min-w-[90vw]"
      >
        <div class="text-center lg:text-left"></div>
        <div
          class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-1 border-red-800"
        >
          <div class="card-body w-full">
            <h1 class="font-bold text-center text-xl">Gabriel Fernandes</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="foo@gmail.com"
                class="input input-bordered input-primary"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Senha</span>
              </label>
              <input
                type="text"
                placeholder="Senha"
                class="input input-bordered input-primary"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover"
                  >Esqueceu a senha?</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
