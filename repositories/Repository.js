import AuthRepository from '~/repositories/authentication/AuthRepository'
import ArticleRepository from '~/repositories/article/ArticleRepository'
import ArticleAdminRepository from '~/repositories/admin/article/ArticleAdminRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  article: ArticleRepository($axios),
  articleAdmin: ArticleAdminRepository($axios),
})
