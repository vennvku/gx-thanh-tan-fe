import env from '~/configs/env'
const resource = 'admin/articles'

export default ($axios) => ({
  getArticles(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },
  create(payload) {
    return $axios.post(`${env.apiUrl}/${resource}`, payload)
  },
})
