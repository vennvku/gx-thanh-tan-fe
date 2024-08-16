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
        <li v-for="(chain, key) in chainData" :key="key">
          <span v-if="chain.isFixedPage === 0 && chain.isParent === false">
            <NuxtLink :to="{ path: '/' + chain.url }">
              <span>{{ chain.name[$i18n.locale] }}</span>
            </NuxtLink>
          </span>
          <span v-else>{{ chain.name[$i18n.locale] }}</span>

          <span v-if="!isLastItem(key)"
            ><b-img :src="ICON.doubleRight"></b-img
          ></span>
        </li>
      </ul>
    </div>

    <h1 v-if="isCallApi">Loading...</h1>

    <div v-else class="detail-content">
      <div class="lead-title">
        {{ article?.translations[$i18n.locale].title }}
      </div>

      <div class="date">{{ article?.created_at }}</div>

      <div class="content-detail-page">
        <p v-html="article?.translations[$i18n.locale].content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'DetailArticle',
  data() {
    return {
      SCREEN_PATH,
      ICON,
      chainData: [],
      currentPath: null,
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'article/article/showDetailArticle',
      this.$route.params.detail
    )

    await this.$store.dispatch(
      'category/category/getChainCategory',
      this.$route.params.category
    )
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.article.article.isCallApi,
      article: (state) => state.article.article.article,
      chainCategory: (state) => state.category.category.chainCategory,
    }),
  },
  watch: {
    chainCategory: {
      handler(data) {
        if (data) {
          this.chainData = data.chain

          if (data.chain.length > 0) {
            this.$store.dispatch(
              'common/path/setCurrentPath',
              data.chain[0].url
            )
          }
        } else {
          this.chainData = []
        }
      },
    },
  },
  methods: {
    isLastItem(index) {
      return index === this.chainData.length - 1
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/detail-page';
</style>
