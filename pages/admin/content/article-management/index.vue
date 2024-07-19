<template>
  <h2>Article Management Page</h2>
</template>

<script>
export default {
  name: 'ArticleManagement',
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {}
  },
}
</script>
