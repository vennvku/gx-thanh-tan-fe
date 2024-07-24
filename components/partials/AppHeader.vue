<template>
  <div class="app-header d-flex align-items-center">
    <div class="banner-top">
      <b-img :src="IMAGE.banner"></b-img>
    </div>

    <div class="header-mobile">
      <div class="action-home-moblie">
        <NuxtLink to="">
          <span>
            <church-icon />
          </span>
        </NuxtLink>
      </div>
      <div class="btn-action-mobile">
        <button-hamburger
          :is-active="isMobileActive"
          :data-class="`toggle-navbar`"
          @eventClick="toggleNavbar()"
        />
      </div>

      <div class="header__action" :class="{ 'mobile-show': isMobileActive }">
        <div class="wrapper-item-menu-moblie">
          <div class="item-menu-mobile">
            <h4 class="text-item-moblie">Giáo xứ</h4>
            <ul class="list-item-sub-moblie">
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Lịch sử Giáo xứ</h5>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Lm. Quản xứ</h5>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Quý chức</h5>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="item-menu-mobile">
            <h4 class="text-item-moblie">Tin tức</h4>

            <ul class="list-item-sub-moblie">
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Tin Giáo xứ</h5>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Tin Giáo phận</h5>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Tin Giáo hội Việt Nam</h5>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Tin Giáo hội Hoàn Vũ</h5>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Tin Giáo hội Hoàn Vũ</h5>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Tin Giáo hội Hoàn Vũ</h5>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Tin Giáo hội Hoàn Vũ</h5>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="item-menu-mobile">
            <NuxtLink to="">
              <h4 class="text-item-moblie">Lời Chúa</h4>
            </NuxtLink>
          </div>
          <div class="item-menu-mobile">
            <h4 class="text-item-moblie">Hội đoàn</h4>

            <ul class="list-item-sub-moblie">
              <li>
                <NuxtLink to="">
                  <h5 class="text-item-sub-moblie">Hội Caritas Giáo xứ</h5>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="item-menu-mobile">
            <NuxtLink to="">
              <h4 class="text-item-moblie">Suy tư - tản mạn</h4>
            </NuxtLink>
          </div>
          <div class="item-menu-mobile">
            <NuxtLink to="">
              <h4 class="text-item-moblie">Tài liệu</h4>
            </NuxtLink>
          </div>
          <div class="item-menu-mobile">
            <NuxtLink to="">
              <h4 class="text-item-moblie">Liên hệ</h4>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div ref="navbar" class="nav-menu" :class="{ 'fixed-menu': isFixed }">
      <b-container class="menu-bar-wrapper cont-wrap" fluid>
        <div class="menu-bar">
          <ul ref="menuside" class="menu-side">
            <li class="menu-item">
              <div
                class="wrapper-item"
                :class="{ active: currentPath === '/' }"
              >
                <NuxtLink to="/">
                  <span class="icon-home">
                    <church-icon />
                  </span>
                </NuxtLink>
              </div>
            </li>

            <li
              v-for="(category, key) in categoriesData"
              :key="key"
              class="menu-item"
            >
              <span v-if="category.has_children">
                <div
                  class="wrapper-item"
                  :class="{ active: currentPath === category.url }"
                >
                  <h4 class="text-item">
                    {{ category.name[$i18n.locale] }}
                    <span class="arrow">
                      <arrow-bottom-icon />
                    </span>
                  </h4>
                </div>

                <div
                  class="dropdown-sub"
                  :style="{ top: positionTopMenu + 'px' }"
                >
                  <b-container fluid class="wrapper-sub-menu cont-wrap">
                    <div
                      v-for="(
                        categoryChildren, keycategoryChildren
                      ) in category.children"
                      :key="keycategoryChildren"
                      class="sub-menu-item"
                    >
                      <NuxtLink :to="categoryChildren.url">
                        <span class="sub-menu-text-item">{{
                          categoryChildren.name[$i18n.locale]
                        }}</span>
                      </NuxtLink>
                    </div>
                  </b-container>
                </div>
              </span>

              <span v-else>
                <div
                  class="wrapper-item"
                  :class="{ active: currentPath === category.url }"
                >
                  <NuxtLink :to="category.url">
                    <h4 class="text-item">{{ category.name[$i18n.locale] }}</h4>
                  </NuxtLink>
                </div>
              </span>
            </li>
          </ul>
        </div>

        <div class="menu-right">
          <ul>
            <li>
              <i class="sepr"></i>
            </li>
            <li>
              <NuxtLink :to="SCREEN_PATH.MENU.ARTICLE_LATEST">
                <span class="text-item-right">{{
                  $t('menu.articleLatest')
                }}</span>
              </NuxtLink>
            </li>
            <li class="item-gio-le">
              <NuxtLink :to="SCREEN_PATH.MENU.MASS_TIMES">
                <span class="text-item-right">{{ $t('menu.massTimes') }}</span>
              </NuxtLink>
            </li>
            <li>
              <multi-language />
            </li>
          </ul>
          <div
            ref="searchbar"
            class="search-bar"
            :class="{ active: isShowSearchBar }"
            @click="showSearchBar()"
          >
            <form action="" class="search-form">
              <input type="text" name="" />
            </form>
          </div>
          <div
            class="close-search-bar"
            :class="{ active: isShowSearchBar }"
            @click="hideSearchBar()"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.707,8.707,13.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </b-container>

      <div class="fix-line"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ButtonHamburger from '~/components/common/ButtonHamburger'
