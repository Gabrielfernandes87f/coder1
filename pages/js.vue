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
      <div class="card w-1/3 min-h-[70vh] bg-base-100 shadow-xl p-5">
        <p>Treinando javascript</p>
        <div v-for="todos in todos" :key="todos.id">
          <p>todos-id: {{ todos.id }}</p>
        </div>
        <div class="mt-3">
          <button class="btn btn-active" @click="reserse()">reverse</button>
          <button class="btn btn-active" @click="done()">done</button>
          <button class="btn btn-active" @click="gerar(100000)">gerar</button>
          <button class="btn btn-active" @click="random()">ramdom</button>
        </div>
        <p>random: {{ rand }}</p>

        <p>{{ todos }}</p>
        <p>cod: {{ cod }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: "1", text: "Vuex", done: true, stock: 0 },
        { id: "2", text: "Pinia", done: true, stock: 5 },
        { id: "3", text: "tailwind", done: false, stock: 1 },
        { id: "4", text: "PHP", done: true, stock: 0 },
        { id: "5", text: "Docker", done: true, stock: 0 },
        { id: "6", text: "Mysql", done: false, stock: 8 },
      ],
      cod: [1, 2, 4, 5, 6, 7, 8],
      rand: [],
    };
  },
  methods: {
    reserse() {
      this.todos = this.todos.reverse();
    },
    done() {
      this.todos = this.todos.filter((todos) => todos.stock >= "1");
    },
    gerar(n) {
      let newCod = Array.from(Array(n).keys());
      this.cod = newCod;
      console.log(newCod);
    },
    random() {
      let rand = Math.floor(Math.random() * this.cod.length);
      this.rand = rand;
      console.log(this.rand);
    },
  },
};
</script>
