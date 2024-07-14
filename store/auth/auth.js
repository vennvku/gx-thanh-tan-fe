import {
  SCREEN_PATH,
  errorCode,
  successCode,
  errorMessage,
} from '~/utils/constants'
import storage from '~/utils/helpers/storage'
import { errorToast, successToast } from '~/utils/helpers/toast'

export const state = () => ({
  isCallApi: false,
  authProfile: {},
})

export const actions = {
  async login({ commit }, payload) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } = await this.$repositories.auth.login(payload)

      if (+status === successCode.OK && data) {
        storage.saveAuth(data.access_token)
        await this.$router.push({ path: SCREEN_PATH.DASHBOARD })
      }
    } catch (error) {
      const { status } = error.response

      if (+status === errorCode.UNPROCESSABLE_ENTITY) {
        const { data } = error.response
        if (
          data.error &&
          String(data.error) === errorMessage.INVALID_EMAIL_PASSWORD
        )
          errorToast('loginFailed', this.app.i18n)
      }
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async logout({ commit }) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status } = await this.$repositories.auth.logout()
      if (+status === successCode.OK) {
        if (storage.getAuth()) storage.deleteAuth()
        await this.$router.push({ name: SCREEN_PATH.SIGN_IN })
        successToast('logout', this.app.i18n)
      }
    } catch (error) {
      if (storage.getAuth()) storage.deleteAuth()
      await this.$router.push({ name: SCREEN_PATH.SIGN_IN })
    } finally {
      commit('SET_IS_CALL_API', false)
    }
  },

  async checkAuth() {
    return await this.$repositories.auth.getProfile()
  },

  async getAuthProfile({ commit }) {
    commit('SET_IS_CALL_API', true)
    try {
      const { status, data } = await this.$repositories.auth.getProfile()

      if (+status === successCode.OK && data) {
        commit('GET_AUTH_PROFILE', data)
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
  GET_AUTH_PROFILE(state, authProfile) {
    state.authProfile = authProfile
  },
}
