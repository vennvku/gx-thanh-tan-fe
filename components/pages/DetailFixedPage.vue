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
            <NuxtLink to="/">
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
      <div
        v-if="articleContentData"
        class="content-detail-page"
        v-html="articleContentData.translations[$i18n.locale].content"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'DetailFixedPage',
  data() {
    return {
      SCREEN_PATH,
      ICON,
      articleContentData: null,
      chainData: [],
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'article/article/showDetailFixedPage',
      this.$route.params.slug
    )
    await this.$store.dispatch(
      'category/category/getChainCategory',
      this.$route.params.slug
    )
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.article.article.isCallApi,
      article: (state) => state.article.article.article,
      chainCategory: (state) => state.category.category.chainCategory,
    }),
    firstSegment() {
      const path = this.$route.path
      const segments = path.split('/')
      return segments[1]
    },
  },
  watch: {
    article: {
      handler(data) {
        if (data) {
          this.articleContentData = data
        }
      },
    },
    chainCategory: {
      handler(data) {
        if (data) {
          this.chainData = data.chain
        } else {
          this.chainData = []
        }
      },
    },
  },
  mounted() {
    this.$store.dispatch('common/path/setCurrentPath', this.firstSegment)
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
