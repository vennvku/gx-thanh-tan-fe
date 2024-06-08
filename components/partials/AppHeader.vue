<template>
  <div class="app-header d-flex align-items-center">
    <div class="banner-top">
      <b-img :src="IMAGE.banner"></b-img>
    </div>

    <div class="header-mobile">
      <div class="action-home-moblie">
        <NuxtLink to="">
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.6 31.2c-0.3 0-0.6-0.1-0.9-0.3L32 4.6 2.3 30.9c-0.6 0.5-1.4 0.4-1.9-0.1 -0.5-0.6-0.4-1.4 0.1-1.9L32 1l31.5 27.9c0.6 0.5 0.6 1.4 0.1 1.9C63.4 31.1 63 31.2 62.6 31.2z"
                fill="currentColor"
              />
              <path
                d="M57.7 63.8h-19v-19H25.2v19h-19V32.6c0-0.7 0.6-1.4 1.4-1.4S9 31.9 9 32.6V61h13.5v-19h19v19H55V32.6c0-0.7 0.6-1.4 1.4-1.4s1.4 0.6 1.4 1.4V63.8z"
                fill="currentColor"
              />
              <path
                d="M56.4 17.7c-0.7 0-1.4-0.6-1.4-1.4V9.6h-6.8c-0.7 0-1.4-0.6-1.4-1.4s0.6-1.4 1.4-1.4h9.5v9.5C57.7 17.1 57.1 17.7 56.4 17.7z"
                fill="currentColor"
              />
            </svg>
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
              <div class="wrapper-item">
                <NuxtLink to="">
                  <span class="icon-home">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M62.6 31.2c-0.3 0-0.6-0.1-0.9-0.3L32 4.6 2.3 30.9c-0.6 0.5-1.4 0.4-1.9-0.1 -0.5-0.6-0.4-1.4 0.1-1.9L32 1l31.5 27.9c0.6 0.5 0.6 1.4 0.1 1.9C63.4 31.1 63 31.2 62.6 31.2z"
                        fill="currentColor"
                      />
                      <path
                        d="M57.7 63.8h-19v-19H25.2v19h-19V32.6c0-0.7 0.6-1.4 1.4-1.4S9 31.9 9 32.6V61h13.5v-19h19v19H55V32.6c0-0.7 0.6-1.4 1.4-1.4s1.4 0.6 1.4 1.4V63.8z"
                        fill="currentColor"
                      />
                      <path
                        d="M56.4 17.7c-0.7 0-1.4-0.6-1.4-1.4V9.6h-6.8c-0.7 0-1.4-0.6-1.4-1.4s0.6-1.4 1.4-1.4h9.5v9.5C57.7 17.1 57.1 17.7 56.4 17.7z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </NuxtLink>
              </div>
            </li>
            <li class="menu-item">
              <div class="wrapper-item">
                <h4 class="text-item">
                  Giáo xứ
                  <span class="arrow">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.79993 1.128L8.67193 0L4.99993 3.664L1.32793 0L0.199926 1.128L4.99993 5.928L9.79993 1.128Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </h4>
              </div>
              <div
                class="dropdown-sub"
                :style="{ top: positionTopMenu + 'px' }"
              >
                <b-container fluid class="wrapper-sub-menu cont-wrap">
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item">Lịch sử Giáo xứ</span>
                    </NuxtLink>
                  </div>
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item">Lm. Quản Xứ</span>
                    </NuxtLink>
                  </div>
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item">Quý chức</span>
                    </NuxtLink>
                  </div>
                </b-container>
              </div>
            </li>
            <li class="menu-item">
              <div class="wrapper-item">
                <h4 class="text-item">
                  Tin tức
                  <span class="arrow">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.79993 1.128L8.67193 0L4.99993 3.664L1.32793 0L0.199926 1.128L4.99993 5.928L9.79993 1.128Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </h4>
              </div>
              <div
                class="dropdown-sub"
                :style="{ top: positionTopMenu + 'px' }"
              >
                <b-container fluid class="wrapper-sub-menu cont-wrap">
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item">Tin Giáo xứ</span>
                    </NuxtLink>
                  </div>
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item">Tin Giáo Phận</span>
                    </NuxtLink>
                  </div>
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item"
                        >Tin Giáo Hội Việt Nam</span
                      >
                    </NuxtLink>
                  </div>
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item"
                        >Tin Giáo Hội Hoàn Vũ</span
                      >
                    </NuxtLink>
                  </div>
                </b-container>
              </div>
            </li>
            <li class="menu-item">
              <div class="wrapper-item">
                <NuxtLink to="">
                  <h4 class="text-item">Lời Chúa</h4>
                </NuxtLink>
              </div>
            </li>
            <li class="menu-item">
              <div class="wrapper-item">
                <h4 class="text-item">
                  Hội đoàn
                  <span class="arrow">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.79993 1.128L8.67193 0L4.99993 3.664L1.32793 0L0.199926 1.128L4.99993 5.928L9.79993 1.128Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </h4>
              </div>
              <div
                class="dropdown-sub"
                :style="{ top: positionTopMenu + 'px' }"
              >
                <b-container fluid class="wrapper-sub-menu cont-wrap">
                  <div class="sub-menu-item">
                    <NuxtLink to="">
                      <span class="sub-menu-text-item"
                        >Hội Caritas Giáo xứ</span
                      >
                    </NuxtLink>
                  </div>
                </b-container>
              </div>
            </li>
            <li class="menu-item">
              <div class="wrapper-item">
                <NuxtLink to="">
                  <h4 class="text-item">Suy tư - tản mạn</h4>
                </NuxtLink>
              </div>
            </li>
            <li class="menu-item">
              <div class="wrapper-item">
                <NuxtLink to="">
                  <h4 class="text-item">Tài liệu</h4>
                </NuxtLink>
              </div>
            </li>
            <li class="menu-item">
              <div class="wrapper-item">
                <NuxtLink to="">
                  <h4 class="text-item">Liên hệ</h4>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>

        <div class="menu-right">
          <ul>
            <li>
              <i class="sepr"></i>
            </li>
            <li>
              <NuxtLink to="">
                <span class="text-item-right">Mới nhất</span>
              </NuxtLink>
            </li>
            <li class="item-gio-le">
              <NuxtLink to="">
                <span class="text-item-right">Giờ Lễ</span>
              </NuxtLink>
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
import ButtonHamburger from '~/components/common/ButtonHamburger'
import { IMAGE, SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'AppHeader',
  components: { ButtonHamburger },
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
    }
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
