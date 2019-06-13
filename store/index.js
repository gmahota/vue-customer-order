import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  sidebar: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}

