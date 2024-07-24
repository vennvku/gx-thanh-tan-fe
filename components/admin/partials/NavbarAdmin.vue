<template>
  <div class="navbar-admin">
    <div class="navbar-menu-wrapper">
      <div class="">
        <section-title-line :section-title="getSectionTitle" />
      </div>
      <div class="wrapper-nav-profile">
        <multi-language />

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
import MultiLanguage from '~/components/partials/header/MultiLanguage'
import { sectionTitleLine, ICON, IMAGE } from '~/utils/constants'
export default {
  name: 'NavbarAdmin',
  components: {
    SectionTitleLine,
    MultiLanguage,
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
  },
}
</script>

<style lang="scss">
@import 'assets/scss/admin/partials/navbar-admin';
</style>
