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
    page: 'articleManagementCreate',
    route: SCREEN_PATH.ADMIN.CONTENT.ARTICLE_MANAGEMENT.CREATE,
  },
  {
    page: 'articleManagementEdit',
    route: SCREEN_PATH.ADMIN.CONTENT.ARTICLE_MANAGEMENT.EDIT,
  },
  {
    page: 'categoryManagement',
    route: SCREEN_PATH.ADMIN.CONTENT.CATEGORY_MANAGEMENT.INDEX,
  },
  {
    page: 'categoryManagementCreate',
    route: SCREEN_PATH.ADMIN.CONTENT.CATEGORY_MANAGEMENT.CREATE,
  },
  {
    page: 'categoryManagementEdit',
    route: SCREEN_PATH.ADMIN.CONTENT.CATEGORY_MANAGEMENT.EDIT,
  },
  {
    page: 'fixedPageManagement',
    route: SCREEN_PATH.ADMIN.CONTENT.FIXED_PAGE_MANAGEMENT.INDEX,
  },
  {
    page: 'fixedPageManagementCreate',
    route: SCREEN_PATH.ADMIN.CONTENT.FIXED_PAGE_MANAGEMENT.CREATE,
  },
  {
    page: 'fixedPageManagementEdit',
    route: SCREEN_PATH.ADMIN.CONTENT.FIXED_PAGE_MANAGEMENT.EDIT,
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
