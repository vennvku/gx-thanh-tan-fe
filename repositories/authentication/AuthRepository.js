import env from '~/configs/env'

const resource = 'admin'
export default ($axios) => ({
  login(payload) {
    return $axios.post(`${env.apiUrl}/${resource}/login`, payload)
  },
  logout() {
    return $axios.post(`${env.apiUrl}/${resource}/logout`)
  },
  getProfile() {
    return $axios.get(`${env.apiUrl}/${resource}/profile`)
  },
})
