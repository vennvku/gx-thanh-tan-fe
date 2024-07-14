import storage from '~/utils/helpers/storage'
import { SCREEN_PATH, successCode } from '~/utils/constants'

export default async function ({ store, redirect }) {
  if (storage.getAuth()) {
    try {
      const { status } = await store.dispatch('auth/auth/checkAuth')
      if (+status === successCode.OK) await redirect('')
    } catch (error) {
      storage.deleteAuth()
      await redirect({
        name: SCREEN_PATH.SIGN_IN,
      })
    }
  } else await redirect({ name: SCREEN_PATH.SIGN_IN })
}
