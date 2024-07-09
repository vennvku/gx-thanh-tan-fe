import env from '~/configs/env'

const resource = 'articles'

export default ($axios) => ({
  getFeaturedLatestNews() {
    return $axios.get(`${env.apiUrl}/${resource}/featured-latest-news`)
  },
  showDetailArticle(slug) {
    return $axios.get(`${env.apiUrl}/${resource}/${slug}`)
  },
})
