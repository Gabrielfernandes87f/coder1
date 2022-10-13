<template>
  <div class="hero min-h-screen bg-amber-800">
    <div class="grid place-items-center">
      <div class="grid place-center">
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <!-- head -->
            <thead class="mb-10">
              <tr>
                <th>Iniciado</th>
                <th>Avatar</th>
                <th>Linguagem</th>
                <th>Stack</th>
                <th>Finalizado</th>
                <th>Editar</th>
                <th>Apagar</th>
              </tr>
            </thead>

            <tbody v-for="todo in todos" :key="todo.id">
              <!-- row 1 -->
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      class="checkbox"
                      :checked="todo.iniciado"
                    />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12 -translate-y-2">
                        <img :src="todo.avatar" alt="meu-avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-center">{{ todo.linguagem }}</td>
                <td>{{ todo.stack }}</td>
                <th>
                  <label
                    class="swap swap-flip text-2xl grid place-items-center"
                  >
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" :checked="todo.finaliado" />

                    <div class="swap-on">
                      <div class="mask mask-squircle w-12 h-12 -translate-y-2">
                        <img
                          src="/kaio.svg"
                          alt="Avatar-finalizado"
                          @click="kaio"
                        />
                      </div>
                    </div>
                    <div class="swap-off">
                      <div class="mask mask-squircle w-12 h-12 -translate-y-2">
                        <img src="/leo.svg" alt="Avatar-iniciando" />
                      </div>
                    </div>
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12 -translate-y-1">
                        <img :src="todo.editar" alt="meu-avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12 -translate-y-1">
                        <img :src="todo.apagar" alt="meu-avatar" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <br />
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      todos: [
        {
          id: 1,
          iniciado: true,
          avatar: "eu.svg",
          editar: "editar.png",
          apagar: "lixo.png",
          linguagem: "Vue",
          stack: "Front-end",
          finaliado: false,
        },
        {
          id: 2,
          iniciado: false,
          avatar: "ialy.svg",
          editar: "editar.png",
          apagar: "lixo.png",
          linguagem: "javascript",
          stack: "back-end",
          finaliado: false,
        },
        {
          id: 3,
          iniciado: false,
          avatar: "leo.svg",
          editar: "editar.png",
          apagar: "lixo.png",
          linguagem: "typescript",
          stack: "Front-end",
          finaliado: false,
        },
      ],
    };
  },
};
</script>
