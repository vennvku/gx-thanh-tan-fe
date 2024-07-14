const tokenAuth = 'accessToken'
const nuxtMode = 'nuxt-color-mode'

const saveAuth = (token) => {
  if (token) {
    window.localStorage.setItem(tokenAuth, token)
  }
}

const deleteAuth = () => {
  window.localStorage.removeItem(tokenAuth)
}

const getAuth = () => {
  return window.localStorage.getItem(tokenAuth)
    ? localStorage.getItem(tokenAuth)
    : ''
}

const getMode = () => {
  return window.localStorage.getItem(nuxtMode)
    ? localStorage.getItem(nuxtMode) === 'dark'
    : false
}

export default {
  getAuth,
  saveAuth,
  deleteAuth,
  getMode,
}
