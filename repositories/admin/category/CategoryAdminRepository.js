import env from '~/configs/env'
const resource = 'admin/categories'

export default ($axios) => ({
  getCategories(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },

  update(id, payload) {
    return $axios.put(`${env.apiUrl}/${resource}/${id}`, payload)
  },

  moveUpCategory(payload) {
    return $axios.post(`${env.apiUrl}/${resource}/move-up-category`, payload)
  },

  moveBottomCategory(payload) {
    return $axios.post(
      `${env.apiUrl}/${resource}/move-bottom-category`,
      payload
    )
  },

  create(payload) {
    return $axios.post(`${env.apiUrl}/${resource}`, payload)
  },
})
