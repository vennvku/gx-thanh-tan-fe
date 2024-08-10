<template>
  <div class="cont-view">
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

    <h1 v-if="isCallApi">Loading...</h1>

    <div v-else class="detail-content">
      {{ article }}

      <!-- <div class="lead-title">
        {{ article.translations[$i18n.locale].title }}
      </div>

      <div class="date">{{ article.created_at }}</div>

      <div class="content-detail-page">
        <p>{{ article.translations[$i18n.locale].content }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'DetailPage',
  props: {
    idCategory: {
      type: Number,
      default: () => null,
    },
  },
  data() {
    return {
      SCREEN_PATH,
      ICON,
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'article/article/showDetailArticle',
      this.$route.params.slug
    )
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.article.article.isCallApi,
      article: (state) => state.article.article.article,
    }),
  },
  mounted() {
    this.$store.dispatch('common/path/setCurrentPath', 'news')
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/detail-page';
</style>
