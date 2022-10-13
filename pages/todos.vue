<template>
  <div class="bg-amber-800">
    <div
      class="flex justify-between items-center relative text-3xl h-screen w-screen"
    >
      <div class="bg-red-200 w-40 h-36">
        <button @click.prevent="show = !show">Mostrar</button>
        <br />

        <transition>
          <p v-show="show" class="text-black">Gabriel fernandes</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
