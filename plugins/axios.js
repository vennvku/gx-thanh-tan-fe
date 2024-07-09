import { errorCode, errorMessage } from '~/utils/constants'

export default (context) => {
  const { $axios, error } = context

  $axios.onRequest(() => {})

  $axios.onResponse(() => {})

  $axios.onError((err) => {
    if (err.response) {
      const { status, data } = err.response
      switch (+status) {
        case errorCode.BAD_REQUEST:
          return Promise.reject(err)
        case errorCode.PAGE_NOT_FOUND:
          if (data && data.error !== errorMessage.THE_PORTAL_CODE_NOT_FOUND)
            return error({ statusCode: 404 })
      }
    }
  })
}
