import { SCREEN_PATH } from '~/utils/constants'

export default [
  {
    title: 'dashboard',
    icon: 'DashboardIcon',
    router: SCREEN_PATH.ADMIN.DASHBOARD,
  },
  {
    title: 'content',
    group: 'contentGroup',
    icon: 'ContentIcon',
    isOpen: true,
    children: [
      {
        title: 'articleManagement',
        router: SCREEN_PATH.ADMIN.CONTENT.ARTICLE_MANAGEMENT.INDEX,
      },
      {
        title: 'categoryManagement',
        router: SCREEN_PATH.ADMIN.CONTENT.CATEGORY_MANAGEMENT.INDEX,
      },
      {
        title: 'featuredArticleManagement',
        router: SCREEN_PATH.ADMIN.CONTENT.FEATURED_ARTICLE_MANAGEMENT.INDEX,
      },
    ],
  },
  {
    title: 'setting',
    icon: 'SettingIcon',
    router: SCREEN_PATH.ADMIN.SETTING,
  },
  {
    title: 'help',
    icon: 'ExclamationIcon',
    router: SCREEN_PATH.ADMIN.HELP,
  },
]
