import Vue from 'vue'

export const successToast = function (success, i18n) {
  Vue.$toast.success(i18n.t(`success.${success}`))
}

export const warningToast = function (warning, i18n) {
  Vue.$toast.warning(i18n.t(`warning.${warning}`))
}

export const errorToast = function (error, i18n, params = null) {
  Vue.$toast.error(i18n.t(`error.serverError.${error}`, params))
}
