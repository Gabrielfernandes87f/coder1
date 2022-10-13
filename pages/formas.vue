<template>
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
