import { SCREEN_PATH } from '~/utils/constants'

export default [
  {
    page: 'dashboard',
    route: SCREEN_PATH.ADMIN.DASHBOARD,
  },
  {
    page: 'articleManagement',
    route: SCREEN_PATH.ADMIN.CONTENT.ARTICLE_MANAGEMENT.INDEX,
  },
  {
    page: 'categoryManagement',
    route: SCREEN_PATH.ADMIN.CONTENT.CATEGORY_MANAGEMENT.INDEX,
  },
  {
    page: 'featuredArticleManagement',
    route: SCREEN_PATH.ADMIN.CONTENT.FEATURED_ARTICLE_MANAGEMENT.INDEX,
  },
  {
    page: 'setting',
    route: SCREEN_PATH.ADMIN.SETTING,
  },
  {
    page: 'help',
    route: SCREEN_PATH.ADMIN.HELP,
  },
]
