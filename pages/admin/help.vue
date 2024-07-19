<template>
  <h2>Help Page</h2>
</template>

<script>
export default {
  name: 'HelpPage',
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {}
  },
}
</script>
