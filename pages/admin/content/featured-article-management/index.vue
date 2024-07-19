<template>
  <h2>Featured Article Management Page</h2>
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
