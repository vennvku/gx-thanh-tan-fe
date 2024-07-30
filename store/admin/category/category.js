import Vue from 'vue'
import { successCode, errorCode, regex, TIME_LOADING } from '~/utils/constants'
import { successToast, errorToast } from '~/utils/helpers/toast'

export const state = () => ({
  isCallApi: false,
  categories: [],
  category: {},
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
        await this.$repositories.categoryAdmin.getCategories(params)

      if (+status === successCode.OK && data) {
        commit('GET_CATEGORIES', data)
      }
    } catch (error) {
      commit('GET_CATEGORIES', [])
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

  async getCategorie({ commit }, params = null) {
    commit('SET_IS_CALL_API', true)

    try {
      const { status, data } =
        await this.$repositories.categoryAdmin.getCategories(params)

      if (+status === successCode.OK && data) {
        commit('GET_CATEGORIES', data)
      }
    } catch (error) {
      commit('GET_CATEGORIES', [])
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async updateCategoryManagement({ commit }, { id, payload }) {
    commit('SET_IS_CALL_API', true)
    const startTime = performance.now()
    setTimeout(() => {
      Vue.prototype.$bus.$emit('toggle-loading')
    }, 10)

    try {
      const { status, data } = await this.$repositories.categoryAdmin.update(
        id,
        payload
      )

      if (+status === successCode.OK && data) {
        commit('UPDATE_CATEGORY_WITH_DATA', data)
        successToast('updatedCategory', this.app.i18n)
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

  async moveUpCategory({ commit }, payload) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.categoryAdmin.moveUpCategory(payload)

      if (+status === successCode.OK && data) {
        Vue.prototype.$bus.$emit('move-category-done')
        successToast('updatedCategory', this.app.i18n)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async moveBottomCategory({ commit }, payload) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } =
        await this.$repositories.categoryAdmin.moveBottomCategory(payload)

      if (+status === successCode.OK && data) {
        Vue.prototype.$bus.$emit('move-category-done')
        successToast('updatedCategory', this.app.i18n)
      }
    } catch (error) {
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async create({ commit }, payload) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status } = await this.$repositories.categoryAdmin.create(payload)

      if (+status === successCode.CREATED) {
        await this.$router.go(-1)
        successToast('createdCategory', this.app.i18n)
      }
    } catch (error) {
      const { status } = error.response

      if (+status === errorCode.UNPROCESSABLE_ENTITY) {
        const { data } = error.response

        if (data.error)
          errorToast(regex.snakeToCamel(String(data.error)), this.app.i18n)
      }
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async delete({ commit, dispatch }, id) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status } = await this.$repositories.categoryAdmin.delete(id)

      if (+status === successCode.OK) {
        dispatch('admin/category/category/getCategorie', {}, { root: true })
        Vue.prototype.$bus.$emit('delete-category-done')
        successToast('deletedCategory', this.app.i18n)
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
  GET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  GET_CATEGORY(state, category) {
    state.category = category
  },
  UPDATE_CATEGORY_WITH_DATA(state, updatedCategory) {
    const index = state.categories.findIndex(
      (category) => category.id === updatedCategory.id
    )
    if (index !== -1) {
      state.categories.splice(index, 1, updatedCategory)
    }
  },
}
