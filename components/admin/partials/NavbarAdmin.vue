<template>
  <div class="navbar-admin">
    <div
      class="navbar-brand-wrapper"
      :class="{ 'collapse-brand': isCollapsed }"
    >
      <div class="logo-navbar-admin">
        <b-img :src="IMAGE.miniLogo"></b-img>
      </div>
      <div
        class="wrapper-toggle-navbar-admin"
        :class="{ 'collapse-button': isCollapsed }"
        @click="toggleNavbarAdmin()"
      >
        <b-img :src="ICON.menu"></b-img>
      </div>
    </div>
    <div class="navbar-menu-wrapper">
      <div class="">
        <section-title-line :section-title="getSectionTitle" />
      </div>
      <div class="wrapper-nav-profile">
        <b-dropdown right class="nav-profile">
          <template #button-content>
            <div class="avatar">
              <b-img :src="ICON.avatarDefault"></b-img>
            </div>
            <span class="name-profile">Admin</span>
            <b-img :src="ICON.arrowBottom2"></b-img>
          </template>
          <b-dropdown-item-button @click="logout()">
            <div class="wrapper-action-profile">
              <b-img :src="ICON.logout" class="icon-logout"></b-img>
              <span>Logout</span>
            </div>
          </b-dropdown-item-button>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitleLine from '~/components/admin/partials/SectionTitleLine'
import { sectionTitleLine, ICON, IMAGE } from '~/utils/constants'
export default {
  name: 'NavbarAdmin',
  components: {
    SectionTitleLine,
  },
  data() {
    return {
      ICON,
      IMAGE,
      sectionTitleLine,
      isCollapsed: false,
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
  methods: {
    logout() {
      this.$store.dispatch('auth/auth/logout')
    },
    toggleNavbarAdmin() {
      this.$bus.$emit('collapse-sidebar-admin')
      this.isCollapsed = !this.isCollapsed
    },
  },
}
</script>

<style lang="scss">
@import 'assets/scss/admin/partials/navbar-admin';
</style>
