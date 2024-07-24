import AuthRepository from '~/repositories/authentication/AuthRepository'
import ArticleRepository from '~/repositories/article/ArticleRepository'
import ArticleAdminRepository from '~/repositories/admin/article/ArticleAdminRepository'
import CategoryRepository from '~/repositories/category/CategoryRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  article: ArticleRepository($axios),
  articleAdmin: ArticleAdminRepository($axios),
  category: CategoryRepository($axios),
})
