import env from '~/configs/env'
const resource = 'admin/articles'

export default ($axios) => ({
  getArticles(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },
  // showDetail(id) {
  //   return $axios.get(`${env.apiUrl}/${resource}/${id}`)
  // },
  // create(payload) {
  //   return $axios.post(`${env.apiUrl}/${resource}`, payload)
  // },
  // update(id, payload) {
  //   return $axios.put(`${env.apiUrl}/${resource}/${id}`, payload)
  // },
  // delete(id) {
  //   return $axios.delete(`${env.apiUrl}/${resource}/${id}`)
  // },
})
