<template>
  <div class="page-layout">
    <div class="row">
      <div class="col-content pad-320">
        <div class="main-content">
          <div v-if="featuredArticle" class="wrapper-top-article">
            <div class="top-article">
              <div class="thumb-art-top-article">
                <NuxtLink to="">
                  <b-img :src="featuredArticle.photo"></b-img>
                </NuxtLink>
              </div>
              <div class="title-top-article">
                <h4>
                  <NuxtLink to="">
                    {{ featuredArticle.translations[$i18n.locale].title }}
                  </NuxtLink>
                </h4>
                <p class="des-top-article">
                  {{ featuredArticle.translations[$i18n.locale].description }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="listArticles.length > 0" class="wrapper-bottom-article">
            <div
              v-for="(listArticle, indexListArticle) in listArticles"
              :key="indexListArticle"
              class="column-bottom-article"
            >
              <div class="thumb-art-bottom-article">
                <NuxtLink to="">
                  <b-img :src="listArticle.photo"></b-img>
                </NuxtLink>
              </div>
              <h4 class="title-bottom-article">
                <NuxtLink to="">
                  {{ listArticle.translations[$i18n.locale].title }}
                </NuxtLink>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-content fit-320">
        <div class="side-content">
          <h3 class="top-latest-news">Mới nhất</h3>
          <ul class="list-latest-news">
            <li
              v-for="(latestArticle, indexLatestArticle) in latestArticlesData"
              :key="indexLatestArticle"
              class="item-latest-news"
            >
              <h5 class="title-latest-news">
                <NuxtLink to="">
                  {{ latestArticle.translations[$i18n.locale].title }}
                </NuxtLink>
              </h5>
              <div class="thumb-art-latest-news">
                <NuxtLink to="">
                  <b-img :src="latestArticle.photo"></b-img>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TempletSectionTopPage',
  data() {
    return {
      featuredArticle: null,
      listArticles: [],
      latestArticlesData: [],
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'article/article/getTopFeaturedArticle',
      this.$route.params.slug
    )

    await this.$store.dispatch('article/article/getLatestArticles')
  },
  computed: {
    ...mapState({
      topFeaturedArticle: (state) => state.article.article.topFeaturedArticle,
      latestArticles: (state) => state.article.article.latestArticles,
    }),
  },
  watch: {
    topFeaturedArticle: {
      handler(data) {
        if (data && data.length > 0) {
          this.featuredArticle = data[0]
          this.listArticles = data.slice(1, 4)
        } else {
          this.featuredArticle = null
          this.listArticles = []
        }
      },
    },

    latestArticles: {
      handler(data) {
        if (data && data.length > 0) {
          this.latestArticlesData = data
        } else {
          this.latestArticlesData = []
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/templet/templet-section-top-page';
</style>
