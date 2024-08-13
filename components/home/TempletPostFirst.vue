<template>
  <div class="templet-post-first">
    <div v-if="categoryData" class="wrapper-caption">
      <h4 class="caption">
        <NuxtLink to=""> {{ categoryData.name[$i18n.locale] }} </NuxtLink>
      </h4>
    </div>

    <div class="wrapper-content">
      <div class="row">
        <div class="col-content w50">
          <div v-if="featuredArticle" class="post-first-left">
            <NuxtLink to="">
              <div class="image-left">
                <b-img :src="featuredArticle.photo"></b-img>
              </div>
            </NuxtLink>

            <NuxtLink to="">
              <h4 class="title-left">
                {{ featuredArticle.translations[$i18n.locale].title }}
              </h4>
            </NuxtLink>
          </div>
        </div>
        <div class="col-content w50">
          <div v-if="topArticle" class="post-first-right">
            <div class="post-top">
              <div class="image-right">
                <NuxtLink to="">
                  <b-img :src="topArticle.photo"></b-img>
                </NuxtLink>
              </div>
              <div class="title-right">
                <h4>
                  <NuxtLink to="">
                    {{ topArticle.translations[$i18n.locale].title }}
                  </NuxtLink>
                </h4>
              </div>
            </div>
            <div class="post-bottom">
              <ul>
                <li v-for="(listArticle, index) in listArticles" :key="index">
                  <NuxtLink to="" class="title">
                    {{ listArticle.translations[$i18n.locale].title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TempletPostFirst',
  props: {
    url: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      featuredArticle: null,
      topArticle: null,
      listArticles: [],
      categoryData: null,
    }
  },
  async fetch() {
    await this.$store.dispatch('article/article/getTopFeaturedArticle', {
      url: this.url,
      limit: 7,
    })

    await this.$store.dispatch('category/category/showDetail', this.url)
  },
  computed: {
    ...mapState({
      topFeaturedArticle: (state) => state.article.article.topFeaturedArticle,
      category: (state) => state.category.category.category,
    }),
  },
  watch: {
    topFeaturedArticle: {
      handler(data) {
        if (data && data.length > 0) {
          this.featuredArticle = data[0]
          this.topArticle = data[1]
          this.listArticles = data.slice(2, 7)
        } else {
          this.featuredArticle = null
          this.topArticle = null
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
@import 'assets/scss/home/templet-post-first';
</style>
