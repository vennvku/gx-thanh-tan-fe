import { successCode } from '~/utils/constants'

export const state = () => ({
  isCallApi: false,
  categories: [],
  category: null,
  type: null,
  chainCategory: {},
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

  async getTypeCategory({ commit }, params) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.category.getTypeCategory(params)

      if (+status === successCode.OK && data) {
        commit('GET_TYPE', data)
      }
    } catch (error) {
      commit('GET_TYPE', null)
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async getChainCategory({ commit }, slug) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.category.getChainCategory(slug)

      if (+status === successCode.OK && data) {
        commit('GET_CHAIN_CATEGORY', data)
      }
    } catch (error) {
      commit('GET_CHAIN_CATEGORY', {})
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async showDetail({ commit }, url) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } = await this.$repositories.category.showDetail(url)

      if (+status === successCode.OK && data) {
        commit('GET_CATEGORY', data)
      }
    } catch (error) {
      commit('GET_CATEGORY', null)
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
  GET_CATEGORY(state, category) {
    state.category = category
  },
  GET_TYPE(state, type) {
    state.type = type
  },
  GET_CHAIN_CATEGORY(state, chainCategory) {
    state.chainCategory = chainCategory
  },
}
