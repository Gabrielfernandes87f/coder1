export const state = () => ({
  api: '',
  cep: '01001000'
})

export const getters = {
   api(state) {
    return state.api
  }
}

export const mutations = {
  SET_CEP_API(state, payload,) {
    state.api = payload
  }

}

export const actions = {
  async fetchApi({ commit }) {
    cep = "01001000"
    const api = await this.$axios.$get(`https://viacep.com.br/ws/${cep}/json/`)
    commit('SET_CEP_API', api)
  },
}
