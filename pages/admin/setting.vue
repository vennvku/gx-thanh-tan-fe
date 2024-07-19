<template>
  <h2>Setting Page</h2>
</template>

<script>
export default {
  name: 'SettingPage',
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {}
  },
}
</script>
