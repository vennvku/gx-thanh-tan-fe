import Vue from 'vue'
import { successCode, TIME_LOADING } from '~/utils/constants'
// import { successToast } from '~/utils/helpers/toast'

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

  //   async getTags({ commit }, params = null) {
  //     commit('SET_IS_CALL_API', true)

  //     try {
  //       const { status, data } = await this.$repositories.tag.getTags(params)

  //       if (+status === successCode.OK && data) {
  //         commit('GET_TAGS', data)
  //       }
  //     } catch (error) {
  //       commit('GET_TAGS', [])
  //     } finally {
  //       commit('SET_IS_CALL_API', false)
  //     }
  //   },

  //   async showDetail({ commit }, id) {
  //     commit('SET_IS_CALL_API', true)
  //     try {
  //       const { status, data } = await this.$repositories.tag.showDetail(id)

  //       if (+status === successCode.OK && data) {
  //         commit('GET_TAG', data)
  //       }
  //     } catch (error) {
  //     } finally {
  //       commit('SET_IS_CALL_API', false)
  //     }
  //   },

  //   async create({ commit }, payload) {
  //     commit('SET_IS_CALL_API', true)
  //     try {
  //       const { status } = await this.$repositories.tag.create(payload)

  //       if (+status === successCode.CREATED) {
  //         await this.$router.go(-1)
  //       }
  //     } catch (error) {
  //     } finally {
  //       commit('SET_IS_CALL_API', false)
  //     }
  //   },

  //   async update({ commit }, { id, payload }) {
  //     commit('SET_IS_CALL_API', true)
  //     try {
  //       const { status, data } = await this.$repositories.tag.update(id, payload)

  //       if (+status === successCode.OK && data) {
  //         await this.$router.go(-1)
  //         successToast('updatedTag', this.app.i18n)
  //       }
  //     } catch (error) {
  //     } finally {
  //       commit('SET_IS_CALL_API', false)
  //     }
  //   },

  //   async delete({ commit, dispatch }, id) {
  //     commit('SET_IS_CALL_API', true)
  //     try {
  //       const { status } = await this.$repositories.tag.delete(id)

  //       if (+status === successCode.OK) {
  //         dispatch('tag/tag/getTags', {}, { root: true })
  //         Vue.prototype.$bus.$emit('delete-tag-done')
  //         successToast('deletedTag', this.app.i18n)
  //       }
  //     } catch (error) {
  //     } finally {
  //       commit('SET_IS_CALL_API', false)
  //     }
  //   },
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
}
