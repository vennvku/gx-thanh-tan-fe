import env from '~/configs/env'
const resource = 'categories'

export default ($axios) => ({
  get(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },

  getTypeCategory(payload) {
    return $axios.post(`${env.apiUrl}/get-type-category`, payload)
  },
})
