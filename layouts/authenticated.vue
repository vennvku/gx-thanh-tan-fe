<template>
  <div class="authenticated-layout">
    <sidebar-admin />

    <div
      class="app-main"
      :class="{ 'collapse-sidebar-admin': isCollapseSidebarAdmin }"
    >
      <div class="app-main__outer">
        <navbar-admin />
        <div class="main-content-admin">
          <nuxt />
        </div>
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
      isCollapseSidebarAdmin: false,
      screenWidth: window.innerWidth,
      key: 0,
    }
  },

  mounted() {
    this.$bus.$on('collapse-sidebar-admin', () => {
      this.isCollapseSidebarAdmin = !this.isCollapseSidebarAdmin
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
  margin: 0;
  max-width: 100vw;

  .app-main {
    flex: 1;
    display: flex;
    margin-left: $sidebar-width;
    min-height: 100vh;
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    max-width: calc(100vw - $sidebar-width - 10px);

    &.collapse-sidebar-admin {
      margin-left: $close-sidebar-width;
      max-width: calc(100vw - $close-sidebar-width - 10px);
    }

    .app-main__outer {
      flex: 1;
      padding: 10px;
    }
  }
}
</style>
