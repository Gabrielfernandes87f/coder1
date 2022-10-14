<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="grid place-items-center">
      <div class="grid place-center">
        <div class="bg-black text-white text-2xl overflow-hidden rounded-lg">
          <div
            class="flex justify-between w-full p-3 flex items-center fixed top-0 w-full bg-black z-10 lg:stacic md:static lg:static"
          >
            <h1>Instagram</h1>
            <div class="flex">
              <div>
                <label for="my-modal-12" class="modal-button">🦾</label>
                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="my-modal-12" class="modal-toggle" />
                <label for="my-modal-12" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <h3 class="text-lg font-bold">ops..</h3>
                    <p class="py-4">Ainda não pode add postagens</p>
                  </label>
                </label>
              </div>
              <div>
                <label for="my-modal-13" class="modal-button">❤️</label>
                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="my-modal-13" class="modal-toggle" />
                <label for="my-modal-13" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <h3 class="text-lg font-bold">opa!</h3>
                    <p class="py-4">Acho que ninguém curtiu nada seu ainda</p>
                  </label>
                </label>
              </div>
              <div>
                <label for="my-modal-14" class="modal-button">✍️</label>
                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="my-modal-14" class="modal-toggle" />
                <label for="my-modal-14" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <h3 class="text-lg font-bold">Ainda não</h3>
                    <p class="py-4">
                      Talvez em breve eu add uma função para editar postagens
                    </p>
                  </label>
                </label>
              </div>
            </div>
          </div>

          <div>
            <div class="carousel w-full snap-x snap-mandatory mt-10">
              <div
                id="slide1"
                class="carousel-item relative w-full snap-always snap-center w-[120px]"
              >
                <div>
                  <label for="my-modal-11" class="modal-button"
                    ><img src="ialy.svg" @click="storys" class="w-full"
                  /></label>
                  <!-- Put this part before </body> tag -->
                  <input
                    type="checkbox"
                    id="my-modal-11"
                    class="modal-toggle"
                  />
                  <label
                    for="my-modal-11"
                    class="modal bg-gray-800 cursor-pointer"
                  >
                    <label class="modal-box relative" for="">
                      <label
                        for="my-modal-11"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                        >✕</label
                      >
                      <h3 class="text-lg font-bold">
                        <div class="carousel w-full snap-always snap-center">
                          <div id="storys1" class="carousel-item w-full">
                            <img src="ialy.svg" class="w-full" />
                          </div>
                          <div id="storys2" class="carousel-item w-full">
                            <img src="kaio.svg" class="w-full" />
                          </div>
                          <div id="storys3" class="carousel-item w-full">
                            <img src="leo.svg" class="w-full" />
                          </div>
                          <div id="storys4" class="carousel-item w-full">
                            <img src="eu.svg" class="w-full" />
                          </div>
                        </div>
                        <div class="flex justify-center w-full py-2 gap-2">
                          <a href="#storys1" class="btn btn-xs">1</a>
                          <a href="#storys2" class="btn btn-xs">2</a>
                          <a href="#storys3" class="btn btn-xs">3</a>
                          <a href="#storys4" class="btn btn-xs">4</a>
                        </div>
                      </h3>
                      <p class="py-4 text-center">meus storys</p>
                    </label>
                  </label>
                </div>
              </div>

              <div
                id="slide1"
                class="carousel-item relative w-full snap-always snap-center w-[120px]"
              >
                <div>
                  <label for="my-modal-9" class="modal-button"
                    ><img src="leo.svg" class="w-full"
                  /></label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-9" class="modal-toggle" />
                  <label for="my-modal-11" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <label
                        for="my-modal-9"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                        >✕</label
                      >
                      <h3 class="text-lg font-bold">
                        <img src="leo.svg" class="w-full" />
                      </h3>
                      <p class="py-4 text-center">meus storys</p>
                    </label>
                  </label>
                </div>
              </div>
              <div
                id="slide1"
                class="carousel-item relative w-full snap-always snap-center w-[120px]"
              >
                <div>
                  <label for="my-modal-11" class="modal-button"
                    ><img src="ialy.svg" class="w-full" />
                  </label>
                  <!-- Put this part before </body> tag -->
                  <input
                    type="checkbox"
                    id="my-modal-11"
                    class="modal-toggle"
                  />
                  <label for="my-modal-11" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <label
                        for="my-modal-11"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                        >✕</label
                      >
                      <h3 class="text-lg font-bold">
                        <img src="ialy.svg" class="w-full" />
                      </h3>
                      <p class="py-4 text-center">meus storys</p>
                    </label>
                  </label>
                </div>
              </div>
              <div
                id="slide1"
                class="carousel-item relative w-full snap-always snap-center w-[120px]"
              >
                <div>
                  <label for="my-modal-11" class="modal-button"
                    ><img src="ialy.svg" class="w-full"
                  /></label>
                  <!-- Put this part before </body> tag -->
                  <input
                    type="checkbox"
                    id="my-modal-11"
                    class="modal-toggle"
                  />
                  <label for="my-modal-11" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <label
                        for="my-modal-11"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                        >✕</label
                      >
                      <h3 class="text-lg font-bold">
                        <img src="ialy.svg" class="w-full" />
                      </h3>
                      <p class="py-4 text-center">meus storys</p>
                    </label>
                  </label>
                </div>
              </div>
              <div
                id="slide1"
                class="carousel-item relative w-full snap-always snap-center w-[120px]"
              >
                <div>
                  <label for="my-modal-11" class="modal-button"
                    ><img src="ialy.svg" class="w-full"
                  /></label>
                  <!-- Put this part before </body> tag -->
                  <input
                    type="checkbox"
                    id="my-modal-11"
                    class="modal-toggle"
                  />
                  <label for="my-modal-11" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <label
                        for="my-modal-11"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                        >✕</label
                      >
                      <h3 class="text-lg font-bold">
                        <img src="ialy.svg" class="w-full" />
                      </h3>
                      <p class="py-4 text-center">meus storys</p>
                    </label>
                  </label>
                </div>
              </div>
              <div
                id="slide1"
                class="carousel-item relative w-full snap-always snap-center w-[120px]"
              >
                <div>
                  <label for="my-modal-9" class="modal-button"
                    ><img src="leo.svg" class="w-full"
                  /></label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-9" class="modal-toggle" />
                  <label for="my-modal-9" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <label
                        for="my-modal-9"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                        >✕</label
                      >
                      <h3 class="text-lg font-bold">
                        <img src="leo.svg" class="w-full" />
                      </h3>
                      <p class="py-4 text-center">meus storys</p>
                    </label>
                  </label>
                </div>
              </div>
              <div
                id="slide1"
                class="carousel-item relative w-full snap-always snap-center w-[120px]"
              >
                <div>
                  <label for="my-modal-9" class="modal-button"
                    ><img src="leo.svg" class="w-full"
                  /></label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-9" class="modal-toggle" />
                  <label for="my-modal-9" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <label
                        for="my-modal-9"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                        >✕</label
                      >
                      <h3 class="text-lg font-bold">
                        <img src="leo.svg" class="w-full" />
                      </h3>
                      <p class="py-4 text-center">meus storys</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-800">
            <div>
              <div class="mt-5 px-2">
                <div class="flex justify-between items-center">
                  <div class="flex justify-center mt-3">
                    <img
                      src="leo.svg"
                      alt=""
                      width="50px"
                      class="-translate-y-2"
                    />
                    <span class="mt-4 text-sm">Gabrielfernandes</span>
                  </div>
                  <div>
                    <label for="my-modal-15" class="modal-button">🫴</label>
                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      id="my-modal-15"
                      class="modal-toggle"
                    />
                    <label for="my-modal-15" class="modal cursor-pointer">
                      <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Dados do post</h3>
                        <p class="py-4">sem informação</p>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <img src="eu.svg" alt="" />
              </div>
            </div>
            <div class="flex justify-between px-2 pb-2 items-center">
              <div class="flex gap-x-2 ml-1">
                <div>
                  <label for="my-modal-1" class="modal-button">❤️</label>

                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <label for="my-modal-1" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Curti</h3>
                      <p class="py-4">você curtiu?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-2" class="modal-button">😒</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                  <label for="my-modal-2" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Não vi graça</h3>
                      <p class="py-4">Alguém achou graça nisso?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-3" class="modal-button">💅</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <label for="my-modal-3" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Fofoca</h3>
                      <p class="py-4">
                        Se ta na internet, é público, vamos compartilhar
                      </p>
                    </label>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <label for="my-modal-4" class="modal-button">😘</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                  <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Adorei</h3>
                      <p class="py-4">Eu pegaria</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-800">
            <div>
              <div class="mt-5 px-2">
                <div class="flex justify-between items-center">
                  <div class="flex justify-center mt-3">
                    <img
                      src="ialy.svg"
                      alt=""
                      width="50px"
                      class="-translate-y-2"
                    />
                    <span class="mt-4 text-sm">dev_bi@</span>
                  </div>
                  <div>
                    <label for="my-modal-15" class="modal-button">🫴</label>
                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      id="my-modal-15"
                      class="modal-toggle"
                    />
                    <label for="my-modal-15" class="modal cursor-pointer">
                      <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Dados do post</h3>
                        <p class="py-4">sem informação</p>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <img src="ialy.svg" alt="" />
              </div>
            </div>
            <div class="flex justify-between px-2 pb-2 items-center">
              <div class="flex gap-x-2 ml-1">
                <div>
                  <label for="my-modal-1" class="modal-button">❤️</label>

                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <label for="my-modal-1" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Curti</h3>
                      <p class="py-4">você curtiu?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-2" class="modal-button">😒</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                  <label for="my-modal-2" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Não vi graça</h3>
                      <p class="py-4">Alguém achou graça nisso?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-3" class="modal-button">💅</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <label for="my-modal-3" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Fofoca</h3>
                      <p class="py-4">
                        Se ta na internet, é público, vamos compartilhar
                      </p>
                    </label>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <label for="my-modal-4" class="modal-button">😘</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                  <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Adorei</h3>
                      <p class="py-4">Eu pegaria</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-800">
            <div>
              <div class="mt-5 px-2">
                <div class="flex justify-between items-center">
                  <div class="flex justify-center mt-3">
                    <img
                      src="ialy.svg"
                      alt=""
                      width="50px"
                      class="-translate-y-2"
                    />
                    <span class="mt-4 text-sm">dev_bi@</span>
                  </div>
                  <div>
                    <label for="my-modal-15" class="modal-button">🫴</label>
                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      id="my-modal-15"
                      class="modal-toggle"
                    />
                    <label for="my-modal-15" class="modal cursor-pointer">
                      <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Dados do post</h3>
                        <p class="py-4">sem informação</p>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <img src="ialy.svg" alt="" />
              </div>
            </div>
            <div class="flex justify-between px-2 pb-2 items-center">
              <div class="flex gap-x-2 ml-1">
                <div>
                  <label for="my-modal-1" class="modal-button">❤️</label>

                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <label for="my-modal-1" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Curti</h3>
                      <p class="py-4">você curtiu?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-2" class="modal-button">😒</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                  <label for="my-modal-2" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Não vi graça</h3>
                      <p class="py-4">Alguém achou graça nisso?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-3" class="modal-button">💅</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <label for="my-modal-3" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Fofoca</h3>
                      <p class="py-4">
                        Se ta na internet, é público, vamos compartilhar
                      </p>
                    </label>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <label for="my-modal-4" class="modal-button">😘</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                  <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Adorei</h3>
                      <p class="py-4">Eu pegaria</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-800">
            <div>
              <div class="mt-5 px-2">
                <div class="flex justify-between items-center">
                  <div class="flex justify-center mt-3">
                    <img
                      src="kaio.svg"
                      alt=""
                      width="50px"
                      class="-translate-y-2"
                    />
                    <span class="mt-4 text-sm">dev_react</span>
                  </div>
                  <div>
                    <label for="my-modal-15" class="modal-button">🫴</label>
                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      id="my-modal-15"
                      class="modal-toggle"
                    />
                    <label for="my-modal-15" class="modal cursor-pointer">
                      <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Dados do post</h3>
                        <p class="py-4">sem informação</p>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <img src="kaio.svg" alt="" />
              </div>
            </div>
            <div class="flex justify-between px-2 pb-2 items-center">
              <div class="flex gap-x-2 ml-1">
                <div>
                  <label for="my-modal-1" class="modal-button">❤️</label>

                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <label for="my-modal-1" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Curti</h3>
                      <p class="py-4">você curtiu?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-2" class="modal-button">😒</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                  <label for="my-modal-2" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Não vi graça</h3>
                      <p class="py-4">Alguém achou graça nisso?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-3" class="modal-button">💅</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <label for="my-modal-3" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Fofoca</h3>
                      <p class="py-4">
                        Se ta na internet, é público, vamos compartilhar
                      </p>
                    </label>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <label for="my-modal-4" class="modal-button">😘</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                  <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Adorei</h3>
                      <p class="py-4">Eu pegaria</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-800">
            <div>
              <div class="mt-5 px-2">
                <div class="flex justify-between items-center">
                  <div class="flex justify-center mt-3">
                    <img
                      src="leo.svg"
                      alt=""
                      width="50px"
                      class="-translate-y-2"
                    />
                    <span class="mt-4 text-sm">GabrielFernandes</span>
                  </div>
                  <div>
                    <label for="my-modal-15" class="modal-button">🫴</label>
                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      id="my-modal-15"
                      class="modal-toggle"
                    />
                    <label for="my-modal-15" class="modal cursor-pointer">
                      <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Dados do post</h3>
                        <p class="py-4">sem informação</p>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <img src="leo.svg" alt="" />
              </div>
            </div>
            <div class="flex justify-between px-2 pb-2 items-center">
              <div class="flex gap-x-2 ml-1">
                <div>
                  <label for="my-modal-1" class="modal-button">❤️</label>

                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <label for="my-modal-1" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Curti</h3>
                      <p class="py-4">você curtiu?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-2" class="modal-button">😒</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                  <label for="my-modal-2" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Não vi graça</h3>
                      <p class="py-4">Alguém achou graça nisso?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-3" class="modal-button">💅</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <label for="my-modal-3" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Fofoca</h3>
                      <p class="py-4">
                        Se ta na internet, é público, vamos compartilhar
                      </p>
                    </label>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <label for="my-modal-4" class="modal-button">😘</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                  <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Adorei</h3>
                      <p class="py-4">Eu pegaria</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-800">
            <div>
              <div class="mt-5 px-2">
                <div class="flex justify-between items-center">
                  <div class="flex justify-center mt-3">
                    <img
                      src="ialy.svg"
                      alt=""
                      width="50px"
                      class="-translate-y-2"
                    />
                    <span class="mt-4 text-sm">dev_bi@</span>
                  </div>
                  <div>
                    <label for="my-modal-15" class="modal-button">🫴</label>
                    <!-- Put this part before </body> tag -->
                    <input
                      type="checkbox"
                      id="my-modal-15"
                      class="modal-toggle"
                    />
                    <label for="my-modal-15" class="modal cursor-pointer">
                      <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Dados do post</h3>
                        <p class="py-4">sem informação</p>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <img src="ialy.svg" alt="" />
              </div>
            </div>
            <div class="flex justify-between px-2 pb-2 items-center">
              <div class="flex gap-x-2 ml-1">
                <div>
                  <label for="my-modal-1" class="modal-button">❤️</label>

                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <label for="my-modal-1" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Curti</h3>
                      <p class="py-4">você curtiu?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-2" class="modal-button">😒</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                  <label for="my-modal-2" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Não vi graça</h3>
                      <p class="py-4">Alguém achou graça nisso?</p>
                    </label>
                  </label>
                </div>
                <div>
                  <label for="my-modal-3" class="modal-button">💅</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <label for="my-modal-3" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Fofoca</h3>
                      <p class="py-4">
                        Se ta na internet, é público, vamos compartilhar
                      </p>
                    </label>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <label for="my-modal-4" class="modal-button">😘</label>
                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                  <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                      <h3 class="text-lg font-bold">Adorei</h3>
                      <p class="py-4">Eu pegaria</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-20"></div>
          <div
            class="flex items-center justify-around fixed bottom-0 w-full bg-black z-10 lg:stacic md:static lg:static pb-2"
          >
            <a href="/instagram">
              <span> 🏠</span>
            </a>
            <div>
              <!-- The button to open modal -->
              <label for="my-modal-5" class="modal-button">🔍</label>

              <!-- Put this part before </body> tag -->
              <input type="checkbox" id="my-modal-5" class="modal-toggle" />
              <label for="my-modal-5" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                  <h3 class="text-lg font-bold">Pesquisa?</h3>
                  <p class="py-4">Sua Alexa pode fazer pesquisa, eu não 😁</p>
                </label>
              </label>
            </div>
            <div>
              <label for="my-modal-6" class="modal-button">🎥</label>

              <!-- Put this part before </body> tag -->
              <input type="checkbox" id="my-modal-6" class="modal-toggle" />
              <label for="my-modal-6" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                  <h3 class="text-lg font-bold">Filmar</h3>
                  <p class="py-4"></p>
                </label>
              </label>
            </div>
            <span @click="vibrar">💳 </span>
            <div class="relative">
              <span class="absolute top-7 left-[1.4rem] text-red-700">.</span>

              <div>
                <label for="my-modal-16" class="modal-button">
                  <img src="leo.svg" alt="" width="50px" />
                  <span class="absolute top-7 left-[1.4rem] text-red-700"
                    >.</span
                  >
                </label>
                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="my-modal-16" class="modal-toggle" />
                <label for="my-modal-16" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <label
                      for="my-modal-16"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                      >✕</label
                    >
                    <h3 class="text-lg font-bold">voltar?</h3>
                    <nuxt-link to="/" class="py-4 text-red-400 text-lg"
                      >Vejos outros projetos clicando aqui</nuxt-link
                    >
                  </label>
                </label>
              </div>
            </div>
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
      todos: [],
    };
  },
  methods: {
    vibrar() {
      window.navigator.vibrate(200);
    },
    storys() {
      setTimeout(function () {
        console.log("2");
      }, 2000);
    },
  },
};
</script>
