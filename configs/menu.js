import { SCREEN_PATH } from '~/utils/constants'

export default [
  {
    title: 'parish',
    subMenus: [
      {
        title: 'parishHistory',
        router: SCREEN_PATH.MENU.PARISH.PARISH_HISTORY,
      },
      {
        title: 'pastor',
        router: SCREEN_PATH.MENU.PARISH.PASTOR,
      },
      {
        title: 'officials',
        router: SCREEN_PATH.MENU.PARISH.OFFICIALS,
      },
    ],
  },
  {
    title: 'news',
    subMenus: [
      {
        title: 'parishNews',
        router: SCREEN_PATH.MENU.NEWS.PARISH_NEWS,
      },
      {
        title: 'diocesanNews',
        router: SCREEN_PATH.MENU.NEWS.DIOCESAN_NEWS,
      },
      {
        title: 'newsVietnameseChurch',
        router: SCREEN_PATH.MENU.NEWS.NEWS_OF_THE_VIETNAMESE_CHURCH,
      },
      {
        title: 'worldwideChurchNews',
        router: SCREEN_PATH.MENU.NEWS.WORLDWIDE_CHURCH_NEWS,
      },
    ],
  },
  {
    title: 'wordOfGod',
    router: SCREEN_PATH.MENU.WORD_OF_GOD,
  },
  {
    title: 'associations',
    subMenus: [
      {
        title: 'parishCaritas',
        router: SCREEN_PATH.MENU.ASSOCIATIONS.PARISH_CARITAS,
      },
    ],
  },
  {
    title: 'reflections',
    router: SCREEN_PATH.MENU.REFLECTIONS,
  },
  {
    title: 'documents',
    router: SCREEN_PATH.MENU.DOCUMENTS,
  },
  {
    title: 'contact',
    router: SCREEN_PATH.MENU.CONTACT,
  },
]
