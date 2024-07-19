<template>
  <h2>Dashboard Page</h2>
</template>

<script>
export default {
  name: 'DashboardPage',
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {}
  },
}
</script>
