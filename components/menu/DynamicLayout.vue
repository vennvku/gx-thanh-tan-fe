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
        <li
          v-for="(chain, key) in chainData"
          :key="key"
          :class="{ active: isLastItem(key) }"
        >
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
    <div v-if="categoryData" class="wrapper-caption">
      <h4 class="caption">{{ categoryData.name[$i18n.locale] }}</h4>
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
import { mapState } from 'vuex'
import TempletBoxCategory from '~/components/menu/layout/TempletBoxCategory'
import TempletSectionTopPage from '~/components/menu/layout/TempletSectionTopPage'
import TempletListArticlePage from '~/components/menu/layout/TempletListArticlePage'
import { SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'DynamicLayout',
  components: {
    TempletSectionTopPage,
    TempletListArticlePage,
    TempletBoxCategory,
  },
  data() {
    return {
      SCREEN_PATH,
      ICON,
      chainData: [],
      categoryData: null,
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'category/category/getChainCategory',
      this.$route.params.slug
    )
  },

  // head() {
  //   return {
  //     title: this.$t('page.parishNews'),
  //   }
  // },
  computed: {
    ...mapState({
      chainCategory: (state) => state.category.category.chainCategory,
    }),
  },
  watch: {
    chainCategory: {
      handler(data) {
        if (data) {
          this.chainData = data.chain
          this.categoryData = data.category
        } else {
          this.chainData = []
          this.categoryData = null
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
@import 'assets/scss/pages/templet-page';
</style>
