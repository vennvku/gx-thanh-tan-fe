<template>
  <div class="main-head">
    <div class="row">
      <div class="col-content pad-320">
        <div class="row">
          <div class="col-content w50 w50-head">
            <mix-slide :slide-news="slideNews" :list-news="listNews" />
          </div>

          <div class="col-content w50 w50-head">
            <div class="mix-news">
              <div class="mix-news-top">
                <ul>
                  <li v-for="(mainNew, index) in mainNews" :key="index">
                    <div class="wrapper-title">
                      <NuxtLink
                        :to="`tin-tuc/${mainNew.categories.url}/${mainNew.slug}`"
                        class="title"
                      >
                        {{ mainNew.translations[$i18n.locale].title }}
                      </NuxtLink>
                      <div v-if="(index == 0) | (index == 1)" class="info">
                        <NuxtLink :to="mainNew.categories.url">
                          {{ mainNew.categories.name[$i18n.locale] }}
                        </NuxtLink>
                      </div>
                    </div>
                    <div v-if="(index == 0) | (index == 1)" class="thumb">
                      <NuxtLink
                        :to="`tin-tuc/${mainNew.categories.url}/${mainNew.slug}`"
                      >
                        <b-img :src="mainNew.photo"></b-img>
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-content fit-320">
        <div class="sidebar-right-head">
          <div class="lm-quan-xu">
            <div class="img">
              <NuxtLink to="">
                <b-img :src="require('@/assets/img/lm-quan-xu.jpg')"></b-img>
              </NuxtLink>
            </div>
            <NuxtLink to="lm-quan-xu">
              <h4 class="title">Linh mục Phêrô Nguyễn Văn Phước</h4></NuxtLink
            >
            <h5 class="des">Quản xứ Giáo xứ Thanh Tân</h5>
          </div>

          <div class="wrapper-gio-le">
            <span class="title-gio-le">Giờ Lễ tại Giáo xứ</span>

            <div class="content-gio-le">
              <div class="title-day">
                <span>Thứ 2</span>
                <span class="arrow-right-day">
                  <b-img :src="ICON.rightArrow2"></b-img>
                </span>
                <span>Thứ 7</span>
              </div>
              <div class="gio-le">
                <span class="icon-day"
                  ><b-img :src="ICON.morning"></b-img
                ></span>

                <span class="text-day"
                  ><strong>Sáng:</strong> <i>05h05</i></span
                >
              </div>

              <div class="gio-le">
                <span class="icon-day"><b-img :src="ICON.night"></b-img></span>

                <span class="text-day"
                  ><strong>Chiều:</strong> <i>18h30</i></span
                >
              </div>
            </div>

            <div class="content-gio-le">
              <div class="title-day"><span>Chủ nhật</span></div>
              <div class="gio-le">
                <span class="icon-day"
                  ><b-img :src="ICON.morning"></b-img
                ></span>

                <span class="text-day"
                  ><strong>Sáng:</strong> <i>06h00</i></span
                >
              </div>

              <div class="gio-le">
                <span class="icon-day"><b-img :src="ICON.night"></b-img></span>

                <span class="text-day"
                  ><strong>Chiều:</strong> <i>17h30</i></span
                >
              </div>
            </div>

            <div class="chi-tiet-gio-le">Xem giờ lễ chi tiết: Tại đây</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-content pad-320">
        <templet-post-first :url="urlPostFirst" />
      </div>
      <div class="col-content fit-320">2 3</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MixSlide from '~/components/home/MixSlide'
import TempletPostFirst from '~/components/home/TempletPostFirst'
import { ICON } from '~/utils/constants'

export default {
  name: 'DefaultPage',
  components: {
    MixSlide,
    TempletPostFirst,
  },
  data() {
    return {
      ICON,
      mainNews: [],
      slideNews: [],
      listNews: [],
      urlPostFirst: 'parish-news',
    }
  },
  async fetch() {
    await this.$store.dispatch('article/article/getFeaturedLatestNews')
  },
  head() {
    return {
      title: this.$t('page.top'),
    }
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.article.article.isCallApi,
      featuredLatestNews: (state) => state.article.article.featuredLatestNews,
    }),
  },
  watch: {
    featuredLatestNews: {
      handler(articles) {
        if (articles && articles.length > 0) {
          this.slideNews = articles.slice(0, 7)
          this.listNews = articles.length > 7 ? articles.slice(7, 10) : []
          this.mainNews = articles.length > 10 ? articles.slice(10) : []
        } else {
          this.slideNews = []
          this.listNews = []
          this.mainNews = []
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.$store.dispatch('common/path/setCurrentPath', this.$route.path)
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/main/home';
</style>
