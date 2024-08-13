import env from '~/configs/env'
const resource = 'categories'

export default ($axios) => ({
  get(params) {
    return $axios.get(`${env.apiUrl}/${resource}`, { params })
  },
  getTypeCategory(payload) {
    return $axios.post(`${env.apiUrl}/get-type-category`, payload)
  },
  getChainCategory(slug) {
    return $axios.get(`${env.apiUrl}/get-chain-category/${slug}`)
  },
  showDetail(url) {
    return $axios.get(`${env.apiUrl}/${resource}/${url}`)
  },
})
