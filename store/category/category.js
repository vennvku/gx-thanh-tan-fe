import { successCode } from '~/utils/constants'

export const state = () => ({
  isCallApi: false,
  categories: [],
})

export const actions = {
  async get({ commit }, params = null) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } = await this.$repositories.category.get(params)

      if (+status === successCode.OK && data) {
        commit('GET_CATEGORIES', data)
      }
    } catch (error) {
      commit('GET_CATEGORIES', [])
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },
}

export const mutations = {
  SET_IS_CALL_API(state, isCallApi) {
    state.isCallApi = isCallApi
  },
  GET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}
