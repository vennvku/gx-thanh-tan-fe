import { errorCode, errorMessage, SCREEN_PATH } from '~/utils/constants'
import storage from '~/utils/helpers/storage'
import { errorToast } from '~/utils/helpers/toast'

export default (context) => {
  const { $axios, app, error } = context

  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${storage.getAuth()}`
    config.headers.common.Accept = 'application/json'
  })

  $axios.onResponse(() => {})

  $axios.onError((err) => {
    if (err.response) {
      const { status, data } = err.response
      switch (+status) {
        case errorCode.BAD_REQUEST:
          return Promise.reject(err)
        case errorCode.UNAUTHORIZED:
          if (storage.getAuth()) storage.deleteAuth()

          app.router.push({ name: SCREEN_PATH.SIGN_IN })
          errorToast('forceLogout', app.i18n)
          break
        case errorCode.PAGE_NOT_FOUND:
          if (data && data.error !== errorMessage.THE_PORTAL_CODE_NOT_FOUND)
            return error({ statusCode: 404 })
      }
    }
  })
}
