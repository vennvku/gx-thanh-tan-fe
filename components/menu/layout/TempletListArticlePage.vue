<template>
  <div class="list-article">
    <ul>
      <li
        v-for="(listArticle, indexListArticle) in listArticles"
        :key="indexListArticle"
        class="item-article"
      >
        <div class="thumb-art-article">
          <NuxtLink to="">
            <b-img :src="listArticle.photo"></b-img>
          </NuxtLink>
        </div>
        <div class="title-article">
          <h4>
            <NuxtLink to="">
              {{ listArticle.translations[$i18n.locale].title }}
            </NuxtLink>
          </h4>

          <p class="des-article">
            {{ listArticle.translations[$i18n.locale].description }}
          </p>
        </div>
      </li>
    </ul>

    <div class="pagination-bottom">
      <div class="pagination-admin">
        <b-pagination
          v-if="rows > perPage"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          class="m-0 pagination-table"
          first-number
          last-number
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TempletListNewsPage',
  data() {
    return {
      listArticles: [],
      perPage: 5,
      rows: null,
      currentPage: 1,
    }
  },
  async fetch() {
    await this.$store.dispatch('article/article/getListArticles', {
      url: this.$route.params.slug,
    })
  },
  computed: {
    ...mapState({
      articles: (state) => state.article.article.articles,
    }),
  },
  watch: {
    articles: {
      handler(data) {
        if (data && data.result.length > 0) {
          this.listArticles = data.result
          this.rows = data.total
          this.currentPage = data.current_page
        } else {
          this.listArticles = []
          this.rows = null
          this.currentPage = 1
        }
      },
    },
    currentPage: {
      async handler() {
        await this.getListArticle()
      },
    },
  },
  methods: {
    async getListArticle() {
      await this.$store.dispatch('article/article/getListArticles', {
        url: this.$route.params.slug,
        page: this.currentPage,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/templet/templet-list-article-page';
</style>
