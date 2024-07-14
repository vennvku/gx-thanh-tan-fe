<template>
  <b-row class="setting-content m-0">
    <b-col col cols="12" class="p-0 action">
      <h2>$t('page.dashboard')</h2>
      <h3 @click="logout()">Logout</h3>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'DashboardPage',
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/auth/logout')
    },
  },
}
</script>
