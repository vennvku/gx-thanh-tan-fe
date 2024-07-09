import ArticleRepository from '~/repositories/article/ArticleRepository'

export default ($axios) => ({
  article: ArticleRepository($axios),
})
