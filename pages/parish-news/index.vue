<template>
  <div>
    <div class="chain-navs">
      <ul>
        <li>
          <NuxtLink :to="SCREEN_PATH.TOP">
            <span>{{ $t('menu.home') }}</span>
          </NuxtLink>
        </li>
        <li class="double-right-icon">
          <b-img :src="ICON.doubleRight"></b-img>
        </li>
        <li>{{ $t('menu.news.heading') }}</li>
        <li class="double-right-icon">
          <b-img :src="ICON.doubleRight"></b-img>
        </li>
        <li class="active">
          <NuxtLink to="/">
            <span>{{ $t('menu.news.subMenus.parishNews') }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="wrapper-caption">
      <h4 class="caption">{{ $t('menu.news.subMenus.parishNews') }}</h4>
    </div>
    <templet-section-top-page />
    <div class="section-container">
      <div class="row">
        <div class="col-content pad-450">
          <templet-list-article-page />
        </div>
        <div class="col-content fit-450">
          <templet-box-category />
          <templet-box-category />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TempletBoxCategory from '~/components/pages/TempletBoxCategory'
import TempletSectionTopPage from '~/components/pages/TempletSectionTopPage'
import TempletListArticlePage from '~/components/pages/TempletListArticlePage'
import { SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'ParishHistory',
  components: {
    TempletSectionTopPage,
    TempletListArticlePage,
    TempletBoxCategory,
  },
  data() {
    return {
      SCREEN_PATH,
      ICON,
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/templet-page';
</style>
