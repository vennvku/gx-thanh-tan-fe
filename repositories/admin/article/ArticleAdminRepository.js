import env from '~/configs/env'
const resource = 'admin/articles'

export default ($axios) => ({
  getArticles(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },
  create(payload) {
    return $axios.post(`${env.apiUrl}/${resource}`, payload)
  },
  updateArticleManagement(id, payload) {
    return $axios.post(
      `${env.apiUrl}/${resource}/update-article-management/${id}`,
      payload
    )
  },
  updateArticlesAction(payload) {
    return $axios.post(
      `${env.apiUrl}/${resource}/update-articles-action`,
      payload
    )
  },
  showDetail(id) {
    return $axios.get(`${env.apiUrl}/${resource}/${id}`)
  },
  update(id, payload) {
    return $axios.put(`${env.apiUrl}/${resource}/${id}`, payload)
  },
})
