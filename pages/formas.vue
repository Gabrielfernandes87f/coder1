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
    <div
      class="min-h-screen grid place-items-center text-white bg-gradient-to-r from-teal-900 via-purple-900 to-green-800"
    >
      <div
        class="relative bg-gradient-to-r from-emerald-900 to-green-700 drop-shadow-2xl w-[300px] h-[300px] rotate-45 rounded-tl-[200px] rounded-bl-[200px] rounded-tr-[200px] rounded-tr-[200px] rounded-br-[50px] border-solid border-2 border-green-300"
      >
        <span
          class="absolute bottom-0 left-[7rem] bg-black w-20 h-20 rounded-tl-[200px] rounded-br-[200px] rotate-45"
        >
        </span>
        <span
          class="absolute bottom-20 right-5 bg-black w-20 h-20 rounded-tl-[200px] rounded-br-[200px] -rotate-45"
        ></span>
        <span
          class="absolute bg-gray-800 w-20 h-10 rounded-tl-[200px] rounded-tr-[400px] bottom-[10px] right-0 -rotate-[230deg] border-solid border-2 border-indigo-500"
        ></span>
      </div>
      <div>Olhe mais em baixo ⬇️</div>
    </div>
    <div>
      <div class="h-screen bg-blue-300 grid place-items-center">
        <div class="w-[70vw] h-[400px] bg-gray-700 rounded-full relative">
          <div class="w-60 h-60 bg-blue-700 rounded-full relative top-5 left-5">
            <div
              class="absolute animate-bounce h-20 w-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-400 rounded-full"
            >
              <span
                class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-1/4 bg-red-700 rounded-full h-5 w-5"
              >
              </span>
            </div>
          </div>

          <div
            class="w-60 h-60 bg-blue-700 rounded-full absolute top-5 right-5"
          >
            <div
              class="absolute animate-bounce h-20 w-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-400 rounded-full"
            >
              <span
                class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-1/4 bg-red-700 rounded-full h-5 w-5"
              >
              </span>
            </div>
          </div>
          <span
            class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-1/4 bg-red-700 rounded-full h-5 w-5"
          >
          </span>
          <span
            class="absolute top-3/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-red-700 rounded-full h-5 w-20 group hover:h-20 hover:w-40"
          >
            <span
              class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-1/4 bg-gray-100 rounded-full h-5 w-1/4 hidden group-hover:block"
            >
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>
