import { successCode } from '~/utils/constants'

export const state = () => ({
  isCallApi: false,
  featuredLatestNews: {},
  article: {},
})

export const actions = {
  async getFeaturedLatestNews({ commit }) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.article.getFeaturedLatestNews()

      if (+status === successCode.OK && data) {
        commit('GET_FEATURED_LATEST_NEWS', data)
      }
    } catch (error) {
      commit('GET_FEATURED_LATEST_NEWS', {})
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async showDetailArticle({ commit }, slug) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.article.showDetailArticle(slug)

      if (+status === successCode.OK && data) {
        commit('GET_ARTICLE', data)
      }
    } catch (error) {
      commit('GET_ARTICLE', null)
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async showDetailFixedPage({ commit }, idCategory) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.article.showDetailFixedPage(idCategory)

      if (+status === successCode.OK && data) {
        commit('GET_ARTICLE', data)
      }
    } catch (error) {
      commit('GET_ARTICLE', null)
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },
}

export const mutations = {
  SET_IS_CALL_API(state, isCallApi) {
    state.isCallApi = isCallApi
  },
  GET_FEATURED_LATEST_NEWS(state, featuredLatestNews) {
    state.featuredLatestNews = featuredLatestNews
  },
  GET_ARTICLE(state, article) {
    state.article = article
  },
}
