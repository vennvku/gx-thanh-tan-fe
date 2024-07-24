import env from '~/configs/env'
const resource = 'categories'

export default ($axios) => ({
  get(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },
})
