import AuthRepository from '~/repositories/authentication/AuthRepository'
import ArticleRepository from '~/repositories/article/ArticleRepository'
import CategoryRepository from '~/repositories/category/CategoryRepository'
import ArticleAdminRepository from '~/repositories/admin/article/ArticleAdminRepository'
import CategoryAdminRepository from '~/repositories/admin/category/CategoryAdminRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  article: ArticleRepository($axios),
  category: CategoryRepository($axios),
  articleAdmin: ArticleAdminRepository($axios),
  categoryAdmin: CategoryAdminRepository($axios),
})
