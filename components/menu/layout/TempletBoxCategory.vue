<template>
  <div class="box-category">
    <div v-if="categoryData" class="wrapper-caption-box-category">
      <h4 class="caption-box-category">
        {{ categoryData.name[$i18n.locale] }}
      </h4>
    </div>

    <div class="content-box-category">
      <div class="left-box-category">
        <div v-if="featuredArticle" class="content-left-box-category">
          <div class="thumb-art-box-category">
            <NuxtLink to="">
              <b-img :src="featuredArticle.photo"></b-img>
            </NuxtLink>
          </div>
          <div class="title-box-category">
            <h4>
              <NuxtLink to="">
                {{ featuredArticle.translations[$i18n.locale].title }}
              </NuxtLink>
            </h4>

            <p class="des-box-category">
              {{ featuredArticle.translations[$i18n.locale].description }}
            </p>
          </div>
        </div>
      </div>

      <div class="right-box-category">
        <div class="list-box-category">
          <ul>
            <li
              v-for="(listArticle, indexListArticle) in listArticles"
              :key="indexListArticle"
              class="item-box-category"
            >
              <div class="title-list-box-category">
                <h4>
                  <NuxtLink to="">
                    {{ listArticle.translations[$i18n.locale].title }}
                  </NuxtLink>
                </h4>
              </div>
              <div class="thumb-art-list-box-category">
                <NuxtLink to="">
                  <b-img :src="listArticle.photo"></b-img>
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
  name: 'TempletBoxCategory',
  props: {
    url: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      featuredArticle: null,
      listArticles: [],
      categoryData: null,
    }
  },
  async fetch() {
    await this.$store.dispatch('article/article/getArticleLayout', {
      url: this.url,
      limit: 4,
    })

    await this.$store.dispatch('category/category/showDetail', this.url)
  },
  computed: {
    ...mapState({
      layoutArticles: (state) => state.article.article.layoutArticles,
      category: (state) => state.category.category.category,
    }),
  },
  watch: {
    layoutArticles: {
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
    category: {
      handler(data) {
        if (data) {
          this.categoryData = data
        } else {
          this.categoryData = null
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/templet/templet-box-category';
</style>
