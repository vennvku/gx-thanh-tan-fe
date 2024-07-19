<template>
  <div class="authenticated-layout">
    <sidebar-admin />

    <div
      class="app-main"
      :class="{ 'collapse-sidebar-admin': isCollapseSidebarAdmin }"
    >
      <div class="app-main__outer">
        <navbar-admin />
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

  .app-main {
    flex: 1;
    display: flex;
    padding-left: $sidebar-width;
    min-height: 100vh;
    flex-direction: column;
    transition: padding-left 0.4s ease-in-out;

    &.collapse-sidebar-admin {
      padding-left: $close-sidebar-width;
    }

    .app-main__outer {
      flex: 1;
      padding: 10px;
    }
  }
}
</style>
