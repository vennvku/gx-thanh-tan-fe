import { successCode } from '~/utils/constants'

export const state = () => ({
  isCallApi: false,
  featuredLatestNews: {},
  article: {},
  articles: [],
  topFeaturedArticle: [],
  latestArticles: [],
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

  async showDetailFixedPage({ commit }, slug) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.article.showDetailFixedPage(slug)

      if (+status === successCode.OK && data) {
        commit('GET_ARTICLE', data)
      }
    } catch (error) {
      commit('GET_ARTICLE', null)
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async getTopFeaturedArticle({ commit }, slug) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.article.getTopFeaturedArticle(slug)

      if (+status === successCode.OK && data) {
        commit('GET_TOP_FEATURED_ARTICLE', data)
      }
    } catch (error) {
      commit('GET_TOP_FEATURED_ARTICLE', [])
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async getListArticles({ commit }, params = null) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } = await this.$repositories.article.getListArticles(
        params
      )

      if (+status === successCode.OK && data) {
        commit('GET_ARTICLES', data)
      }
    } catch (error) {
      commit('GET_ARTICLES', [])
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async getLatestArticles({ commit }) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.article.getLatestArticles()

      if (+status === successCode.OK && data) {
        commit('GET_LATEST_ARTICLES', data)
      }
    } catch (error) {
      commit('GET_LATEST_ARTICLES', [])
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
  GET_ARTICLES(state, articles) {
    state.articles = articles
  },
  GET_TOP_FEATURED_ARTICLE(state, topFeaturedArticle) {
    state.topFeaturedArticle = topFeaturedArticle
  },
  GET_LATEST_ARTICLES(state, latestArticles) {
    state.latestArticles = latestArticles
  },
}
