import env from '~/configs/env'
const resource = 'admin/categories'

export default ($axios) => ({
  getCategories(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },
  update(id, payload) {
    return $axios.put(`${env.apiUrl}/${resource}/${id}`, payload)
  },
  updateCategoryManagement(id, payload) {
    return $axios.post(
      `${env.apiUrl}/admin/update-category-management/${id}`,
      payload
    )
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
  showDetail(id) {
    return $axios.get(`${env.apiUrl}/${resource}/${id}`)
  },
  create(payload) {
    return $axios.post(`${env.apiUrl}/${resource}`, payload)
  },
  delete(id) {
    return $axios.delete(`${env.apiUrl}/${resource}/${id}`)
  },
  getFixedPage(params) {
    return $axios.get(`${env.apiUrl}/admin/get-categories-fixed`, { params })
  },
})
