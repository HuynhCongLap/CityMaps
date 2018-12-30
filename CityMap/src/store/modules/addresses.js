import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  addresses: [
    //  Remplir si vous souhaitez avoir des adresses par défaut.
  ]
}

const getters = {
  addresses: state => state.addresses
}

const mutations = {
  ADD_ADDRESS (state, address) {
    state.addresses.push(address)
  }
}

const actions = {
  addAddress ({commit}, address) {
    commit('ADD_ADDRESS', address)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
