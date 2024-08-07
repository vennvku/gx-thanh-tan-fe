<template>
  <div
    class="sidebar-admin"
    :class="{ 'collapse-sidebar-admin': isCollapseSidebarAdmin }"
  >
    <div class="wrapper-nav-sidebar-admin">
      <div class="wrapper-brand-admin">
        <div class="brand-admin">
          <div class="logo-navbar-admin">
            <b-img :src="IMAGE.miniLogo"></b-img>
          </div>
          <div
            class="wrapper-toggle-navbar-admin"
            :class="{ 'collapse-button': isCollapseSidebarAdmin }"
            @click="toggleNavbarAdmin()"
          >
            <b-img :src="ICON.menu"></b-img>
          </div>
        </div>
      </div>

      <ul class="nav-sidebar-admin">
        <li
          v-for="(item, key) in menuAdmin"
          :key="key"
          class="nav-item-sidebar-admin"
          :class="{
            'no-submenu': !item.children,
            active: currentPath === item.router,
          }"
        >
          <div class="wrapper-nav-item-left" @click="toggleSubMenu(item, key)">
            <div class="nav-item-left">
              <component :is="item.icon" class="icon-sidebar-admin" />
              <span class="title-sidebar-admin">
                {{ $t(`admin.menu.${item.title}.heading`) }}
              </span>
            </div>

            <right-arrow-admin-icon
              v-if="item.children && !item.isOpen"
              class="right-arrow-icon"
            />

            <arrow-bottom-admin-icon
              v-if="item.children && item.isOpen"
              class="right-arrow-icon"
            />
          </div>
          <b-collapse v-if="item.children" v-model="item.isOpen">
            <div class="sub-menu-sidebar-admin">
              <ul class="list-sub-menu-sidebar-admin">
                <li
                  v-for="(childItem, childKey) in item.children"
                  :key="childKey"
                  class="item-sub-menu-sidebar-admin"
                >
                  <div class="border-left-admin"></div>
                  <div class=""></div>
                  <div class="border-left-radius-admin"></div>
                  <span
                    class="title-sub-menu-sidebar-admin"
                    :class="{
                      active: currentPath === childItem.router,
                    }"
                    @click="goToChildItem(childItem)"
                    >{{
                      $t(`admin.menu.${item.title}.${childItem.title}`)
                    }}</span
                  >
                </li>
              </ul>
            </div>
          </b-collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import menuAdmin from '~/configs/menu-admin'
import { IMAGE, ICON } from '~/utils/constants'

export default {
  name: 'SidebarAdmin',
  components: {
    DashboardIcon: ICON.dashboard,
    ContentIcon: ICON.content,
    RightArrowAdminIcon: ICON.rightArrowAdmin,
    SettingIcon: ICON.setting,
    ExclamationIcon: ICON.exclamation,
    ArrowBottomAdminIcon: ICON.arrowBottomAdmin,
  },
  data() {
    return {
      menuAdmin,
      ICON,
      IMAGE,
      isCollapseSidebarAdmin: false,
    }
  },
  computed: {
    ...mapState({
      currentPath: (state) => state.common.path.currentPath,
    }),
  },
  mounted() {
    this.$store.dispatch('common/path/setCurrentPath', this.$route.name)
  },

  methods: {
    toggleSubMenu(item, key) {
      if (!item.children) {
        this.$store.dispatch('common/path/setCurrentPath', item.router)
        this.$router.push({ name: item.router })
      }

      this.menuAdmin[key].isOpen = !this.menuAdmin[key].isOpen
    },

    goToChildItem(childItem) {
      this.$store.dispatch('common/path/setCurrentPath', childItem.router)
      this.$router.push({ name: childItem.router })
    },

    toggleNavbarAdmin() {
      this.$bus.$emit('collapse-sidebar-admin')
      this.isCollapseSidebarAdmin = !this.isCollapseSidebarAdmin
    },
  },
}
</script>

<style lang="scss">
@import 'assets/scss/admin/partials/sidebar-admin';
</style>
