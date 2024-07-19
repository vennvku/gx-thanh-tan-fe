<template>
  <div class="authenticated-layout">
    <navbar-admin />
    <div class="app-main">
      <sidebar-admin />
      <div class="app-main__outer">
        <b-container class="p-0 m-0">
          <nuxt />
        </b-container>
      </div>
    </div>
    <app-loading />
  </div>
</template>

<script>
import AppLoading from '~/components/partials/AppLoading'

import NavbarAdmin from '~/components/admin/partials/NavbarAdmin'
import SidebarAdmin from '~/components/admin/partials/SidebarAdmin'
import { ICON } from '~/utils/constants'

export default {
  name: 'AuthenticatedLayout',
  components: {
    AppLoading,
    NavbarAdmin,
    SidebarAdmin,
  },
  data() {
    return {
      ICON,
      closeSidebar: false,
      openMobileSidebar: false,
      screenWidth: window.innerWidth,
      key: 0,
    }
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

<style lang="scss" scoped>
@import 'assets/scss/variables';

.authenticated-layout {
  display: flex;

  flex-direction: column;
  margin: 0;

  .app-main {
    display: flex;
    padding-top: 60px;
    min-height: 100vh;

    .app-main__outer {
      flex: 1;
      background-color: #f5f7ff;
      padding: 20px;
    }
  }
}
</style>
