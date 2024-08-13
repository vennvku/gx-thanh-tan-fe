import env from '~/configs/env'

const resource = 'articles'

export default ($axios) => ({
  getFeaturedLatestNews() {
    return $axios.get(`${env.apiUrl}/get-featured-latest-news`)
  },
  showDetailArticle(slug) {
    return $axios.get(`${env.apiUrl}/${resource}/${slug}`)
  },
  showDetailFixedPage(slug) {
    return $axios.get(`${env.apiUrl}/show-detail-fixed-page/${slug}`)
  },
  getTopFeaturedArticle(params) {
    return $axios.get(`${env.apiUrl}/get-top-featured-article`, { params })
  },
  getListArticles(params) {
    return $axios.get(`${env.apiUrl}/get-list-articles`, { params })
  },
  getLatestArticles() {
    return $axios.get(`${env.apiUrl}/get-latest-articles`)
  },
})
