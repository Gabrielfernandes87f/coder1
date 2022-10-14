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
    <div class="hero min-h-screen bg-amber-800">
      <div
        class="hero-content flex-col lg:flex-row-reverse max-w-[60vw] min-w-[90vw]"
      >
        <div class="text-center lg:text-left"></div>
        <div
          class="card w-full max-w-lg shadow-2xl bg-base-200 border border-1 border-red-800"
        >
          <div class="card-body w-full">
            <form
              action="https://formsubmit.co/c1db01bec840680749bd953b594a29ce"
              method="POST"
            >
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Nome*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Joao da silva"
                  class="input input-bordered input-primary"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">whatsapp</span>
                </label>
                <input
                  type="text"
                  name="celphone"
                  placeholder="83 9 9999 9999"
                  class="input input-bordered input-primary"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="foo@gmail.com"
                  class="input input-bordered input-primary"
                  required
                />
              </div>
              <input
                name="_autoresponse"
                value="Obrigado pelo interesse, irei responder o mais breve"
                type="hidden"
                class="input input-bordered"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="minha msg custum"
              />
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Assunto*</span>
                </label>
                <textarea
                  rows="7"
                  cols="60"
                  type="text"
                  name="message"
                  required
                  placeholder="Sobre o que gostaria de falar?"
                  class="textarea textarea-primary scrollbar scrollbar-thumb-primary scrollbar-track-base-200 scrollbar-thumb-rounded"
                />
              </div>
              <input type="hidden" name="_subject" value="contato-1coder" />

              <div class="form-control mt-6">
                <button class="btn btn-primary">Enviar</button>
              </div>
            </form>
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
