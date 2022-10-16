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

    <div class="hero min-h-screen min-w-screen px-10 py-20">
      <div
        class="card bg-base-100 shadow-xl p-5 sm:w-full md:w-full lg:w-6/12 max-w-full"
      >
        <p>Treinando javascript</p>
        <div
          class="absolute top-2 right-4 bg-gray-800 px-4 pt-2 pb-2 rounded-lg border-solid border-2 border-indigo-500 group hover:bg-blue-400"
        >
          <a
            class="text-blue-400 font-bold group-hover:text-gray-800 transition delay-100 duration-300 ease-in-out"
            target="_blank"
            href="https://github.com/Gabrielfernandes87f/coder1/blob/main/pages/js.vue"
            >coding</a
          >
        </div>
        <div class="text-center mt-10 mb-5">
          <input
            type="text"
            name="cepInput"
            placeholder="informe um número"
            class="input border-b input-sm w-full max-w-sm border-b-4 border-t-0 border-indigo-500 text-center"
            v-model="int"
            @click.prevent="gerarInt"
          />
        </div>
        <div v-for="todos in todos" :key="todos.id">
          <p>todos-id: {{ todos.id }}</p>
        </div>
        <div class="mt-3">
          <button class="btn btn-active my-5" @click="reserse()">
            reverse
          </button>
          <button class="btn btn-active mt-5" @click="done()">done</button>
          <button class="btn btn-active mt-5" @click="gerar(101)">gerar</button>
          <button class="btn btn-active mb-5" @click="random()">ramdom</button>
        </div>
        <p>random: {{ rand }}</p>
        <p>user: {{ user }}</p>

        <p>{{ todos }}</p>
        <p>int: {{ int }}</p>
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
        { id: "1", text: "Vuex", done: true, stock: 1 },
        { id: "2", text: "Pinia", done: true, stock: 5 },
        { id: "3", text: "tailwind", done: false, stock: 1 },
        { id: "4", text: "PHP", done: true, stock: 3 },
        { id: "5", text: "Docker", done: true, stock: 0 },
        { id: "6", text: "Mysql", done: false, stock: 8 },
      ],
      cod: [],
      rand: [],
      user: [],
      n: 1,
      int: 1,
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
      // verifica se tem items antes de todar a função
      if (this.cod.length >= 1) {
        // rand numero aleatorio pegando o this.cod como base
        let rand = Math.floor(Math.random() * this.cod.length);
        //  atualizando o this.rand com o numero que foi gerado
        this.rand = rand;
        // pegando o index
        let index = this.cod.indexOf(rand);
        // add o numero ao usuario
        this.user.push(this.rand);
        // removendo o item que ja foi add ao usuario
        this.cod.splice(index, 1);
      } else {
        this.rand = "Não tem items para add";
      }
    },
    gerarInt() {
      // console.log(this.int);
    },
  },
};
</script>
