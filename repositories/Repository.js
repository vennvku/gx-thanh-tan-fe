import AuthRepository from '~/repositories/authentication/AuthRepository'
import ArticleRepository from '~/repositories/article/ArticleRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  article: ArticleRepository($axios),
})
