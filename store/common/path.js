export const state = () => ({
  currentPath: '',
})

export const actions = {
  setCurrentPath({ commit }, path) {
    commit('SET_CURRENT_PATH', path)
  },
}

export const mutations = {
  SET_CURRENT_PATH(state, path) {
    state.currentPath = path
  },
}
