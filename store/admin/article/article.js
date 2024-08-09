import Vue from 'vue'
import { successCode, TIME_LOADING } from '~/utils/constants'
import { successToast } from '~/utils/helpers/toast'

export const state = () => ({
  isCallApi: false,
  articles: [],
  article: {},
})

export const actions = {
  async getList({ commit }, params = null) {
    commit('SET_IS_CALL_API', true)
    const startTime = performance.now()

    setTimeout(() => {
      Vue.prototype.$bus.$emit('toggle-loading')
    }, 10)

    try {
      const { status, data } =
        await this.$repositories.articleAdmin.getArticles(params)

      if (+status === successCode.OK && data) {
        commit('GET_ARTICLES', data)
      }
    } catch (error) {
      commit('GET_ARTICLES', [])
    } finally {
      commit('SET_IS_CALL_API', false)

      const executeTime = performance.now() - startTime

      if (executeTime < TIME_LOADING) {
        setTimeout(() => {
          Vue.prototype.$bus.$emit('toggle-loading')
        }, TIME_LOADING - executeTime)
      } else {
        Vue.prototype.$bus.$emit('toggle-loading')
      }
    }
  },

  async getArticles({ commit }, params = null) {
    commit('SET_IS_CALL_API', true)

    try {
      const { status, data } =
        await this.$repositories.articleAdmin.getArticles(params)

      if (+status === successCode.OK && data) {
        commit('GET_ARTICLES', data)
      }
    } catch (error) {
      commit('GET_ARTICLES', [])
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async showDetail({ commit }, id) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } = await this.$repositories.articleAdmin.showDetail(
        id
      )

      if (+status === successCode.OK && data) {
        commit('GET_ARTICLE', data)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async create({ commit }, payload) {
    commit('SET_IS_CALL_API', true)

    try {
      const { status, data } = await this.$repositories.articleAdmin.create(
        payload
      )

      console.log(data)

      if (+status === successCode.CREATED) {
        await this.$router.go(-1)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async updateArticleManagement({ commit }, { id, payload }) {
    commit('SET_IS_CALL_API', true)
    const startTime = performance.now()
    setTimeout(() => {
      Vue.prototype.$bus.$emit('toggle-loading')
    }, 10)

    try {
      const { status, data } =
        await this.$repositories.articleAdmin.updateArticleManagement(
          id,
          payload
        )

      if (+status === successCode.OK && data) {
        commit('UPDATE_ARTICLE_WITH_DATA', data)
        successToast('updatedArticle', this.app.i18n)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)

      const executeTime = performance.now() - startTime
      if (executeTime < TIME_LOADING) {
        setTimeout(() => {
          Vue.prototype.$bus.$emit('toggle-loading')
        }, TIME_LOADING - executeTime)
      } else {
        Vue.prototype.$bus.$emit('toggle-loading')
      }
    }
  },

  async updateArticlesAction({ commit, dispatch }, payload) {
    commit('SET_IS_CALL_API', true)

    try {
      const { status, data } =
        await this.$repositories.articleAdmin.updateArticlesAction(payload)

      if (+status === successCode.OK && data) {
        dispatch('admin/article/article/getArticles', {}, { root: true })
        Vue.prototype.$bus.$emit('update-article-action-done')
        successToast('updatedArticle', this.app.i18n)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async update({ commit }, { id, payload }) {
    commit('SET_IS_CALL_API', true)

    try {
      const { status, data } = await this.$repositories.articleAdmin.update(
        id,
        payload
      )

      if (+status === successCode.OK && data) {
        await this.$router.go(-1)
        successToast('updatedArticle', this.app.i18n)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async createFixedPage({ commit }, payload) {
    commit('SET_IS_CALL_API', true)

    try {
      const { status } = await this.$repositories.articleAdmin.createFixedPage(
        payload
      )
      if (+status === successCode.CREATED) {
        await this.$router.go(-1)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },
}

export const mutations = {
  SET_IS_CALL_API(state, isCallApi) {
    state.isCallApi = isCallApi
  },
  GET_ARTICLES(state, articles) {
    state.articles = articles
  },
  GET_ARTICLE(state, article) {
    state.article = article
  },
  UPDATE_ARTICLE_WITH_DATA(state, updatedArticle) {
    const index = state.articles.result.findIndex(
      (article) => article.id === updatedArticle.id
    )
    if (index !== -1) {
      state.articles.result.splice(index, 1, updatedArticle)
    }
  },
}
