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
    <div class="min-h-screen grid place-items-center bg-red-900 text-white">
      <div>
        <div class="mb-5 text-center">
          <h1 class="text-bold text-2xl">trabalhando ainda nessa pagina</h1>
        </div>
        <div
          class="btn-group btn-group-vertical lg:btn-group-horizontal gap-x-1"
        >
          <button class="btn btn-active" @click="rifasSom(1)">+ 1</button>
          <button class="btn btn-active" @click="rifasSub(1)">-- 1</button>
          <button class="btn btn-active" @click="rifasSom(5)">+5</button>
          <button class="btn btn-active" @click="rifasSub(5)">-5</button>
          <button class="btn btn-active" @click="rifasSom(10)">+10</button>
          <button class="btn btn-active" @click="rifasSub(10)">-10</button>
          <button class="btn btn-active" @click="rifasAdd(10)">add 10</button>
          <button class="btn btn-active" @click="rifas = 0">resetar</button>
        </div>
        <div>rifas: {{ rifas }}</div>
        <div>codigo:</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rifas: 0,
      user: [
        {
          id: 1,
          name: "gabriel",
          codRifas: ["rs"],
        },
      ],
      rf: [
        {
          id: 1,
          cod: "1",
        },
        {
          id: 2,
          cod: "2",
        },
        {
          id: 3,
          cod: "3",
        },
      ],
    };
  },
  methods: {
    rifasSom(x) {
      this.rifas += x;
    },
    rifasSub(x) {
      this.rifas -= x;
    },
    rifasAdd(x) {
      const qt = (this.rifas = this.rifas + x);
      console.log(qt);

      const user1 = this.user.filter(function (user) {
        return user.name === "gabriel";
      });
      const newUser = [
        {
          ...this.user,
          codRifas: [],
        },
      ];
      console.log(newUser);
      console.log(user1);
    },
  },
};
</script>