import MultiLanguage from '~/components/partials/header/MultiLanguage'
import { IMAGE, SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'AppHeader',
  components: {
    ButtonHamburger,
    MultiLanguage,
    ChurchIcon: ICON.church,
    ArrowBottomIcon: ICON.arrowBottom,
  },
  data() {
    return {
      IMAGE,
      SCREEN_PATH,
      ICON,
      isMobileActive: false,
      isFixed: false,
      lastScrollTop: 0,
      initialNavOffset: 0,
      positionTopMenu: 206,
      isShowSearchBar: false,
      categoriesData: [],
    }
  },
  async fetch() {
    await this.$store.dispatch('category/category/get')
  },
  computed: {
    ...mapState({
      currentPath: (state) => state.common.path.currentPath,
      categories: (state) => state.category.category.categories,
    }),
  },
  watch: {
    categories: {
      handler(data) {
        if (data.length > 0) {
          this.categoriesData = data
        } else {
          this.categoriesData = []
        }
      },
    },
  },
  mounted() {
    this.initialNavOffset = this.$refs.navbar.offsetTop
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('click', this.handleClickOutsideSearchBar)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
    window.addEventListener('click', this.handleClickOutsideSearchBar)
  },

  methods: {
    onScroll() {
      const currentScroll = window.pageYOffset
      if (currentScroll > this.initialNavOffset) {
        this.isFixed = true
      } else if (currentScroll <= this.initialNavOffset) {
        this.isFixed = false
      }
      this.lastScrollTop = currentScroll

      const menusideElement = this.$refs.menuside
      if (menusideElement) {
        const rect = menusideElement.getBoundingClientRect()
        this.positionTopMenu = rect.top + 46
        if (this.positionTopMenu < 46) {
          this.positionTopMenu = 46
        }
      } else {
        this.positionTopMenu = 46
      }
    },
    toggleNavbar() {
      this.isMobileActive = !this.isMobileActive
    },
    showSearchBar() {
      this.isShowSearchBar = true
    },
    hideSearchBar() {
      this.isShowSearchBar = false
    },
    handleClickOutsideSearchBar(event) {
      if (!this.$refs.searchbar.contains(event.target)) {
        this.isShowSearchBar = false
      }
    },
    previousPage() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/partials/header';
</style>
