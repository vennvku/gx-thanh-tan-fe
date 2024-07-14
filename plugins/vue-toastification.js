import Vue from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const filterBeforeCreate = (toast, toasts) => {
  if (
    toasts.filter((t) => t.content === toast.content && t.type === toast.type)
      .length !== 0
  ) {
    return false
  }

  return toast
}

const options = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 5000,
  showCloseButtonOnHover: true,
  filterBeforeCreate,
}

Vue.use(Toast, options)
