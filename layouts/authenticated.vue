<template>
  <div
    class="authenticated-layout app-container fixed-header fixed-sidebar"
    :class="{
      'close-sidebar': closeSidebar || screenWidth < 1250,
      'sidebar-mobile-open': openMobileSidebar && screenWidth < 992,
    }"
  >
    <div class="app-main">
      <div class="app-main__outer">
        <div class="app-main__inner">
          <!-- <section-title-line :section-title="getSectionTitle" /> -->
          <b-container class="p-0 m-0 app__container">
            <nuxt />
          </b-container>
        </div>
      </div>
    </div>
    <app-loading />
  </div>
</template>

<script>
import AppLoading from '~/components/partials/AppLoading'
// import SectionTitleLine from '~/components/partials/SectionTitleLine'
import { sectionTitleLine } from '~/utils/constants'

export default {
  name: 'AuthenticatedLayout',
  components: {
    // SectionTitleLine,
    AppLoading,
  },
  data() {
    return {
      sectionTitleLine,
      closeSidebar: false,
      openMobileSidebar: false,
      screenWidth: window.innerWidth,
      key: 0,
    }
  },
  computed: {
    getSectionTitle() {
      const routeName = this.$route.name

      return this.sectionTitleLine.find(
        (section) => section.route === routeName
      )
    },
  },
  mounted() {
    // Get current window width
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    // Event close sidebar
    this.$bus.$on('close-sidebar', () => {
      this.closeSidebar = !this.closeSidebar
    })
    this.$bus.$on('open-mobile-sidebar', () => {
      this.openMobileSidebar = !this.openMobileSidebar
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss">
@import 'assets/scss/variables';

.authenticated-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;

  .app-main {
    flex: 1;
    display: flex;
    z-index: 8;
    position: relative;
    padding-top: 60px;

    .app-main__outer {
      flex: 1;
      flex-direction: column;
      display: flex;
      transition: all $transition-duration ease;
      width: 100%;
      overflow: hidden;

      .app-main__inner {
        padding: 30px;
        margin-bottom: 60px;
        flex: 1;
        width: calc(100vw - $sidebar-width);

        @media screen and (max-width: 991px) {
          padding: 20px;
          margin-bottom: 60px;
        }

        .app__container {
          max-width: 100% !important;
        }

        .app__container {
          max-width: 100% !important;
        }
      }
    }
  }

  &.fixed-sidebar {
    .app-main {
      .app-main__outer {
        z-index: 9;
        padding-left: $sidebar-width;

        @media screen and (max-width: 991px) {
          padding-left: 0 !important;
        }

        .app-main__inner {
          width: calc(100vw - $sidebar-width);

          @media screen and (max-width: 991px) {
            width: 100vw;
          }
        }
      }
    }

    &.sidebar-mobile-open {
      .app-main__outer {
        @media screen and (max-width: 991px) {
          padding-left: $sidebar-width !important;
        }
      }
    }

    &.close-sidebar {
      .app-main {
        .app-main__outer {
          padding-left: $close-sidebar-width;

          .app-main__inner {
            width: calc(100vw - $close-sidebar-width);

            @media screen and (max-width: 991px) {
              width: 100vw;
            }
          }
        }
      }
    }
  }

  &.fixed-header {
    .app-main {
      padding-top: $header-height;
    }
  }
}
</style>
