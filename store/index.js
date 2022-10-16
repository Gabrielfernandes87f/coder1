export const state = () => ({
  cep: []
})

export const getters = {
   baseCep(state) {
    return state.cep
  }
}

export const mutations = {
  SET_CEP(state, payload) {
    state.cep = payload
  }

}

export const actions = {
  async fetchCep({ commit }) {
    const cep = await this.$axios.$get('https://viacep.com.br/ws/01001000/json/')
    commit('SET_CEP', cep)
  },
}
